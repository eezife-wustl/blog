import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div style={{width: '100%', height: '100%'>
            <Image
                layout="responsive"
                src={src}
                alt={alt}
                width='100%'
                height='100%'
              />
          </div>
        );
}
