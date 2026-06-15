import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    // Content is saved as JSON files directly in your repo.
    // In production these files are read-only (no editor UI).
    kind: "local",
  },

  collections: {
    // ── Publications ──────────────────────────────────────────────────────────
    publications: collection({
      label: "Publications",
      slugField: "title",
      path: "content/publications/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Full title of the paper or article",
          },
        }),
        authors: fields.text({
          label: "Authors",
          description: 'e.g. "Delgado, K. P., & Ebardo, R."',
        }),
        year: fields.text({
          label: "Year",
          description: "Publication year, e.g. 2024",
        }),
        venueType: fields.select({
          label: "Publication Type",
          options: [
            { label: "Journal Article", value: "journal" },
            { label: "Conference Paper", value: "conference" },
            { label: "Book Chapter", value: "book-chapter" },
          ],
          defaultValue: "conference",
        }),
        venue: fields.text({
          label: "Venue",
          description: "Journal name, conference name, or book title with volume/page info",
          multiline: true,
        }),
        doi: fields.url({
          label: "DOI / URL",
          description: "Full https://doi.org/... link",
        }),
      },
    }),

    // ── Research ──────────────────────────────────────────────────────────────
    research: collection({
      label: "Research",
      slugField: "title",
      path: "content/research/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Short name for the research area or project",
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "Active", value: "active" },
            { label: "Ongoing", value: "ongoing" },
            { label: "Completed", value: "completed" },
          ],
          defaultValue: "active",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          description: "Keywords or topic tags, e.g. Payments, AML, AI",
          itemLabel: (props) => props.value || "Tag",
        }),
      },
    }),

    // ── Projects ──────────────────────────────────────────────────────────────
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Project name",
          },
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        year: fields.text({
          label: "Year",
          description: "Year completed or started",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Data Science", value: "data-science" },
            { label: "Analytics", value: "analytics" },
            { label: "Policy", value: "policy" },
            { label: "Academic", value: "academic" },
            { label: "Other", value: "other" },
          ],
          defaultValue: "data-science",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Tag",
        }),
        link: fields.url({
          label: "Project Link (optional)",
        }),
      },
    }),
  },
});
