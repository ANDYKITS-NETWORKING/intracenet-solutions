"use client";

import { motion } from "framer-motion";
import {
  networkNodes,
  networkConnections,
} from "./hero-data";

export default function HeroNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* SVG Connections */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {networkConnections.map((connection, index) => {
          const from = networkNodes.find(
            (n) => n.id === connection.from
          );

          const to = networkNodes.find(
            (n) => n.id === connection.to
          );

          if (!from || !to) return null;

          return (
            <motion.line
              key={index}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="currentColor"
              strokeWidth="0.15"
              className="text-primary/20 dark:text-primary/30"

              initial={{
                pathLength: 0,
              }}

              animate={{
                pathLength: 1,
              }}

              transition={{
                duration: 2,
                delay: index * 0.2,
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}

      {networkNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"

          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}

          initial={{
            scale: 0,
          }}

          animate={{
            scale: [1, 1.25, 1],
          }}

          transition={{
            duration: 2.5,
            delay: node.delay,
            repeat: Infinity,
          }}
        >
          {/* Outer Pulse */}

          <motion.div
            animate={{
              scale: [1, 2.5],
              opacity: [0.5, 0],
            }}

            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}

            className="
              absolute
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-primary
            "

            style={{
              width: node.size * 4,
              height: node.size * 4,
            }}
          />

          {/* Main Node */}

          <div
            className="
              relative
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border-2
              border-white
              bg-primary
              shadow-lg
              shadow-primary/50
            "
            style={{
              width: node.size,
              height: node.size,
            }}
          />

        </motion.div>
      ))}

      {/* Floating Data Packets */}

      {networkConnections.map((connection, index) => {
        const from = networkNodes.find(
          (n) => n.id === connection.from
        );

        const to = networkNodes.find(
          (n) => n.id === connection.to
        );

        if (!from || !to) return null;

        return (
          <motion.div
            key={`packet-${index}`}

            className="
              absolute
              h-2
              w-2
              rounded-full
              bg-green-400
              shadow
              shadow-green-500
            "

            initial={{
              left: `${from.x}%`,
              top: `${from.y}%`,
            }}

            animate={{
              left: `${to.x}%`,
              top: `${to.y}%`,
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.4,
            }}
          />
        );
      })}
    </div>
  );
}