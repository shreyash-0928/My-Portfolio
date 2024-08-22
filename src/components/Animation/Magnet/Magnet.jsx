import { useState, useRef, useEffect } from "react";

const Magnet = ({ children, padding = 100, disabled = false }) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile view
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      // Reset position when disabled
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen is mobile size
    };

    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize); // Adjust on window resize

    const handleMouseMove = (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      handleMove(clientX, clientY);
    };

    const handleTouchMove = (e) => {
      const clientX = e.touches[0].clientX;
      const clientY = e.touches[0].clientY;
      handleMove(clientX, clientY);
    };

    const handleMove = (clientX, clientY) => {
      if (magnetRef.current && !isMobile) {
        // Disable magnet effect on mobile
        const { left, top, width, height } =
          magnetRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distX = Math.abs(centerX - clientX);
        const distY = Math.abs(centerY - clientY);

        if (distX < width / 2 + padding && distY < height / 2 + padding) {
          setIsActive(true);
          const offsetX = (clientX - centerX) / 2;
          const offsetY = (clientY - centerY) / 2;
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [padding, disabled, isMobile]);

  return (
    <div
      ref={magnetRef}
      style={{ position: "relative", display: "inline-block", width: "100%" }}
    >
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive
            ? "transform 0.3s ease-out"
            : "transform 0.5s ease-in-out",
          willChange: "transform",
          textAlign: isMobile ? "center" : "left",
          width: isMobile ? "100%" : "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
