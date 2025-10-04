"use client";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "E-commerce",
    subtitle: "Fashion Retail Platform",
    gradient: "from-accent/20 to-chart-3/20",
  },
  {
    title: "SaaS",
    subtitle: "Project Management Tool",
    gradient: "from-chart-2/20 to-chart-4/20",
  },
  {
    title: "Corporate",
    subtitle: "Financial Services Site",
    gradient: "from-chart-5/20 to-accent/20",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by businesses worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've helped companies of all sizes achieve their digital goals
            with stunning, high-performance websites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-secondary border border-border aspect-[4/3] hover:border-accent/50 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl font-bold mb-2 opacity-50">
                    {item.title}
                  </div>
                  <div className="text-muted-foreground">{item.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary text-lg px-8 py-6 rounded-xl bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
