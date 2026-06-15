type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-5xl">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
        {eyebrow}
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
        {description}
      </p>
    </section>
  );
}