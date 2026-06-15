import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";

type VenueType = "journal" | "conference" | "book-chapter";

const venueLabels: Record<VenueType, string> = {
  journal: "Journal Article",
  conference: "Conference Paper",
  "book-chapter": "Book Chapter",
};

const venueColors: Record<VenueType, string> = {
  journal: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  conference: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  "book-chapter": "text-violet-400 border-violet-400/30 bg-violet-400/5",
};

export default async function PublicationsPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const rawPublications = await reader.collections.publications.all();

    // Sort descending by year then alphabetically by title
    type PubEntry = (typeof rawPublications)[number]["entry"] & { slug: string };
  const publications: PubEntry[] = rawPublications
    .map((p) => ({ slug: p.slug, ...p.entry }))
    .sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title));
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Scholarship"
        title="Publications"
        description="Peer-reviewed journal articles, conference proceedings, and book chapters spanning data science, payments, digital transformation, and technology behavior."
      />

            {/* Stats bar */}
      <div className="mx-auto mt-10 max-w-5xl flex flex-wrap gap-6">
        {[
          { label: "Total Publications", value: publications.length },
          { label: "Journal Articles", value: publications.filter((p) => p.venueType === "journal").length },
          { label: "Conference Papers", value: publications.filter((p) => p.venueType === "conference").length },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-0.5 text-xs uppercase tracking-widest text-neutral-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Publication list */}
      <section className="mx-auto mt-12 max-w-5xl space-y-5">
        {publications.map((pub) => {
          const venueType = pub.venueType as VenueType;
          return (
            <div
              key={pub.slug}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Top row: year + badge */}
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-neutral-500">{pub.year}</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    venueColors[venueType]
                  }`}
                >
                  {venueLabels[venueType]}
                </span>
              </div>

              {/* Title */}
              <p className="text-base font-semibold leading-snug text-white">{pub.title}</p>

              {/* Authors */}
              <p className="mt-2 text-sm text-neutral-400">{pub.authors}</p>

              {/* Venue */}
              <p className="mt-1 text-sm italic text-neutral-500">{pub.venue}</p>

              {/* DOI */}
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-neutral-500 underline underline-offset-4 transition hover:text-neutral-300"
                >
                  {pub.doi}
                </a>
              )}
            </div>
          );
        })}
      </section>
    </PageContainer>
  );
}