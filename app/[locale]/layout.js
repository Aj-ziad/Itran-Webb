import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Header1 from "@/components/mvpblocks/header-1";
import FooterAnimated from "@/components/mvpblocks/footer-animated";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import PageLoader from "@/components/RouteLoader";

export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    // notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,501,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com " />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

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
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <NextIntlClientProvider>
          <Header1 />
          <PageLoader />
          {children}

          {/* <FooterAnimated /> */}
          <Footer4Col />
        </NextIntlClientProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
