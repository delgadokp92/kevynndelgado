import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

type Publication = {
  authors: string;
  year: string;
  title: string;
  venue: string;
  venueType: "journal" | "conference" | "book-chapter";
  doi: string;
};

const publications: Publication[] = [
  {
    authors: "Delgado, K.P., & Ebardo, R.",
    year: "2026",
    title: "A Geospatial Analytics Framework for Assessing Pharmacy Service Environments",
    venue: "Healthcare Analytics (Journal), 9, 100457",
    venueType: "journal",
    doi: "https://doi.org/10.1016/j.health.2026.100457",
  },
  {
    authors: "Delgado, K. P., & Ebardo, R.",
    year: "2025",
    title:
      "Charting Careers in Data Science and Artificial Intelligence: Community Perspectives on Degree Essentiality",
    venue:
      "Proceedings of the Multi-disciplinary Trends in Artificial Intelligence (MIWAI 2024), pp. 127\u2013138. Springer.",
    venueType: "conference",
    doi: "https://doi.org/10.1007/978-981-96-0692-4_11",
  },
  {
    authors: "Delgado, K. P., & Caguiat, M. R. R.",
    year: "2024",
    title:
      "Psychological State Analysis for Technostress Detection: A Hierarchical Clustering Approach",
    venue:
      "Proceedings of the International Conference on Soft Computing (icSoftComp 2024)",
    venueType: "conference",
    doi: "https://doi.org/10.1007/978-3-031-88039-1_31",
  },
  {
    authors: "Delgado, K. P., Martinez, M. R., Valsado, C. J., & Ebardo, R.",
    year: "2024",
    title:
      "Zooming In on Educator Well-Being: Exploring Behavior Attributes, Zoom Fatigue, and Burnout Dynamics",
    venue:
      "Proceedings of the 32nd International Conference on Computers in Education (ICCE 2024)",
    venueType: "conference",
    doi: "https://doi.org/10.58459/icce.2024.5011",
  },
  {
    authors: "Delgado, K. P., & Caguiat, M. R. R.",
    year: "2024",
    title:
      "Assessing Digital Transformation Dynamics: A Network Science Analysis of Government ICT Procurement in Pre- and Post-COVID-19 Philippines",
    venue:
      "Proceedings of the 4th International Conference on Advances in Computational Science and Engineering (ICACSE 2023), pp. 371\u2013389. Springer.",
    venueType: "conference",
    doi: "https://doi.org/10.1007/978-981-97-2977-7_23",
  },
];

const venueLabels: Record<Publication["venueType"], string> = {
  journal: "Journal Article",
  conference: "Conference Paper",
  "book-chapter": "Book Chapter",
};

const venueColors: Record<Publication["venueType"], string> = {
  journal: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  conference: "text-sky-400 border-sky-400/30 bg-sky-400/5",
  "book-chapter": "text-violet-400 border-violet-400/30 bg-violet-400/5",
};

export default function PublicationsPage() {
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
        {publications.map((pub, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            {/* Top row: year + badge */}
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-neutral-500">{pub.year}</span>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                  venueColors[pub.venueType]
                }`}
              >
                {venueLabels[pub.venueType]}
              </span>
            </div>

            {/* Title */}
            <p className="text-base font-semibold leading-snug text-white">{pub.title}</p>

            {/* Authors */}
            <p className="mt-2 text-sm text-neutral-400">{pub.authors}</p>

            {/* Venue */}
            <p className="mt-1 text-sm italic text-neutral-500">{pub.venue}</p>

            {/* DOI */}
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-neutral-500 underline underline-offset-4 transition hover:text-neutral-300"
            >
              {pub.doi}
            </a>
          </div>
        ))}
      </section>
    </PageContainer>
  );
}