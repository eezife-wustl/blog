import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
    <div style={{ marginTop: "4rem"}}>
        return <Image 
        src={src} 
        alt={alt} 
        />;
  </div>
}
