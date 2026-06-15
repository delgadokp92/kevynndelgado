type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pt-36 pb-20 text-white">
      {children}
    </main>
  );
}