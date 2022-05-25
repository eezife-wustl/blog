import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div style={{ display: "block"}}>
            <Image
            l   ayout="responsive"
                src={src}
                alt={alt}
              />
          </div>
        );
}
