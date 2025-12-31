import { Suspense, lazy, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load Spline to reduce initial bundle size
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    // Delay Spline loading slightly to prioritize critical content
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-screen w-full overflow-hidden bg-[#E3E3E3] relative">
      {/* Loading Skeleton/Placeholder */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-[#E3E3E3]"
          >
            <div className="text-center space-y-6">
              {/* Animated Loading Spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-black/20 border-t-black rounded-full mx-auto"
              />
              
              {/* Loading Text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-black/60 font-titillium uppercase tracking-wider"
              >
                Loading Experience...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spline 3D Scene */}
      {showSpline && (
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/aUdRZ09ud-nS-2ym/scene.splinecode"
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
          />
        </Suspense>
      )}
    </main>
  );
}