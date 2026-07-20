import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — TehzibDev" },
    { name: "description", content: "How TehzibDev handles personal data submitted via the contact form and website." },
    { name: "robots", content: "index, follow" },
  ]}),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="container-editorial max-w-3xl pb-24 pt-40 md:pt-48">
      <p className="eyebrow flex items-center gap-3"><span className="gold-rule" /> Legal</p>
      <h1 className="mt-6 text-5xl md:text-6xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

      <div className="prose prose-lg mt-12 space-y-6 text-muted-foreground [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-foreground">
        <p>This Privacy Policy describes how TehzibDev ("we", "our", "us") handles information you provide when using this website.</p>
        <h2>Information we collect</h2>
        <p>When you use the contact form, we collect the information you provide — typically your name, email address, business name, and project details. We may also collect basic technical data such as page views and referrers via privacy-friendly analytics.</p>
        <h2>How we use it</h2>
        <p>Contact form submissions are used solely to respond to your inquiry and, if you become a client, to deliver the requested services. We do not sell, rent, or share your data with third parties for marketing.</p>
        <h2>Retention</h2>
        <p>We retain inquiry data for as long as necessary to respond and, where relevant, for the duration of any resulting engagement plus a reasonable follow-up period.</p>
        <h2>Cookies</h2>
        <p>This site uses only essential cookies required for the website to function. If analytics are added in future, they will be privacy-respecting and cookieless where possible.</p>
        <h2>Your rights</h2>
        <p>You can request access to, correction of, or deletion of your personal data at any time by emailing <a href="mailto:hello@tehzibdev.com" className="text-foreground underline">hello@tehzibdev.com</a>.</p>
        <h2>Changes</h2>
        <p>We may update this policy from time to time. Material changes will be reflected on this page with a revised date.</p>
      </div>
    </article>
  );
}
