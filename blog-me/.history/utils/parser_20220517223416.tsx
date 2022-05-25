import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
        return 
        <div>
            <Image 
            src={src} 
            width='100%'
            height='100%'
            />
        </div>;
}
