"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Start loading when route changes
    setIsLoading(true);
    setProgress(10); // Initial progress

    // Simulate progress during transition
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90; // Cap at 90% until real load completes
        return prev + Math.random() * 10;
      });
    }, 200);

    // Function to check if page is fully loaded
    const handleLoad = () => {
      setProgress(100);
      
      // Small delay to show 100% before hiding
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Wait for all resources to load
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, [pathname, searchParams]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          {/* Full Screen Overlay */}
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo or Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <div className="text-4xl font-bold text-white">Itran Web</div>
            </motion.div>

            {/* Circular Spinner */}
            <motion.div
              className="relative h-20 w-20"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <svg className="h-20 w-20 -rotate-90 transform">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-white/10"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  className="text-[var(--primary)]"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    strokeDasharray: 226.2,
                    strokeDashoffset: 226.2 * (1 - progress / 100),
                  }}
                />
              </svg>
              
              {/* Progress Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-sm font-semibold text-white"
                  key={Math.floor(progress)}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.floor(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="mt-6 text-sm font-medium text-white/60"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Loading assets...
            </motion.p>

            {/* Animated Dots */}
            <div className="mt-2 flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Top Progress Bar (Alternative/Additional) */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-[101] h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/80 to-[var(--primary)]"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}