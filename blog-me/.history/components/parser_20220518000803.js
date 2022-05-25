import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div>
            <Image
                layout="responsive"
                src={src}
                alt={alt}
                width='10%'
                height='10%'
              />
          </div>
        );
}
