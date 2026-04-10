import Image from "next/image";
import styles from "./page.module.css";
import fs from "fs";
import path from "path";
import Gallery from "./Gallery";

// ==========================================
// CONFIGURATION: EDIT ALL CONTENT HERE
// ==========================================
const siteConfig = {
  brandName: "Dhaaga by Nayana",
  tagline: "Handmade crochet with love",
  intro: "Handmade crochet flowers, plushies, coasters, accessories, cute gifts and more",
  
  // Replace these with actual URLs and info
  whatsappUrl: "https://wa.me/436705552253",
  email: "nayanakeshavamurthy@gmail.com",
  phone: "+43 670 555 2253", // Optional, leave empty if not needed
  
  // Event details (leave empty string for eventName to hide this section)
  eventName: "kunst & design markt",
  eventDates: "April 11–12, 2026",
  eventTime: "10:00 AM – 6:00 PM",
  eventLocation: "Bodenseeforum Konstanz",
  eventLocationUrl: "https://maps.app.goo.gl/6ZXjUC2y5u8sWV19A",
    
  // Feature image to display first. 
  // Leave empty ("") to automatically use the first image in the folder.
  featuredImage: "/products/IMG_2433 Medium.jpeg",

  // What she makes section list
  offerings: [
    "Crochet flowers",
    "Plushies",
    "Coasters",
    "Accessories",
    "Gifts / custom pieces",
  ]
};
// ==========================================

export default function Home() {
  // Dynamically read the public/products directory
  const productsDirectory = path.join(process.cwd(), 'public/products');
  let dynamicImages: string[] = [];
  
  try {
    const filenames = fs.readdirSync(productsDirectory);
    dynamicImages = filenames
      .filter((name) => /\.(jpg|jpeg|png|gif|webp)$/i.test(name))
      .map((name) => `/products/${name}`);
  } catch (error) {
    console.error("Error finding images in public/products:", error);
  }

  // Determine the featured image and the rest of the gallery
  const featured = siteConfig.featuredImage || dynamicImages[0] || "/products/placeholder-hero.jpg";
  const gallery = dynamicImages.filter(src => src !== featured);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.logoContainer}>
            <Image 
              src="/logo.png" 
              alt={`${siteConfig.brandName} Logo`} 
              width={160} 
              height={160} 
              className={styles.logo}
              priority
            />
          </div>
          <h1 className={styles.title}>{siteConfig.brandName}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <p className={styles.intro}>{siteConfig.intro}</p>
          
          <div className={styles.ctaGroup}>
            <a 
              href={siteConfig.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnPrimary}
            >
              Contact on WhatsApp
            </a>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className={styles.btnSecondary}
            >
              Email Me
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className={styles.section}>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Every piece is slowly and carefully crafted by hand, bringing warmth and personality to your everyday life. 
            </p>
            <p className={styles.aboutText}>
              Whether you are looking for a forever-blooming flower bouquet or a cute custom plushie, I would love to make something special for you. Custom orders are always welcome!
            </p>
          </div>
        </section>

        {/* OFFERINGS SECTION */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Make</h2>
          <div className={styles.offeringsList}>
            {siteConfig.offerings.map((item, index) => (
              <div key={index} className={styles.offeringCard}>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <Gallery images={gallery} />
        </section>

        {/* EVENT SECTION (Conditionally Rendered) */}
        {siteConfig.eventName && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Dhaaga in person</h2>
            <div className={styles.eventCard}>
              <h3 className={styles.eventTitle}>{siteConfig.eventName}</h3>
              <p className={styles.eventDetails}>{siteConfig.eventDates}</p>
              <p className={styles.eventDetails}>{siteConfig.eventTime}</p>
              <p className={styles.eventDetails}>
                {siteConfig.eventLocationUrl ? (
                  <a href={siteConfig.eventLocationUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                    {siteConfig.eventLocation}
                  </a>
                ) : (
                  siteConfig.eventLocation
                )}
              </p>
              <p className={styles.eventNote}>Come say hello at the stall! ✨</p>
            </div>
          </section>
        )}

        {/* CONTACT SECTION */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.contactGrid}>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span>WhatsApp:</span> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
              <span>Email:</span> {siteConfig.email}
            </a>
            <p className={styles.contactNote}>DM for orders, custom pieces, and gift ideas!</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p className={styles.creditLine}>
            Website handcrafted by <a href="https://typedbyme.puneeth.io/" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>Puneeth</a>
          </p>
        </footer>

      </div>
    </main>
  );
}
