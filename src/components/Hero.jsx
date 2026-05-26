import { Suspense, lazy, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import loaderAnimation from '../utils/loading.json';

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
              <div className="w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                <Lottie
                  animationData={loaderAnimation}
                  loop={true}
                />
              </div>

              {/* Main Text */}
             {/* Text */}
<motion.div
  initial={{ opacity: 0, y: 6 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="-mt-6 text-center"
>
  <p className="text-[11px] md:text-xs font-medium tracking-wide text-black/35">
    Best viewed on laptop or desktop
  </p>
</motion.div>
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