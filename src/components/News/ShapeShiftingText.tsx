import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Declarar el tipo de las propiedades del componente
type ShapeShiftingTextProps = {
    text: string;
};

const ShapeShiftingText: React.FC<ShapeShiftingTextProps> = ({ text }) => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={text} // Cambia el `key` cada vez que cambie el texto
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                        duration: 0.6,
                        ease: [0.4, 0.0, 0.2, 1], // Animación suave
                    }}
                    style={{
                        display: "inline-block",
                        fontSize: "3rem",
                        fontWeight: "bold",
                        overflow: "hidden",
                    }}
                >
                    {text}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default ShapeShiftingText;
