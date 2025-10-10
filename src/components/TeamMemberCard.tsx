import Image from 'next/image';

type TeamMemberCardProps = {
    fullName: string;
    position: string;
    photoUrl: string;
};

export default function TeamMemberCard({ fullName, position, photoUrl }: TeamMemberCardProps) {
    return (
        <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
                <Image 
                    src={photoUrl} 
                    alt={fullName} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="rounded-full" 
                />
            </div>
            <h3 className="text-xl font-bold text-white">{fullName}</h3>
            <p className="text-blue-400">{position}</p>
        </div>
    );
}