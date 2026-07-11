// import React from 'react';
import { motion } from "framer-motion";

const ContactSvg = () => {
  return (
    <svg viewBox="0 0 600 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      {/* Screen */}
      <rect x="150" y="80" width="300" height="180" rx="12" fill="#1a1a1a" stroke="#27272a" strokeWidth="2" />

      {/* Screen glow */}
      <rect x="150" y="80" width="300" height="180" rx="12" fill="url(#screenGlow)" opacity="0.3" />

      <defs>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d88898" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Code lines */}
    {[0, 1, 2, 3].map((i) => (
  <motion.rect
    key={i}
    x="170"
    y={110 + i * 30}
    width={180 - i * 20}
    height="10"
    rx="5"
    fill="#22c55e"
    animate={{
      opacity: [0.2, 0.8, 0.2],
      scaleX: [1, 1.1, 1]
    }}
    style={{
      transformBox: "fill-box",
      transformOrigin: "left center"
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeInOut"
    }}
  />
))}

      {/* Cursor */}
      <motion.rect
        x="380"
        y="200"
        width="8"
        height="20"
        rx="2"
        fill="#d88898"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Monitor stand */}
      <rect x="270" y="260" width="60" height="30" fill="#27272a" rx="4" />
      <rect x="230" y="290" width="140" height="12" rx="6" fill="#27272a" />

      {/* Programmer */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Head */}
        <circle cx="300" cy="360" r="28" fill="#f1c27d" />
        <circle cx="300" cy="355" r="24" fill="#e8b878" opacity="0.5" />

        {/* Hair */}
        <path d="M272 350 Q300 320 328 350" fill="#2d2d2d" />

        {/* Eyes */}
        <circle cx="290" cy="358" r="3" fill="#1a1a1a" />
        <circle cx="310" cy="358" r="3" fill="#1a1a1a" />

        {/* Smile */}
        <path d="M292 368 Q300 372 308 368" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      </motion.g>

      {/* Body */}
      <rect x="260" y="390" width="80" height="60" rx="12" fill="#6366f1" />
      <rect x="265" y="395" width="70" height="20" rx="4" fill="#4f46e5" opacity="0.5" />

      {/* Arms typing */}
      <motion.rect
        x="220"
        y="400"
        width="45"
        height="12"
        rx="6"
        fill="#f1c27d"
        animate={{ rotate: [0, 15, 0] }}
        style={{
          transformBox: "fill-box",
          transformOrigin: "center"
        }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.rect
        x="335"
        y="400"
        width="45"
        height="12"
        rx="6"
        fill="#f1c27d"
        animate={{ rotate: [0, -15, 0] }}
        style={{
          transformBox: "fill-box",
          transformOrigin: "center"
        }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
      />

      {/* Keyboard */}
      <rect x="220" y="430" width="160" height="16" rx="6" fill="#27272a" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={228 + i * 24} y="434" width="18" height="8" rx="2" fill="#3f3f46" />
      ))}

      {/* Floating elements */}
      <motion.circle
        cx="120" cy="150" r="8" fill="#d88898" opacity="0.3"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="480" cy="200" r="6" fill="#22c55e" opacity="0.3"
        animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </svg>
  );
};

export default ContactSvg;