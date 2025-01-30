import React from "react";
import styles from "../../styles/NewsletterFooter.module.css";

const NewsletterFooter = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterBox}>
        <h2 className={styles.newsletterTitle}>
          Join Our Newsletter For More <span>Updates</span>
        </h2>
        <p className={styles.newsletterText}>
          Stay informed and connected by joining our newsletter. Receive regular updates, exclusive content, and valuable insights delivered directly to your inbox.
        </p>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="Enter Your Email" className={styles.inputField} />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBrand}>
          <h3 className={styles.brandTitle}>WESRONG</h3>
          <p className={styles.brandText}>
            Streamline workflow, enhance collaboration, track progress, and achieve goals efficiently. Simplify success today.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h4>Main Pages</h4>
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Feature</a>
            <a href="#">Blog</a>
            <a href="#">About Us</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <a href="#">Careers</a>
            <a href="#">Design</a>
            <a href="#">Cookies</a>
            <a href="#">Legal</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>CMS</h4>
            <a href="#">Service Intro</a>
            <a href="#">Blog Post</a>
            <a href="#">Style Guide</a>
            <a href="#">Product</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>Utility Pages</h4>
            <a href="#">404 Error Page</a>
            <a href="#">Licensing</a>
            <a href="#">Changelog</a>
            <a href="#">Password Protected</a>
          </div>

          <div className={styles.contactInfo}>
            <h4>Connect</h4>
            <p>hello@wesrong.com</p>
            <p>+02 6978-2719-2500</p>
            <div className={styles.socialIcons}>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
