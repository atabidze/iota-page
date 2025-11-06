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

    const options: RecursivePartial<IOptions> = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000000", // ფონის ფერი
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 1,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#3f92d7", // წერტილების ფერი
                },
                links: {
                    color: "#3f92d7", // ხაზების ფერი
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80, // წერტილების რაოდენობა
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
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