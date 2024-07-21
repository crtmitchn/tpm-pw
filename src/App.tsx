import { useEffect, useRef } from 'react';
import './App.css';
import FOG from 'vanta/src/vanta.fog';
import * as THREE from 'three';
import { Button } from "@/components/ui/button"


function App() {
  const vantaRef = useRef(null);
  const colors = ["#4b3ad2", "#cc58de", "#de6657", "#ff904f"]

  const midtoneColor = colors[Math.floor(Math.random() * colors.length)] 
  const highlightColor = colors[Math.floor(Math.random() * colors.length)] 

  console.log(`Custom highlightColor: ${highlightColor}`)
  console.log(`Custom midtoneColor: ${midtoneColor}`)

  useEffect(() => {
    const vantaEffect = FOG({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: highlightColor,
      midtoneColor: midtoneColor,
      baseColor: 0xe1dddd,
      blurFactor: 0.90,
      speed: 1.7,
      zoom: 0.8
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [highlightColor, midtoneColor]);

  return (
    <div className='app'>
    <div ref={vantaRef} className='bg'>
      <div className='w-screen relative z-10 flex flex-col items-center justify-center min-h-screen'>
        <div className="p-8 bg-gray-600/25 text-white rounded-lg shadow-lg max-w-md mx-auto space-y-8" style={{ animation: "smooth-appear 0.5s" }}>
          <p className="text-7xl font-bold mb-4 font-title text-center" style={{ background: `-webkit-linear-gradient(left, ${highlightColor}, ${midtoneColor})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "smooth-appear 2.5s" }}>mitchn</p>
          <p className="md:text-balance font-regular" style={{ animation: "smooth-appear 4s" }}>Not-so-extraordinary man from Russia. Mostly playing games, and trying myself in coding.</p>
        </div>
        <div className="mt-4 flex items-stretch space-x-4" style={{ animation: "smooth-appear 6s" }}>
          <a href="https://github.com/crtmitchn">
            <Button className='bg-gray-600/25'>
              <i className="fa fa-github text-lg self-stretch"></i>&nbsp;&nbsp;GitHub
            </Button>
          </a>
          <a href="https://t.me/mi7chn">
            <Button className='bg-gray-600/25 self-stretch'>
              <i className="fa fa-telegram"></i>&nbsp;&nbsp;Telegram
            </Button>
          </a>
          <a href="https://discord.com/users/973147382155988992">
            <Button className='bg-gray-600/25 self-stretch'>
              <i className="fa fa-address-card" aria-hidden="true"></i>&nbsp;&nbsp;Discord
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
export default App;
