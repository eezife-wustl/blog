import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
    <div style={{ display: "block"}}>
        return <Image 
        src={src} 
        alt={alt} 
        layout='responsive'
        width='100vw'
        height='100vh'
        />;
  </div>
}
