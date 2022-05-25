import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
        return (
            <Image
                src={src}
                width={500}
                height={500}
                alt={alt}
              />
          </div>
        );
}
