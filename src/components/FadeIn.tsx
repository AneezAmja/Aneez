import React, { useState, useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: string;
  duration?: number;
  dir?: "up" | "down" | "left" | "right";
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = "",
  duration = 1000,
  dir = "up",
}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  const getTransformDirection = () => {
    switch (dir) {
      case "up":
        return "translateY(10vh)";
      case "down":
        return "translateY(-10vh)";
      case "left":
        return "translateX(-10vh)";
      case "right":
        return "translateX(10vh)";
      default:
        return "translateY(0)";
    }
  };

  return (
    <div
      className="fade-in-section transition-transform ease-out"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: delay,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : getTransformDirection(),
      }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeIn;
