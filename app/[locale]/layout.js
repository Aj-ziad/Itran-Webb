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
          href="https://yourdomain.com/en"
        />
        {/* Page Title */}
        <title>{t("title")}</title>

        {/* Favicon */}
        <link rel="icon" href="/icon.ico" sizes="any" />
        {/* Optional: add SVG favicon for modern browsers */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

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
          {children}

          {/* WhatsApp Floating Button */}
          <WhatsAppIcon />

          <Footer4Col />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
