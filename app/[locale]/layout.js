import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import "./globals.css";
import Header1 from "@/components/mvpblocks/header-1";
import Footer4Col from "@/components/mvpblocks/footer-4col"; // 👈 make sure path is correct
import PageLoader from "@/components/RouteLoader";
import Image from "next/image";
import WhatsAppIcon from "@/components/WhatsappIcon";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 🧩 Get translation function for "site" namespace
  const t = await getTranslations({ locale, namespace: "site" });

  return {
    title: {
      default: t("title"),
      template: `%s - Itran Web`,
    },
    description: t("description"),
    alternates: {
      canonical: `https://itran-web-oepw.vercel.app/${locale}`,
      languages: {
        en: "https://itran-web-oepw.vercel.app/en",
        fr: "https://itran-web-oepw.vercel.app/fr",
        ar: "https://itran-web-oepw.vercel.app/ar",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Get translations on the server
  const t = await getTranslations({ locale, namespace: "site" });

  return (
    <html lang={locale}>
      <head>
        {routing.locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`https://itran-web-oepw.vercel.app/${loc}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://itran-web-oepw.vercel.app/en"
        />
        {/* Page Title */}

        {/* Favicon */}
     
        {/* Fonts */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,501,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Readex+Pro:wght@160..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Readex+Pro:wght@160..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=poppins@500&f[]=gambarino@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <Header1 />
          <PageLoader />
          <div className="relative">
        <div
          className="absolute inset-0 h-fit mx-auto  max-w-xs blur-[118px]"
          style={{
            background:
              "linear-gradient(152.92deg, var(--primary) 10%, transparent 80%)",
          }}
        ></div> 
          {children}

          {/* WhatsApp Floating Button */}
          <WhatsAppIcon />

          <Footer4Col />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
