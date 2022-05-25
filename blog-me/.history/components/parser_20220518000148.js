import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div style={{ display: "block"}}>
            <Image
                layout="responsive"
                src={src}
                alt={alt}
                width='10%'
                height='50%'
              />
          </div>
        );
}
