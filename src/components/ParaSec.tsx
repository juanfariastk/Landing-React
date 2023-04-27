import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ParaSec: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current as Element,
        start: "top center",
        end: "bottom top",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(textRef.current as Element, { opacity: 0, yPercent: 100, duration: 1 }, 0);
    tl.to(imgRef.current as Element, { opacity: 0, yPercent: -100, duration: 1 }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Container className="ParallaxContainer" fluid>
      <div ref={textRef} className="text-center">
        {}
      </div>
      <div ref={imgRef} className="text-center">
      <h4 className="display-5">Entre já em</h4>
        <h4 className="display-5">contato!</h4>
      </div>
    </Container>
  );
};