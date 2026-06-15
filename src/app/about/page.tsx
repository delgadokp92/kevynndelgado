import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

const researchFoci = [
  "Payments data management, market visibility, and risk analytics",
  "Open Finance in Payments",
  "Digital regulatory infrastructure and supervisory technology",
  "AI-assisted monitoring and compliance frameworks",
  "Digital financial ecosystems in emerging economies",
  "Cross-border payments and interoperability",
];

const quickFacts = [
  { label: "Current Role", value: "Bank Officer V, Bangko Sentral ng Pilipinas" },
  { label: "Academic Post", value: "Assistant Professorial Lecturer II, De La Salle University" },
  { label: "International", value: "Adviser, BIS Innovation Hub — Project Nadim" },
  { label: "Doctoral Study", value: "Doctor in Information Technology, DLSU (In Progress)" },
  { label: "Based In", value: "Manila, Philippines" },
];

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Profile"
        title="About"
        description="Central banking data and regulatory analytics professional, researcher, and lecturer bridging data science, payments policy, and financial integrity."
      />

      {/* Professional Summary */}
      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
          Professional Summary
        </h2>
        <div className="space-y-5 text-base leading-8 text-neutral-300">
          <p>
            Central banking data and regulatory analytics professional with over a decade of
            experience at the Bangko Sentral ng Pilipinas spanning AML/CFT analytics, enterprise
            data systems, and payments data management. Professional work has focused on the design,
            processing, and analysis of regulatory and transaction data — particularly AML reports
            and payments datasets — to support supervision, financial integrity, operational
            decision-making, and policy development.
          </p>
          <p>
            Experience spans financial intelligence reporting, data modelling, analytics workflows,
            and the development of SAS- and Python-based analytical systems supporting AML/CFT
            operations, inter-agency reporting, and enterprise analytics platforms. More recently,
            work has focused on payments system data collection, analytics, market visibility, and
            evidence-based policy support.
          </p>
          <p>
            Current international engagements include serving as an adviser to the Bank for
            International Settlements Innovation Hub&apos;s Project Nadim, which explores
            cross-border collaboration for fraud detection through the sharing of fraud intelligence
            derived from transaction analytics, and co-leading the EDKP CC to support data and
            knowledge collaboration within the central banking ecosystem.
          </p>
          <p>
            Also an active researcher and lecturer with peer-reviewed publications and ongoing
            doctoral research in technology behavior and digital transformation. Research and policy
            interests include digital payments, financial innovation in emerging economies, financial
            crime analytics, technology adoption, and the application of advanced analytics and AI
            in supervisory and regulatory contexts.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
          At a Glance
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">{fact.label}</p>
              <p className="mt-1 text-sm text-neutral-200">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Focus */}
      <section className="mx-auto mt-16 max-w-5xl">
        <h2 className="mb-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
          Policy Focus &amp; Emerging Research Directions
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {researchFoci.map((focus) => (
            <li
              key={focus}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-neutral-300"
            >
              <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
              {focus}
            </li>
          ))}
        </ul>
      </section>
    </PageContainer>
  );
}