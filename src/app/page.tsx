"use client"; // Add this line to make the component client-side
// src/app/page.tsx
import React, { useState } from 'react';
import { db } from '../firebase'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.css';
import ScheduleSection from '@/components/ScheduleSection';
import SignupSection from '@/components/SignupSection';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submitData', name, email, country,)
    const createdAt = new Date();
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Add a new document with a generated ID
      await addDoc(collection(db, 'subscribers'), { name, email, country, createdAt });
      setSuccess('Thank you for signing up! We will keep you updated.');
      setName('');
      setEmail('');
      setCountry('');
    } catch (err) {
      setError('Failed to save email. Please try again.');
    }
  };
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image 
          src="/images/logo-title.svg" // Adjust this path based on where you saved your logo
          alt="Company Logo" 
          width={300}            // Set the desired width
          height={100} // Desired height, adjust according to your logo's aspect ratio
          className={styles.logo}
        />
        {/* <h1 className={styles.title}>Boost Your Career with Fluent English</h1>
        <p className={styles.description}>
          Learn professional English tailored for corporate success. 
        </p> */}
        <h1 className={styles.title}>Accelerate Your Career with Global Pro English</h1>
        <p className={styles.description}>
          Master the professional English necessary for thriving in global corporations. Our intensive programs are designed for corporate professionals from all around the world who want to quickly gain the language skills needed for job interviews, daily meetings and collaborative environments.
        </p>
        {/* <a className={styles.ctaButton} href="#signup">Start Learning Today</a> */}
        <button className={styles.ctaButton} onClick={scrollToSignup}>Start Learning Today</button>
      </header>

      <main className={styles.main}>
        <section className={styles.featureSection}>
          <h2>Why Learn English with Us?</h2>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <h3>Tailored for Professionals</h3>
              <p>Our classes are designed specifically for corporate workers to enhance communication skills needed for meetings, presentations, and job interviews.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Interactive Group Sessions</h3>
              <p>Speak confidently in front of others with real-time feedback, practice public speaking, and improve with every session.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>Proven Results</h3>
              <p>Our students have experienced job promotions, new project opportunities, and career growth through mastering professional English.</p>
            </div>
          </div>
        </section>

        {/* <section className={styles.scheduleSection}>
          <h2>Group Class Schedule</h2>
          <p className={styles.scheduleDescription}>
            Join our weekly group classes every Saturday from 10:00 AM to 12:00 PM São Paulo time. Boost your English skills with peers and expert instructors!
          </p>
          <div className={styles.scheduleDetails}>
            <p><strong>When:</strong> Saturdays, 10:00 AM - 12:00 PM (São Paulo Time)</p>
            <p><strong>Class Type:</strong> Group Class</p>
          </div>
        </section> */}


        <section className={styles.testimonialsSection}>
          <h2 className={styles.testimonialsTitle}>What Our Students Say</h2>
          <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                &quot;The English program helped me communicate effectively in meetings and boosted my confidence. Highly recommend!&ldquo;
              </p>
              <h3 className={styles.testimonialAuthor}>- Li Wei, Project Manager, China</h3>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
              &quot;I improved my business English skills rapidly, which made a big difference in my career.&ldquo;
              </p>
              <h3 className={styles.testimonialAuthor}>- Kim Ji-soo, Marketing Specialist, South Korea</h3>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
              &quot;Thanks to this program, I can now confidently participate in global meetings!&ldquo;
              </p>
              <h3 className={styles.testimonialAuthor}>- Hiroshi Tanaka, Sales Executive, Japan</h3>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
              &quot;I used to feel nervous during presentations. Now, I can present my ideas confidently in English!&ldquo;
              </p>
              <h3 className={styles.testimonialAuthor}>- Ayşe Yılmaz, Business Analyst, Turkey</h3>
            </div>
          </div>
        </section>

        <ScheduleSection/>

        <section className={styles.faqSection}>
  <h2>Frequently Asked Questions</h2>
  
  <div className={styles.faqItem}>
    <h3>What is the duration of the courses?</h3>
    <p>Each course runs for 8 weeks, with classes held every Saturday from 10:00 AM to 12:00 PM (São Paulo Time). You’ll receive comprehensive training to boost your professional English skills.</p>
  </div>
  
  <div className={styles.faqItem}>
    <h3>Are the classes conducted online?</h3>
    <p>Yes! All classes are conducted online, allowing you to participate from anywhere in the world. You can join our engaging sessions without the need for travel.</p>
  </div>

  <div className={styles.faqItem}>
    <h3>What level of English do I need to join?</h3>
    <p>Our courses are designed for intermediate to advanced learners who wish to enhance their business English skills. A solid foundation in English is recommended to maximize your learning experience.</p>
  </div>

  <div className={styles.faqItem}>
    <h3>Will I have the opportunity to practice speaking?</h3>
    <p>Absolutely! Our classes focus heavily on speaking practice, allowing you to engage in real-life conversations with peers and instructors. This interactive format is key to improving your fluency and confidence.</p>
  </div>

  <div className={styles.faqItem}>
    <h3>How do I sign up for a course?</h3>
    <p>To sign up, simply visit our <a href="#signup">Join Now</a> section, enter your email, and follow the instructions to secure your spot in the next class!</p>
  </div>
</section>

<SignupSection
  name={name}
  setName={setName}
  email={email}
  setEmail={setEmail}
  country={country}
  setCountry={setCountry}
  handleSubmit={handleSubmit}
  success={success}
  error={error}
  
/>

      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 GlobalSpeak Pro. All Rights Reserved.</p>
          <Link href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </Link>
        </div>
      </footer>

    </div>
  );
}
