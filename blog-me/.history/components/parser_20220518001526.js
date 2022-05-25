import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div>
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
