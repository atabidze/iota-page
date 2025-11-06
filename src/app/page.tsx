import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import VideoBackground from '@/components/VideoBackground'; // იმპორტი

const services = [
  { id: 1, title: 'ვებ-გვერდის დამზადება', description: 'შევქმნით თანამედროვე და რესპონსიულ ვებ-გვერდს თქვენი ბიზნესისთვის.', iconUrl: '/placeholder-icon.svg' },
  { id: 2, title: 'მობილური აპლიკაციები', description: 'ვამზადებთ iOS და Android აპლიკაციებს თქვენი იდეების განსახორციელებლად.', iconUrl: '/placeholder-icon.svg' },
  { id: 3, title: 'IT კონსულტაცია', description: 'გთავაზობთ პროფესიონალურ რჩევებს თქვენი IT ინფრასტრუქტურის ოპტიმიზაციისთვის.', iconUrl: '/placeholder-icon.svg' },
];
const teamMembers = [
    { id: 1, fullName: 'ალექსანდრე ტაბიძე', position: 'დამფუძნებელი', photoUrl: '/placeholder-profile.svg' },
    { id: 2, fullName: 'გიორგი გიორგაძე', position: 'პროექტის მენეჯერი', photoUrl: '/placeholder-profile.svg' },
    { id: 3, fullName: 'ანა ანანიძე', position: 'UI/UX დიზაინერი', photoUrl: '/placeholder-profile.svg' },
];

export default function Home() {
  return (
    <>
      <VideoBackground /> {/* ფონი ემატება აქ */}
      <main>
        <section className="h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              შენი საიმედო IT პარტნიორი
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              ჩვენ ვქმნით თანამედროვე IT გადაწყვეტილებებს.
            </p>
            <Link href="#contact">
              <button className="mt-10 bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
                კონსულტაციის მიღება
              </button>
            </Link>
          </div>
        </section>
        <section id="services" className="py-20 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">ჩვენი სერვისები</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.map((service) => (
                      <ServiceCard key={service.id} title={service.title} description={service.description} iconUrl={service.iconUrl} />
                  ))}
              </div>
          </div>
        </section>
        <section id="team" className="py-20 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">ჩვენი გუნდი</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                      <TeamMemberCard key={member.id} fullName={member.fullName} position={member.position} photoUrl={member.photoUrl} />
                  ))}
              </div>
          </div>
        </section>
        <footer id="contact" className="py-10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IOTA. ყველა უფლება დაცულია.</p>
        </footer>
      </main>
    </>
  );
}