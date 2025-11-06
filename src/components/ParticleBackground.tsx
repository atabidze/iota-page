"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type IOptions, type RecursivePartial } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // ეს არის განახლებული კონფიგურაცია
    const options: RecursivePartial<IOptions> = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000000", // შავი ფონი
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse", // მაუსის მიახლოებისას "განიზიდება"
                    },
                    resize: {
                        enable: true
                    },
                },
                modes: {
                    repulse: { // "განზიდვის" პარამეტრები
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff", // თეთრი წერტილები
                },
                links: {
                    color: "#ffffff", // თეთრი ხაზები
                    distance: 150,
                    enable: true,
                    opacity: 0.4, // ხაზების გამჭვირვალობა
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 0.2, // ძალიან ნელი მოძრაობა
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 100, // მეტი წერტილი
                },
                opacity: {
                    value: 0.5, // წერტილების გამჭვირვალობა
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 }, // პატარა წერტილები
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="fixed top-0 left-0 w-full h-screen z-[-1]"
        />
    );
};

export default ParticleBackground;