import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
        return 
        <div>
            <Image 
            src={src} 
            alt={alt}
            width={60}
            height={60}
            />
        </div>
}
