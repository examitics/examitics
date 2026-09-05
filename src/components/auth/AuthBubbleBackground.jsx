import { useEffect, useRef } from "react";
import "../../styles/AuthBubbles.css";

function AuthBubbleBackground() {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);

  const mouseRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    insideCard: false,
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const bubbleElements =
      container.querySelectorAll(".auth-bubble");

    const bubbles = Array.from(bubbleElements).map(
      (element) => {
        const size =
          45 + Math.random() * 115;

        return {
          element,

          x:
            Math.random() *
            window.innerWidth,

          y:
            Math.random() *
            window.innerHeight,

          size,

          vx:
            (Math.random() - 0.5) *
            0.18,

          vy:
            (Math.random() - 0.5) *
            0.18,

          randomX:
            (Math.random() - 0.5) *
            0.25,

          randomY:
            (Math.random() - 0.5) *
            0.25,

          phase:
            Math.random() *
            Math.PI *
            2,

          speed:
            0.00025 +
            Math.random() *
            0.00045,

          attraction:
            0.00015 +
            Math.random() *
            0.00025,
        };
      }
    );

    bubblesRef.current = bubbles;

    let animationFrame;

    /* =========================================
       ANIMATION
    ========================================= */

    const animate = (time) => {
      const mouse = mouseRef.current;

      bubblesRef.current.forEach(
        (bubble) => {

          /* =====================================
             CURSOR OUTSIDE CARD
          ===================================== */

          if (!mouse.insideCard) {

            const dx =
              mouse.x - bubble.x;

            const dy =
              mouse.y - bubble.y;

            const distance =
              Math.sqrt(
                dx * dx +
                dy * dy
              );

            /*
             * Only attract bubbles when
             * cursor is reasonably close.
             */

            if (distance < 650) {

              const strength =
                (650 - distance) /
                650;

              bubble.vx +=
                dx *
                bubble.attraction *
                strength;

              bubble.vy +=
                dy *
                bubble.attraction *
                strength;
            }


            /*
             * Keep their natural floating motion.
             */

            bubble.vx +=
              bubble.randomX *
              0.002;

            bubble.vy +=
              bubble.randomY *
              0.002;


            /*
             * Limit speed.
             */

            const maxSpeed = 1.1;

            bubble.vx = Math.max(
              -maxSpeed,
              Math.min(
                maxSpeed,
                bubble.vx
              )
            );

            bubble.vy = Math.max(
              -maxSpeed,
              Math.min(
                maxSpeed,
                bubble.vy
              )
            );


            /*
             * Friction.
             */

            bubble.vx *= 0.995;
            bubble.vy *= 0.995;


            bubble.x += bubble.vx;
            bubble.y += bubble.vy;
          }


          /* =====================================
             CURSOR INSIDE CARD
          ===================================== */

          else {

            /*
             * Very slow organic movement.
             */

            const waveX =
              Math.sin(
                time *
                  bubble.speed +
                  bubble.phase
              ) *
              0.35;

            const waveY =
              Math.cos(
                time *
                  bubble.speed *
                  0.8 +
                  bubble.phase
              ) *
              0.35;


            bubble.x +=
              waveX +
              bubble.randomX *
              0.15;

            bubble.y +=
              waveY +
              bubble.randomY *
              0.15;
          }


          /* =====================================
             SCREEN WRAP
          ===================================== */

          const margin =
            bubble.size;


          if (
            bubble.x <
            -margin
          ) {
            bubble.x =
              window.innerWidth +
              margin;
          }


          if (
            bubble.x >
            window.innerWidth +
            margin
          ) {
            bubble.x =
              -margin;
          }


          if (
            bubble.y <
            -margin
          ) {
            bubble.y =
              window.innerHeight +
              margin;
          }


          if (
            bubble.y >
            window.innerHeight +
            margin
          ) {
            bubble.y =
              -margin;
          }


          /* =====================================
             RENDER
          ===================================== */

          bubble.element.style.width =
            `${bubble.size}px`;

          bubble.element.style.height =
            `${bubble.size}px`;

          bubble.element.style.transform =
            `translate3d(
              ${bubble.x}px,
              ${bubble.y}px,
              0
            )`;
        }
      );


      animationFrame =
        requestAnimationFrame(
          animate
        );
    };


    animationFrame =
      requestAnimationFrame(
        animate
      );


    /* =========================================
       MOUSE TRACKING
    ========================================= */

    const handleMouseMove =
      (event) => {

        mouseRef.current.x =
          event.clientX;

        mouseRef.current.y =
          event.clientY;
      };


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );


    /* =========================================
       AUTH CARD DETECTION
    ========================================= */

    const card =
      document.querySelector(
        ".auth-card"
      );


    const handleCardEnter =
      () => {

        mouseRef.current.insideCard =
          true;
      };


    const handleCardLeave =
      () => {

        mouseRef.current.insideCard =
          false;
      };


    if (card) {

      card.addEventListener(
        "mouseenter",
        handleCardEnter
      );

      card.addEventListener(
        "mouseleave",
        handleCardLeave
      );
    }


    /* =========================================
       CLEANUP
    ========================================= */

    return () => {

      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (card) {

        card.removeEventListener(
          "mouseenter",
          handleCardEnter
        );

        card.removeEventListener(
          "mouseleave",
          handleCardLeave
        );
      }
    };

  }, []);


  return (
    <div
      ref={containerRef}
      className="auth-bubbles"
      aria-hidden="true"
    >

      {Array.from({
        length: 18,
      }).map((_, index) => (

        <div
          key={index}
          className="auth-bubble"
        >

          <img
            src="/images/examitics-logo.png"
            alt=""
          />

        </div>

      ))}

    </div>
  );
}

export default AuthBubbleBackground;