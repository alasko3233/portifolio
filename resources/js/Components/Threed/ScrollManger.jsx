import React, { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ScrollManager = (props) => {
    const { section, onChangeSection } = props;
    const data = useScroll();
    const lastScroll = useRef(0);
    const isAnimating = useRef(false);

    // Ajoutez vos classes CSS ici
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

    useEffect(() => {
        // Utilisez GSAP pour animer le défilement jusqu'à la section appropriée
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            },
        });
    }, [section]);

    // useFrame(() => {
    //   if (isAnimating.current) {
    //     lastScroll.current = data.scroll.current;
    //     return;
    //   }

    //   // Logique de détection de la section actuelle
    //   const curSection = Math.floor(data.scroll.current * (data.pages - 1));
    //   onChangeSection(curSection);
    //   lastScroll.current = data.scroll.current;
    // });
    useFrame(() => {
        if (isAnimating.current) {
            lastScroll.current = data.scroll.current;
            return;
        }

        const curSection = Math.floor(data.scroll.current * (data.pages - 0.5));
        if (data.scroll.current > lastScroll.current && curSection === 0) {
            onChangeSection(1);
        }
        if (
            data.scroll.current < lastScroll.current &&
            data.scroll.current < 1 / (data.pages - 1)
        ) {
            onChangeSection(0);
        }
        lastScroll.current = data.scroll.current;
    });
    return null;
};

export default ScrollManager;
