import Image from 'next/image';

type ServiceCardProps = {
    title: string;
    description: string;
    iconUrl: string;
};

export default function ServiceCard({ title, description, iconUrl }: ServiceCardProps) {
    return (
        <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/20 text-left h-full">
            <Image src={iconUrl} alt={title} width={40} height={40} className="mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}