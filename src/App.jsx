import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    /* h-screen ensures the container is exactly the height of the window */
    /* w-full ensures it takes the full width */
    /* overflow-hidden prevents any scrollbars from the 3D scene */
    <main className="h-screen w-full overflow-hidden bg-[#E3E3E3]">
      <Spline 
        scene="https://prod.spline.design/aUdRZ09ud-nS-2ym/scene.splinecode" 
        /* The className here ensures the internal canvas fills its parent */
        className="w-full h-full"
      />
    </main>
  );
}