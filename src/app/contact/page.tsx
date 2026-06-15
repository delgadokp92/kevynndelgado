import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

const contactChannels = [
  {
    label: "Personal Email",
    value: "delgadokp92@gmail.com",
    href: "mailto:delgadokp92@gmail.com",
    description: "General inquiries and collaborations",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kevynndelgado",
    href: "https://www.linkedin.com/in/kevynndelgado",
    description: "Professional network and updates",
  },
  {
    label: "GitHub",
    value: "github.com/delgadokp92",
    href: "https://github.com/delgadokp92",
    description: "Code, projects, and open-source work",
  },
];

export default function ContactPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Connect"
        title="Contact"
        description="Reach out for research collaborations, academic inquiries, speaking engagements, or professional opportunities."
      />

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                {channel.label}
              </span>
              <span className="text-base font-medium text-white transition group-hover:text-neutral-200">
                {channel.value}
              </span>
              <span className="text-sm text-neutral-400">{channel.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500">Location</h2>
          <p className="mt-2 text-base text-neutral-300">
            Based in <span className="text-white">Manila, Philippines</span>. Open to remote
            collaborations, international research partnerships, and academic engagements.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}