"use client";
import { Code2, Palette, Rocket, Zap, CheckCircle2, Globe } from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const services = [
  { 
    icon: Code2, 
    color: "accent", 
    spotlight: "rgba(255, 152, 0, 0.2)", // orange glow
    title: "Custom Development", 
    text: "Tailored solutions built with modern technologies like Next.js, React, and TypeScript." 
  },
  { 
    icon: Palette, 
    color: "chart-3", 
    spotlight: "rgba(186, 104, 200, 0.2)", // purple glow
    title: "UI/UX Design", 
    text: "Beautiful, intuitive interfaces that engage users and convert visitors into customers." 
  },
  { 
    icon: Rocket, 
    color: "chart-2", 
    spotlight: "rgba(66, 165, 245, 0.2)", // blue glow
    title: "Fast Deployment", 
    text: "Quick turnaround times with CI/CD pipelines and seamless hosting on Vercel." 
  },
  { 
    icon: Zap, 
    color: "chart-4", 
    spotlight: "rgba(255, 235, 59, 0.2)", // yellow glow
    title: "Performance Optimization", 
    text: "Lightning-fast websites optimized for SEO, Core Web Vitals, and UX." 
  },
  { 
    icon: Globe, 
    color: "chart-5", 
    spotlight: "rgba(0, 229, 255, 0.2)", // cyan glow
    title: "E-commerce Solutions", 
    text: "Online stores with secure payments, inventory management, and analytics." 
  },
  { 
    icon: CheckCircle2, 
    color: "accent", 
    spotlight: "rgba(76, 175, 80, 0.2)", // green glow
    title: "Ongoing Support", 
    text: "Continuous maintenance, updates, and technical support." 
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to succeed online
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From design to deployment, we handle every aspect of your web presence with expertise and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, color, spotlight, title, text }) => (
            <SpotlightCard
              key={title}
              spotlightColor={spotlight}
              className="p-8 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all custom-spotlight-card"
            >
              <div
                className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon className={`text-${color}`} size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
