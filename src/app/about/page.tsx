import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Profile"
        title="About"
        description="This page will introduce my professional background, academic work, data science experience, and interests in research, analytics, payments, and policy."
      />
    </PageContainer>
  );
}