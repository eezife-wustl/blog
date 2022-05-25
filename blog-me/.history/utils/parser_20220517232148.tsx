import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div>
            <Image
                src={getStrapiMedia(src)}
                width={500}
                height={500}
                alt={alt}
              />
          </div>
        );
}
