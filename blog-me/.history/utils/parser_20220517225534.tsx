import Image from 'next/image';

export default function ImageRenderer({ src, alt }) {
        return (
            <Image
                src={image.properties.src}
                width={500}
                height={500}
                alt={alt}
                priority={isPriority}
              />
                {hasCaption ? <div className="caption" aria-label={caption}>{caption}</div> : null}
          </div>
        );
}
