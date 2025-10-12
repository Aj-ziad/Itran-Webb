'use client';
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ProjectCard from "./mvpblocks/projectsCard";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations('projects');

  const projects = [
    {
      title: "La Maison Roaa - Site Web de Réservation...",
      description:
        "J'ai développé cette plateforme pour La Maison Roaa, un restaurant marocain haut de gamme qui avait besoin d'un...",
      images: [
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
      ],
    },
    {
      title: "Digihive Studio - Outil de Gestion d'Agence...",
      description:
        "J'ai construit ce centre de commande complet pour Digihive, une agence créative qui jonglait avec trop d'outils...",
      images: [
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
      ],
    },
    {
      title: "RGB Glow - Plateforme E-commerce...",
      description:
        "Ce projet consistait à créer une boutique en ligne complète pour RGB Glow, une marque de cosmétiques premium au...",
      images: [
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
      ],
    },
    {
      title: "NextAgency - CRM Moderne...",
      description:
        "Un tableau de bord intuitif pour gérer les leads, les campagnes marketing et les clients dans une interface claire...",
      images: [
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
      ],
    },
    {
      title: "Shopify Clone - Application E-commerce complète...",
      description:
        "Reproduction du fonctionnement d'une boutique Shopify avec panier, paiement et gestion des stocks en temps réel...",
      images: [
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
      ],
    },
    {
      title: "EventX - Plateforme d'événements interactifs...",
      description:
        "Application web pour organiser et gérer des événements avec billetterie, calendrier et notifications en direct...",
      images: [
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
        "/illustrations/dashboard.png",
      ],
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true, // Only trigger once
    margin: "-100px", // Start animating a bit before entering view
  });

  const handleShowMore = () => setVisibleCount((prev) => prev + 3);
  const handleShowLess = () => setVisibleCount(3);

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-8">
      <h1 className="font-geist  mt-4 text-3xl font-normal tracking-tighter sm:text-center text-white sm:text-4xl md:text-5xl">
        {t('title')}
      </h1>
      <p className="font-geist  mt-4  font-normal tracking-tighter text-white/80 mb-5  sm:text-center">
        {t('subtitle')}
      </p>
      <hr className="mx-auto mt-5 mb-10 h-px w-1/2 bg-gray-700" />


      {/* Animated Grid — only animate when in view */}
      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatePresence>
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
              layout
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                images={project.images}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show more / less button */}
      <div className="flex justify-center mt-10">
        {visibleCount < projects.length ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowMore}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
          >
            {t('showMore') || 'Show More'}
          </motion.button>
        ) : (
          projects.length > 3 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShowLess}
              className="px-6 py-3 bg-gray-800 text-gray-200 font-semibold rounded-lg hover:bg-gray-700 transition-all"
            >
              {t('showLess') || 'Show Less'}
            </motion.button>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;