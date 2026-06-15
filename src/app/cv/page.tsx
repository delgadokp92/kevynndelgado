import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  {
    org: "Bank for International Settlements (BIS)",
    location: "Manila",
    department: "BIS Innovation Hub, Singapore Centre",
    roles: [
      {
        title: "Adviser",
        period: "Present",
        bullets: [
          "Advising on Project Nadim, a cross-border initiative exploring international information-sharing mechanisms to strengthen fraud detection and financial crime prevention.",
          "Contributing to the design and evaluation of proof-of-concept approaches for sharing fraud patterns derived from local transaction analytics across jurisdictions.",
          "Collaborating with central banks and international partners to advance cooperative frameworks for financial crime prevention.",
        ],
      },
    ],
  },
  {
    org: "Bangko Sentral ng Pilipinas",
    location: "Manila",
    department: "Payments Policy and Development Department",
    roles: [
      {
        title: "Bank Officer V",
        period: "2024 \u2013 Present",
        bullets: [
          "Leads data collection workstream and conducts processing and analytics for the Payments Data Management and Analytics Group in support of payments system oversight.",
          "Conducts data analysis and policy-oriented research on payment system activity, infrastructure performance, and adoption trends.",
          "Designs, develops, and maintains analytical tools and quantitative models to support the timely measurement and reporting of payments indicators.",
        ],
      },
    ],
  },
  {
    org: "",
    location: "",
    department: "Anti-Money Laundering Council Secretariat",
    roles: [
      {
        title: "Bank Officer IV",
        period: "2021 \u2013 2024",
        bullets: [
          "Led the Data Intelligence for Strategic Solutions Unit, providing analytics and data-driven solutions to support AML/CFT intelligence operations.",
          "Served as SAS/Python full-stack developer, applications coordinator, and data scientist, supporting enterprise AML analytics platforms.",
          "Managed IT systems and data solutions for users of the SAS Data Mining System, ensuring reliability and functional alignment with operational needs.",
        ],
      },
      {
        title: "Bank Officer II",
        period: "2018 \u2013 2021",
        bullets: [
          "Performed financial intelligence and data mining analysis to support AML/CFT investigations.",
          "Produced analytical reports and intelligence outputs for various internal and inter-agency stakeholders.",
        ],
      },
    ],
  },
  {
    org: "",
    location: "",
    department: "Information Technology Systems Management Department",
    roles: [
      {
        title: "Bank Officer II",
        period: "2017 \u2013 2018",
        bullets: [
          "Conducted business analysis and supported the migration of financial reports into the BSP Data Warehouse.",
        ],
      },
      {
        title: "Information Systems Analyst",
        period: "2016 \u2013 2017",
        bullets: [
          "Performed system integration testing and assisted in UAT for BSP information systems.",
        ],
      },
      {
        title: "Research Analyst",
        period: "2013 \u2013 2016",
        bullets: [
          "Developed and maintained ETL processes using SAS software to support enterprise data and reporting requirements.",
        ],
      },
      {
        title: "Outsourced SAS Developer (c/o LSERV Corporation)",
        period: "2012 \u2013 2013",
        bullets: [
          "Conducted program testing for SAS code amendments within the BSP Data Warehouse environment.",
          "Developed data extraction and transformation processes for financial reporting.",
        ],
      },
    ],
  },
];

const academic = [
  {
    org: "De La Salle University (Part-time)",
    location: "Manila",
    roles: [
      {
        title: "Assistant Professorial Lecturer II",
        period: "2021 \u2013 Present",
        description:
          "Teaching across the Information Technology and Mathematics & Statistics Departments in data analytics, statistics, information systems, and performance management. Courses taught include Trends in Information Systems, Data and Business Analytics, Statistics for Research, Exploratory Data Analysis, Linear Models, Data Analytics, and others related.",
      },
    ],
  },
];

const education = [
  {
    degree: "Doctor in Information Technology",
    institution: "De La Salle University",
    location: "Manila",
    period: "2023 \u2013 Present",
    note: "Pending Dissertation Proposal Defense and Writing",
  },
  {
    degree: "Master of Science in Data Science",
    institution: "Asian Institute of Management",
    location: "Makati",
    period: "2020 \u2013 2021",
    note: "CGPA: 4.24 | Dean\u2019s Lister",
    detail:
      "Capstone: D-ILDS \u2014 An Intelligent Learning and Development System for DepEd. Collaborated with the Department of Education to create a system serving as basis for learning and development programs for teachers.",
  },
  {
    degree: "Master in Business Administration",
    institution: "Philippine Christian University",
    location: "Manila",
    period: "2016 \u2013 2019",
  },
  {
    degree: "Bachelor of Science in Statistics, Major in Actuarial Science",
    institution: "De La Salle University",
    location: "Manila",
    period: "2009 \u2013 2012",
    detail:
      "Completed 30 additional units under the MS in Statistics program (2014\u20132017), including Probability Theory, Linear Models, Statistical Inference, Multivariate Analysis, Sampling Theory and Methods, and Time-Series Analysis.",
  },
];

const publications = [
  {
    citation:
      "Delgado, K.P., & Ebardo, R. (2026, June). A Geospatial Analytics Framework for Assessing Pharmacy Service Environments. Healthcare Analytics (Journal), 9, 100457.",
    doi: "https://doi.org/10.1016/j.health.2026.100457",
  },
  {
    citation:
      "Delgado, K. P., & Ebardo, R. (2025, February). Charting Careers in Data Science and Artificial Intelligence: Community Perspectives on Degree Essentiality. In Proceedings of the Multi-disciplinary Trends in Artificial Intelligence (MIWAI 2024) (pp. 127\u2013138). Springer.",
    doi: "https://doi.org/10.1007/978-981-96-0692-4_11",
  },
  {
    citation:
      "Delgado, K. P., & Caguiat, M. R. R. (2024, December). Psychological State Analysis for Technostress Detection: A Hierarchical Clustering Approach. Proceedings of the International Conference on Soft Computing (icSoftComp 2024).",
    doi: "https://doi.org/10.1007/978-3-031-88039-1_31",
  },
  {
    citation:
      "Delgado, K. P., Martinez, M. R., Valsado, C. J., & Ebardo, R. (2024, November). Zooming In on Educator Well-Being: Exploring Behavior Attributes, Zoom Fatigue, and Burnout Dynamics. Proceedings of the 32nd International Conference on Computers in Education (ICCE 2024).",
    doi: "https://doi.org/10.58459/icce.2024.5011",
  },
  {
    citation:
      "Delgado, K. P., & Caguiat, M. R. R. (2024, September). Assessing Digital Transformation Dynamics: A Network Science Analysis of Government ICT Procurement in Pre- and Post-COVID-19 Philippines. In Proceedings of the 4th International Conference on Advances in Computational Science and Engineering (ICACSE 2023) (pp. 371\u2013389). Springer.",
    doi: "https://doi.org/10.1007/978-981-97-2977-7_23",
  },
];

// ─── Section Heading ─────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-xs uppercase tracking-[0.2em] text-neutral-500 after:mt-4 after:block after:h-px after:bg-white/10 after:content-['']">
      {children}
    </h2>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CVPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Credentials"
        title="Curriculum Vitae"
        description="Over a decade of central banking, data science, academic, and research experience across payments, AML/CFT analytics, and supervisory technology."
      />

      {/* Download prompt */}
      <div className="mx-auto mt-10 max-w-5xl">
        <p className="text-sm text-neutral-500">
          Want the full document?{" "}
          <a
            href="mailto:delgadokp92@gmail.com"
            className="text-neutral-300 underline underline-offset-4 transition hover:text-white"
          >
            Request a copy via email.
          </a>
        </p>
      </div>

      {/* ── Experience ─────────────────────────────────────────────── */}
      <section className="mx-auto mt-16 max-w-5xl">
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-10">
          {experience.map((entry, i) => (
            <div key={i}>
              {entry.org && (
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-base font-semibold text-white">{entry.org}</span>
                  {entry.location && (
                    <span className="text-xs text-neutral-500">{entry.location}</span>
                  )}
                </div>
              )}
              <p className="mb-4 text-sm font-medium text-neutral-400">{entry.department}</p>
              <div className="space-y-6 border-l border-white/10 pl-5">
                {entry.roles.map((role, j) => (
                  <div key={j}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm font-semibold text-neutral-200">{role.title}</span>
                      <span className="text-xs text-neutral-500">{role.period}</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {role.bullets.map((b, k) => (
                        <li key={k} className="flex items-start gap-2 text-sm text-neutral-400">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Academic Appointment ───────────────────────────────────── */}
      <section className="mx-auto mt-20 max-w-5xl">
        <SectionHeading>Academic Appointment</SectionHeading>
        <div className="space-y-8">
          {academic.map((entry, i) => (
            <div key={i}>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-base font-semibold text-white">{entry.org}</span>
                <span className="text-xs text-neutral-500">{entry.location}</span>
              </div>
              <div className="border-l border-white/10 pl-5">
                {entry.roles.map((role, j) => (
                  <div key={j}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-sm font-semibold text-neutral-200">{role.title}</span>
                      <span className="text-xs text-neutral-500">{role.period}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-neutral-400">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────────────── */}
      <section className="mx-auto mt-20 max-w-5xl">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-white">{edu.degree}</p>
                  <p className="mt-0.5 text-sm text-neutral-400">
                    {edu.institution}{edu.location ? ` \u2022 ${edu.location}` : ""}
                  </p>
                </div>
                <span className="text-xs text-neutral-500">{edu.period}</span>
              </div>
              {edu.note && (
                <p className="mt-2 text-xs text-neutral-500">{edu.note}</p>
              )}
              {edu.detail && (
                <p className="mt-3 text-sm leading-7 text-neutral-400">{edu.detail}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Research Publications ──────────────────────────────────── */}
      <section className="mx-auto mt-20 max-w-5xl">
        <SectionHeading>Research Publications</SectionHeading>
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5"
            >
              <p className="text-sm leading-7 text-neutral-300">{pub.citation}</p>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-neutral-500 underline underline-offset-4 transition hover:text-neutral-300"
              >
                {pub.doi}
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}