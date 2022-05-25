import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div>
            <Image
                layout="responsive"
                src={src}
                width={50%}
                height={50%}
                alt={alt}
              />
          </div>
        );
}
