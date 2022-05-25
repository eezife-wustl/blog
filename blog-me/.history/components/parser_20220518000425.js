import Image from 'next/image';
import { getStrapiMedia } from "../lib/media";
import styles from './styles/images.module.css';

export default function ImageRenderer({ src, alt }) {
        return (
        <div sclassName={'image-container'}>
            <Image
                className={'image'}
                layout="fill"
                src={src}
                alt={alt}
                width='10%'
                height='10%'
              />
          </div>
        );
}
