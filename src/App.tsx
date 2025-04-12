import { useState, useEffect, useCallback } from "react";
import { animate, createTimeline } from "animejs";
import { HelloTypo } from "./components/HelloTypo";
import { VerticalSeparator } from "./components/VerticalSeparator";
import { NavigationButtons } from "./components/NavigationButtons";

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroComplete(true);
      
      animate(".hello-container", {
        translateX: "-40%",
        duration: 800,
        easing: "easeOutExpo"
      });
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  

  // TODO: USE TIMELINE INSTEAD OF THIS SHIT
  
  useEffect(() => {
    if (isIntroComplete) {

      const animTimer = setTimeout(() => {

        animate(".elements-container", {
          opacity: 1,
          duration: 500,
          easing: "easeOutCubic",
          translateX: "30%"
        });
        

        animate(".vertical-separator", {
          scaleY: [0, 1],
          opacity: [0, 1],
          duration: 600,
          delay: 200,
          easing: "easeOutCubic"
        });

        animate(".nav-buttons-container", {
          opacity: [0, 1],
          duration: 400,
          delay: 400,
          easing: "easeOutCubic"
        });

        animate(".nav-button", {
          translateX: [-20, 0],
          opacity: [0, 1],
          duration: 600,
          delay: (_, i) => 500 + (i * 100),
          easing: "easeOutCubic"
        });
      }, 100);
      
      return () => clearTimeout(animTimer);
    }

  }, [isIntroComplete]);

  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">

      <div className="hello-container absolute">
        <HelloTypo />
      </div>

      {isIntroComplete && (
        <div className="elements-container absolute opacity-0 flex items-center space-x-12">
          <VerticalSeparator />
          <NavigationButtons />
        </div>
      )}
    </div>
  );
}

export default App;