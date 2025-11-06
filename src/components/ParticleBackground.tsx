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

    // ეს არის ახალი, გაუმჯობესებული კონფიგურაცია
    const options: RecursivePartial<IOptions> = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000", // შავი ფონი
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab", // მაუსის მიახლოებისას "დაიჭერს" ხაზებს
                    },
                    resize: {
                        enable: true
                    },
                },
                modes: {
                    grab: {
                        distance: 150, // "დაჭერის" დისტანცია
                        links: {
                            opacity: 1,
                            color: "#ffffff"
                        }
                    }
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
                    random: true, // მოძრაობა რანდომულია
                    speed: 0.5, // ოდნავ ნელი მოძრაობა
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 120, // მეტი წერტილი, რომ ბადე მკვრივი იყოს
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