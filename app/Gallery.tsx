"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Gallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when lightbox is open
  if (typeof window !== 'undefined') {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <>
      <div className={styles.galleryGrid}>
        {images.map((src, index) => (
          <div 
            key={index} 
            className={styles.galleryItem}
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Crochet product ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxClose}>&times;</div>
          <div className={styles.lightboxContent}>
             <Image
                src={selectedImage}
                alt="Full size preview"
                fill
                style={{ objectFit: 'contain' }}
                sizes="100vw"
                priority
             />
          </div>
        </div>
      )}
    </>
  );
}
