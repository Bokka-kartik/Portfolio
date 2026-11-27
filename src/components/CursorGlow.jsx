import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return undefined;

    let frameId;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 3;

    const updateGlow = () => {
      document.documentElement.style.setProperty("--pointer-x", `${pointerX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${pointerY}px`);
      frameId = undefined;
    };

    const handlePointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frameId === undefined) frameId = window.requestAnimationFrame(updateGlow);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
};

export default CursorGlow;
