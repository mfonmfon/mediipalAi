import React from "react";
import styles from "../../styles/Herosection.module.css"; 
import heroImage from "../../assets/hersectionimges/NestBackgroundImage.png.png";

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Get More Clients By Scaling <span>Your Cold Outreach</span>
        </h1>
        <p className={styles.heroText}>
          Accelerate team success efficiently with our solution. Streamline workflows, automate processes, and optimize collaboration.
        </p>

        {/* CTA Section */}
        <div className={styles.heroCTA}>
          <input type="email" placeholder="Enter your email" className={styles.heroInput} />
          <button className={styles.heroButton}>Request Demo</button>
        </div>

        {/* Trust Logos */}
        <div className={styles.trustLogos}>
          <span>Trusted by</span>
          <img src="coinbase.png" alt="Coinbase" />
          <img src="slack.png" alt="Slack" />
          <img src="dropbox.png" alt="Dropbox" />
          <img src="zoom.png" alt="Zoom" />
        </div>
      </div>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <img src={heroImage} alt="Hero" className={styles.heroImg} />
      </div>
    </section>
  );
};

export default HeroSection;
