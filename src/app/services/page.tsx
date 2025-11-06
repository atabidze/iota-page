import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground'; // ვიძახებთ ახალ კომპონენტს

export default function ServicesPage() {
  return (
    <>
      <ParticleBackground /> {/* ვიყენებთ ახალ კომპონენტს */}
      <main className="h-screen w-full flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            ჩვენი სერვისები
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            აქ განთავსდება დეტალური ინფორმაცია სერვისების შესახებ.
          </p>
          <Link href="/">
              <button className="mt-8 border border-white/50 text-white font-bold py-2 px-6 rounded-lg hover:bg-white/10 transition-colors">
                  მთავარ გვერდზე დაბრუნება
              </button>
          </Link>
        </div>
      </main>
    </>
  );
}