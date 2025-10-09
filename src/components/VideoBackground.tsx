"use client";

export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
    </div>
  );
}