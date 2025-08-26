import { useEffect } from "react";

const ClickSpark = ({
    sparkColor = "#ffffff",
    sparkSize = 23,
    sparkRadius = 69,
    sparkCount = 8,
    duration = 400,
}) => {
    useEffect(() => {
        const handleClick = (e) => {
            for (let i = 0; i < sparkCount; i++) {
                const spark = document.createElement("span");

                spark.style.position = "fixed";
                spark.style.left = `${e.clientX}px`;
                spark.style.top = `${e.clientY}px`;
                spark.style.width = `${sparkSize}px`;
                spark.style.height = `${sparkSize}px`;
                spark.style.background = sparkColor;
                spark.style.borderRadius = "50%";
                spark.style.pointerEvents = "none";
                spark.style.zIndex = 9999;
                spark.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;

                document.body.appendChild(spark);

                const angle = (Math.PI * 2 * i) / sparkCount;
                const x = Math.cos(angle) * sparkRadius;
                const y = Math.sin(angle) * sparkRadius;

                requestAnimationFrame(() => {
                    spark.style.transform = `translate(${x}px, ${y}px) scale(0)`;
                    spark.style.opacity = "0";
                });

                setTimeout(() => spark.remove(), duration);
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

    return null;
};

export default ClickSpark;
