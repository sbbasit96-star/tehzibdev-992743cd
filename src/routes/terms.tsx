import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms & Conditions — TehzibDev" },
    { name: "description", content: "The terms that apply to using the TehzibDev website and engaging TehzibDev for services." },
  ]}),
  component: Terms,
});

function Terms() {
  return (
    <article className="container-editorial max-w-3xl pb-24 pt-40 md:pt-48">
      <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Legal</p>
      <h1 className="mt-6 text-5xl md:text-6xl">Terms & Conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-12 space-y-6 text-muted-foreground [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-foreground">
        <p>By using tehzibdev.com you agree to the terms below. These terms cover use of the website itself; separate written agreements govern paid engagements.</p>
        <h2>Website content</h2>
        <p>All content, design, and code on this website belong to TehzibDev unless otherwise stated. You're welcome to view and share it; please don't republish or copy it without permission.</p>
        <h2>Case studies</h2>
        <p>Projects labelled as concepts or demonstrations are self-directed work and do not represent live client engagements. Where projects were made for clients, they are shown with permission.</p>
        <h2>No warranty</h2>
        <p>This website is provided as-is, without warranties of any kind. TehzibDev is not liable for any decisions made based on information found here.</p>
        <h2>Client engagements</h2>
        <p>Any paid engagement is governed by a separate written proposal or contract, which will supersede these terms for the scope of that engagement.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a href="mailto:hello@tehzibdev.com" className="text-foreground underline">hello@tehzibdev.com</a>.</p>
      </div>
    </article>
  );
}
