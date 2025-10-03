import {
  ArrowRight,
  Code2,
  Palette,
  Rocket,
  Zap,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Beams from "@/components/Beams";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Home() {
  return (
    <div className="min-h-screen hero text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen  max-sm:pt-20 pt-40 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 ">
          <Beams lightColor="#f94c1b" rotation={30} beamNumber={38} />
        </div>
        {/* Background gradient orbs */}

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 ">
              <div className="md:hidden">
                <Image
                  src={"/white-logo.png"}
                  height={90}
                  width={90}
                  alt="logo"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight font-[Gambarino] text-white">
              We build websites that grow your business.
            </h1>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Transform your vision into a powerful digital presence. We create
              fast, secure, and scalable websites that drive results for
              businesses of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl group"
              >
                Get Started
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border backdrop-blur-2xl text-white bg-white/30 text-lg px-8 py-6 rounded-xl "
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-border bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {" "}
                <NumberTicker value={100} className={"text-white"}/>
              </div>
              <div className="text-white/90">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
              <NumberTicker value={98} className={"text-white"}/>%
              </div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
              <NumberTicker value={5} className={"text-white"}/>x
              </div>
              <div className="text-white/90">Faster Load Times</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                24/7
              </div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Everything you need to succeed online
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From design to deployment, we handle every aspect of your web
              presence with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tailored solutions built with modern technologies like Next.js,
                React, and TypeScript for optimal performance.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-chart-3/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="text-chart-3" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beautiful, intuitive interfaces that engage users and convert
                visitors into customers.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="text-chart-2" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast Deployment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick turnaround times with automated CI/CD pipelines and
                seamless hosting on Vercel.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-chart-4" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Performance Optimization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Lightning-fast websites optimized for SEO, Core Web Vitals, and
                exceptional user experience.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-chart-5/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-chart-5" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">E-commerce Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complete online stores with secure payments, inventory
                management, and analytics integration.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuous maintenance, updates, and technical support to keep
                your site running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Trusted by businesses worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We've helped companies of all sizes achieve their digital goals
              with stunning, high-performance websites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Portfolio Item 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-secondary border border-border aspect-[4/3] hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-chart-3/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl font-bold mb-2 opacity-50">
                    E-commerce
                  </div>
                  <div className="text-muted-foreground">
                    Fashion Retail Platform
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-secondary border border-border aspect-[4/3] hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-2/20 to-chart-4/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl font-bold mb-2 opacity-50">SaaS</div>
                  <div className="text-muted-foreground">
                    Project Management Tool
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-secondary border border-border aspect-[4/3] hover:border-accent/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-5/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl font-bold mb-2 opacity-50">
                    Corporate
                  </div>
                  <div className="text-muted-foreground">
                    Financial Services Site
                  </div>
                </div>
              </div>
            </div>
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

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-chart-3/10" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">
              Let's discuss your project and create something amazing together.
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl group"
              >
                Start Your Project
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-lg px-8 py-6 rounded-xl bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Itran Web. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
