import { useCallback, useEffect, useRef, useState } from "react";
import Face from "../components/face";
import { debounce } from "../utils/frontend";

export default function Avatar() {
  const [mousePosition, setMousePosition] = useState(null);
  const [offset, setOffset] = useState(null);
  const ref = useRef(null);

  const getFeatureTranslate = useCallback((part = "eye") => {
    const LIMITS = {
      beard: { x: -3, y: -5 },
      eye: { x: 10, y: 3 },
      eyebrow: { x: 10, y: 50 },
      eyebrowleft: { x: 30, y: 75 },
      eyelid: { x: 0, y: 0.5 },
      mouth: { x: -6, y: -2 },
      nose: { x: -3, y: -10 },
    };

    // Before page loaded fully
    if (!offset | !mousePosition) {
      return `translate(0 0)`;
    }

    const eyeCoords = {
      x: parseInt(offset.x + offset.width / 2),
      y: parseInt(offset.y + offset.height / 2),
    };

    const radian = Math.atan2(
      mousePosition.y - eyeCoords.y,
      mousePosition.x - eyeCoords.x
    );

    const transforms = {
      x: Math.cos(radian),
      y: Math.sin(radian),
    };

    const pos = {
      x: transforms.x * LIMITS[part].x,
      y: transforms.y * LIMITS[part].y,
    };
    return `translate(${pos.x} ${pos.y})`;
  });

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    function handleResize(event) {
      setOffset(ref.current.getBoundingClientRect());
    }

    const debouncedHandleResize = debounce(handleResize, 1000);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", debouncedHandleResize);

    debouncedHandleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={ref}>
      <Face getFeatureTranslate={getFeatureTranslate} />
    </div>
  );
}
