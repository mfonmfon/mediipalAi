import React from "react";
import styles from "../../styles/Testimonial.module.css";
import testimonials from "./tesimonialComponentData";

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialContainer}>
      <h2 className={styles.testimonialHeading}>
        What Our Happy Customers <span>Are Saying About Us</span>
      </h2>
      <p className={styles.testimonialSubText}>
        Read what our satisfied customers are saying about us. Discover their experiences and see how our services have positively impacted their businesses and lives.
      </p>

      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.profile}>
              <img src={testimonial.image} alt={testimonial.name} className={styles.profileImage} />
              <div>
                <h3 className={styles.profileName}>{testimonial.name}</h3>
                <p className={styles.profileRole}>{testimonial.role}</p>
              </div>
            </div>
            <p className={styles.testimonialText}>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
