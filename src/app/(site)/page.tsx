import Link from "next/link";
import TypewriterRoles from "@/components/TypewriterRoles";

const highlights = [
  {
    title: "Research",
    description:
      "Interdisciplinary research across analytics, payments, policy, and evidence-based decision-making.",
    href: "/research",
  },
  {
    title: "Publications",
    description:
      "Published and ongoing scholarly work, conference outputs, papers, and technical contributions.",
    href: "/publications",
  },
  {
    title: "Projects",
    description:
      "Data science, analytics, and applied technical projects built across academic and professional contexts.",
    href: "/projects",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pt-36 pb-20 text-white">
      <section className="mx-auto max-w-5xl">
                <TypewriterRoles />

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Kevynn Delgado
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-neutral-300">
          Bridging academia, data science, research, and payments regulation
          through analytical thinking, evidence-based policy, and technical
          innovation.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/cv"
            className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            View CV
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:border-white/50"
          >
            Explore Projects
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-5xl gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30 hover:bg-white/[0.06]"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-4 leading-7 text-neutral-400">
              {item.description}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
}