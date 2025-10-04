"use client";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function StatsSection() {
  return (
    <section className="py-16 px-4 border-y border-gray-800 bg-gray-950">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2 text-emerald-400">
              <NumberTicker value={100} className="text-emerald-400" />
            </div>
            <p className="text-gray-300">Projects Delivered</p>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2 text-sky-400">
              <NumberTicker value={98} className="text-sky-400" />%
            </div>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2 text-purple-400">
              <NumberTicker value={5} className="text-purple-400" />x
            </div>
            <p className="text-gray-300">Faster Load Times</p>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2 text-pink-400">
              24/7
            </div>
            <p className="text-gray-300">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
