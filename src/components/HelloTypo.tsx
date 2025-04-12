import { animate } from "animejs";
import { useRef, useEffect } from "react";

export function HelloTypo() {
  const helloRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  
  const helloCoverRef = useRef<HTMLDivElement>(null);
  const nameCoverRef = useRef<HTMLDivElement>(null);

  const underlineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // SIZES START HERE

    // hello
    if (helloRef.current && helloCoverRef.current) {
      const helloRect = helloRef.current.getBoundingClientRect();
      helloCoverRef.current.style.width = `${helloRect.width}px`;
      helloCoverRef.current.style.height = `${helloRect.height + 10}px`;
    }

    // name
    if (nameRef.current && nameCoverRef.current) {
      const nameRect = nameRef.current.getBoundingClientRect();
      nameCoverRef.current.style.width = `${nameRect.width}px`;
      nameCoverRef.current.style.height = `${nameRect.height + 10}px`;

      // underline sits under name
      if (underlineRef.current) {
        underlineRef.current.style.width = `${nameRect.width}px`;
        underlineRef.current.style.height = '5px';
      }
    }
    // SIZES END HERE

    // anim
    animate('.blockReveal', {
      scaleY: [1, 0],
      ease: 'inOutCirc',
      duration: 1000,
      loop: false,
      delay: (_, i) => i * 300,
    })

    animate('.underlineAnim', {
      scaleX: [0, 1],
      ease: 'inOutCirc',
      duration: 1000,
      loop: false,
      delay: 1000,
    })

    // gradient text
    animate('.gradientText', {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      duration: 2000,
      easing: 'linear',
      loop: true,
    })
  }, []);

  return (
    <div>
      {/* hello */}
      <div className="relative">
        <h1 ref={helloRef} className="text-white text-7xl">Hello! I'm</h1>
        <div 
          ref={helloCoverRef} 
          className="absolute top-0 left-0 bg-white blockReveal"
        ></div>
      </div>

      {/* name */}
      <div className="relative mt-4">
        <h1 ref={nameRef} className="gradientText text-8xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[size:200%]">윤하린</h1>
        <div 
          ref={nameCoverRef} 
          className="absolute top-0 left-0 bg-white blockReveal"
        ></div>

        {/* underline sits under name */}
        <div
          ref={underlineRef}
          className="relative bg-white underlineAnim mt-4"
          style={{ transformOrigin: "left" }}
        ></div>
      </div>
    </div>
  );
}