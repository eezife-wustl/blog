import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
        return 
        <div>
            <Image 
            src={src} 
            alt={}
            width='500'
            height='500'
            />
        </div>
}
