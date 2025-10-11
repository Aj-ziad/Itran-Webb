"use client";
import { useTranslations } from "next-intl";

export default function CTA2() {
  const t = useTranslations("cta2");

  return (
    <div className="relative mx-auto w-full max-w-6xl max-sm:max-w-3xl overflow-hidden rounded-[40px] bg-primary p-6 sm:p-10 md:p-20">
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-1/2 right-[-45%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-orange-500 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.8] rounded-full bg-orange-300 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.6] rounded-full bg-orange-200 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.4] rounded-full bg-orange-100 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.2] rounded-full bg-orange-50 opacity-30"></div>
          <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/50 opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:mb-4 md:text-5xl">
          {t("title")}
        </h1>
        <p className="mb-6 max-w-md text-base text-white sm:text-lg md:mb-8">
          {t("description")}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button className="flex w-full items-center justify-between rounded-full bg-black px-5 py-3 text-white sm:w-[240px]">
            <span className="font-medium">{t("buttons.discoveryCall")}</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
          </button>
          <button className="flex w-full items-center justify-between rounded-full bg-black px-5 py-3 text-white sm:w-[240px]">
            <span className="font-medium">{t("buttons.testSamples")}</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-white"></span>
          </button>
        </div>
      </div>
    </div>
  );
}