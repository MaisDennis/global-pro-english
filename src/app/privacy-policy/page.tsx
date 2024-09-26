"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // Import the correct useRouter from next/navigation
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import styles from './privacy-policy.module.css'

export default function PrivacyPolicy() {
  const router: AppRouterInstance = useRouter(); // Initialize the router

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.paragraph}>Effective Date: October 31st, 2024</p>

      <h2 className={styles.heading}>1. Introduction</h2>
      <p className={styles.paragraph}>
        Welcome to Global Pro English. We respect your privacy and are committed to protecting the personal information
        you share with us. This Privacy Policy explains how we collect, use, and disclose your information when you
        access our website.
      </p>

      <h2 className={styles.heading}>2. Information We Collect</h2>
      <p className={styles.paragraph}>
        We may collect personal information such as your name, email address, and any other details you provide when
        signing up for our services.
      </p>

      <h2 className={styles.heading}>3. How We Use Your Information</h2>
      <p className={styles.paragraph}>We use the information we collect to provide, maintain, and improve our services, including:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>To personalize your experience</li>
        <li className={styles.listItem}>To send promotional materials</li>
        <li className={styles.listItem}>To improve our website based on your feedback</li>
      </ul>

      <h2 className={styles.heading}>4. Sharing Your Information</h2>
      <p className={styles.paragraph}>
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless
        we provide users with advance notice.
      </p>

      <h2 className={styles.heading}>5. Data Security</h2>
      <p className={styles.paragraph}>We implement security measures to maintain the safety of your personal information.</p>

      <h2 className={styles.heading}>6. Changes to This Privacy Policy</h2>
      <p className={styles.paragraph}>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
        Policy on this page.
      </p>

      <h2 className={styles.heading}>7. Contact Us</h2>
      <p className={styles.paragraph}>
        If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
      </p>

      {/* <section className={styles.signupSection}>
        <h2>Stay Updated</h2>
        <p>Join our mailing list to receive the latest updates and special offers.</p>
        <form className={styles.signupForm}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe Now</button>
        </form>
      </section> */}

      {/* Add the Go Back Button */}
      <button className={styles.goBackButton} onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
}
