"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  handler?(): void; 
}

export default function Modal({children, handler}: IProps) {
  const leadsterModal = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
    onClick={handler}
      className="fixed top-0 right-0 bg-opacity-50 h-full w-full bg-leadster-0 flex items-center justify-center z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className=""
        variants={leadsterModal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children ?? <p className="bg-white rounded-md p-4">SEM CONTEÚDO NA MODAL</p>}
      </motion.div>
    </motion.div>
  );
}
