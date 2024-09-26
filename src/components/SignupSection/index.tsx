import React from 'react';
import { getNames } from 'country-list';
import styles from './styles.module.css';
import { FaChevronDown } from 'react-icons/fa';

interface SignupSectionProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  success: string;
  error: string;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function SignupSection (
  { 
    name,
    setName,
    email,
    setEmail,
    country,
    setCountry,
    success,
    error,
    handleSubmit }: SignupSectionProps
) {
  const countries = getNames();

  return (
    <section id="signup" className={styles.signupSection}>
      <div className={styles.signupContent}>
        <h2>Join the Global Corporate English Program</h2>
        <p>Start improving your business communication skills today. Fast, effective, and tailored for corporate professionals.</p>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className={styles.inputField}
            />
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className={styles.inputField}
            />
            <div className={styles.selectContainer}>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className={styles.inputField}
              >
                <option value="" disabled className={styles.optionPlaceholder}>
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country} className={styles.optionItem}>
                    {country}
                  </option>
                ))}
              </select>
              <FaChevronDown className={styles.dropdownIcon} />
            </div>
            <button 
              type="submit" 
              className={styles.submitButton}
            >Sign Up Now</button>
          </div>
        </form>
        {error && <p className={styles.errorMessage}>{error}</p>}
        {success && <p className={styles.successMessage}>{success}</p>}
        <p className={styles.privacyText}>We will not share your information.</p>
      </div>
    </section>
  );
}
