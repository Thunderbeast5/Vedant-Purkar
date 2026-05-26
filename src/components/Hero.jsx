import { Suspense, lazy, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpline, setShowSpline] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Keep loader for minimum 2 seconds
  useEffect(() => {
    if (splineLoaded) {
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      return () => clearTimeout(delay);
    }
  }, [splineLoaded]);

  return (
    <main className="h-screen w-full overflow-hidden bg-[#E3E3E3] relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-[#E3E3E3]"
          >
            <div className="flex flex-col items-center gap-6">
              
              {/* Loader */}
              <div className="flex items-center gap-[6px]">
                {[0, 1, 2, 3].map((i) => (
                  <motion.span
                    key={i}
                    className="block w-3 h-3 rounded-full bg-black"
                    animate={{
                      y: [0, -14, 0],
                      opacity: [0.25, 1, 0.25],
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>

              {/* Main Text */}
              <motion.p
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="text-sm md:text-base font-bold text-black/50 font-titillium uppercase tracking-[0.3em] text-center"
>
  Loading Experience...
  <br />
  <span className="text-[11px] md:text-xs font-medium tracking-wide text-black/35 normal-case">
    Best experienced on laptop or desktop 
  </span>
</motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showSpline && (
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/aUdRZ09ud-nS-2ym/scene.splinecode"
            className="w-full h-full"
            onLoad={() => setSplineLoaded(true)}
          />
        </Suspense>
      )}
    </main>
  );
}