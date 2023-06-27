"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface IProps {
  className: string;
  color1: string;
  color2: string;
}

export default function Wave({ className, color1, color2 }: IProps) {
  const canvasRef = useRef(null);
  let c: CanvasRenderingContext2D | null;
  let canvas: HTMLCanvasElement;
  let increment = 0;

  useEffect(() => {
    if (canvasRef.current) {
      canvas = canvasRef.current;
      c = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - window.innerHeight / 10;
      animate();
    }
  }, []);

  function animate() {
    if (c) {
      requestAnimationFrame(animate);

      c.clearRect(0, 0, canvas?.width, canvas?.height);

      wave(c, canvas.height, 0.001, 60, color1, increment - 1);
      wave(c, canvas.height, 0.002, 60, color2, increment);

      increment += 0.02;
    }
  }

  function wave(
    c: CanvasRenderingContext2D,
    y: number,
    amplitude: number,
    frequency: number,
    color: string,
    increment: number,
    scale = 1
  ) {
    c.beginPath();
    c.moveTo(0, canvas.height);

    for (let i = 0; i < canvas.width; i++) {
      c.lineTo(
        i,
        (7 * y) / 8 + Math.sin(scale * i * amplitude + increment) * frequency
      );
    }

    c.lineTo(canvas.width, canvas.height);
    c.fillStyle = color;
    c.strokeStyle = color;
    c.fill();
    c.stroke();
  }

  const waves = {
    hidden: {
      y: "50px",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        stiffness: 500,
      },
    },
  };

  return (
    <motion.canvas
      variants={waves}
      initial="hidden"
      animate="visible"
      className={className}
      ref={canvasRef}
    ></motion.canvas>
  );
}
