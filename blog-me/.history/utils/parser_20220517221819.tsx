import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
        return <Image 
        src={src} 
        alt={alt} 
        width='10%'
        height='10'
        />;
}
