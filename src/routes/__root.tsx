import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="container-editorial flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-6 text-balance-tight text-6xl md:text-8xl">Page not found.</h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          The URL you followed is either outdated, mistyped, or part of a project not yet published.
        </p>
        <div className="mt-10 flex gap-3">
          <Link to="/" className="rounded-full bg-foreground px-6 py-3 text-sm text-background transition hover:bg-charcoal">
            Return home
          </Link>
          <Link to="/work" className="rounded-full border border-border px-6 py-3 text-sm transition hover:border-foreground">
            Explore work
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="eyebrow">Something interrupted</span>
        <h1 className="mt-4 text-3xl">This page didn't load.</h1>
        <p className="mt-3 text-sm text-muted-foreground">Try again, or head back to the studio.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background">Try again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TehzibDev — Independent Web Studio" },
      { name: "description", content: "Independent web studio designing and building premium websites for businesses that refuse to blend in." },
      { name: "author", content: "TehzibDev" },
      { name: "theme-color", content: "#0B0B0B" },
      { property: "og:site_name", content: "TehzibDev" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@tehzibdev" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://tehzibdev.lovable.app/#organization",
              name: "TehzibDev",
              url: "https://tehzibdev.lovable.app",
              email: "hello@tehzibdev.com",
              founder: { "@type": "Person", name: "Tehzib" },
              areaServed: "Worldwide",
            },
            {
              "@type": "WebSite",
              "@id": "https://tehzibdev.lovable.app/#website",
              url: "https://tehzibdev.lovable.app",
              name: "TehzibDev",
              publisher: { "@id": "https://tehzibdev.lovable.app/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <IntroOverlay />
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
