import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
export default function LogoCloud() {
  return (
    <div className="h-fit w-screen overflow-hidden  ">
      <div className="mx-auto mt-20 w-screen max-w-2xl">
        <div className="text-center text-3xl text-white">
          <span className="text-orange-200">Trusted by experts.</span>

          <br />

          <span>Used by Us.</span>
        </div>

        <div className="mt-14 grid items-center grid-cols-5">
  <div className="flex justify-center">
    <Image
      src="/icons/nextjs.svg"
      height={64}
      width={64}
      alt="Next.js"
      className="h-16 w-16 sm:h-20 sm:w-20 md:h-16 md:w-16"
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/icons/nodejs-icon.svg"
      height={64}
      width={64}
      alt="Node.js"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/icons/wordpress-icon.svg"
      height={64}
      width={64}
      alt="WordPress"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/icons/mongodb-icon.svg"
      height={64}
      width={64}
      alt="MongoDB"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
    />
  </div>
  <div className="flex justify-center">
    <Image
      src="/icons/tailwindcss-icon.svg"
      height={64}
      width={64}
      alt="Tailwind CSS"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
    />
  </div>
</div>
      </div>

      <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}