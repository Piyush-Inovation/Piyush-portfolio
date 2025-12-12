import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import '../styles/ScrollStack.css';

export default function ScrollStack({ children }) {
    useEffect(() => {
        // Initialize Lenis smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const navbarHeight = 75;
    const gapFromNavbar = 5;
    const baseTop = navbarHeight + gapFromNavbar;
    const stackGap = 70;

    return (
        <div className="scroll-stack-container">
            {Array.isArray(children) && children.map((child, index) => (
                <div
                    key={index}
                    className="scroll-stack-item"
                    style={{
                        top: `${baseTop + (index * stackGap)}px`,
                        zIndex: index + 1
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}
