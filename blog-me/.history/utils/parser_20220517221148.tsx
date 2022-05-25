import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
    <div style={{ display: "block"}}>
        return <Image 
        src={src} 
        alt={alt} 
        width='50'
        height='10%'
        />;
  </div>
}
