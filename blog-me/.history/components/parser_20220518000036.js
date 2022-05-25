import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";

export default function ImageRenderer({ src, alt }) {
        return (
        <div style={{ marginTop: "4rem"}}>
            <Image
                layout="fill"
                src={src}
                alt={alt}
              />
          </div>
        );
}
