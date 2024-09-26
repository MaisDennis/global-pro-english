// components/ScheduleSection.tsx
import React, { useEffect, useState } from 'react';
import { convertTimeToUserTimezone } from '../../utils/convertTime';
import styles from './scheduleSection.module.css';

export default function ScheduleSection() {
  const [userStartTime, setUserStartTime] = useState<string>('');
  const [userEndTime, setUserEndTime] = useState<string>('');
  const [userTimezone, setUserTimezone] = useState<string>('');

  useEffect(() => {
    const classStartTimeInSaoPaulo = new Date('2024-09-21T10:00:00'); // Saturday 10 AM SP Time
    const classEndTimeInSaoPaulo = new Date('2024-09-21T12:00:00'); // Saturday 12 PM SP Time

    const userStartTimeZone = convertTimeToUserTimezone(classStartTimeInSaoPaulo);
    const userEndTimeZone = convertTimeToUserTimezone(classEndTimeInSaoPaulo);

    setUserStartTime(userStartTimeZone.time);
    setUserEndTime(userEndTimeZone.time);
    setUserTimezone(userStartTimeZone.timezone);
  }, []);

  return (
    <section className={styles.scheduleSection}>
      <h2>Class Schedule</h2>
      <p className={styles.scheduleDescription}>
        Our next class is scheduled on <strong>Saturday</strong> {'from 10:00 - 12:00 (America/Sao_Paulo)'}.
        Based on your timezone (<strong>{userTimezone}</strong>), the class will take place between:
      </p>
      <div className={styles.scheduleDetails}>
        <p><strong>Day:</strong> Saturday</p>
        {/* <p><strong>Time:</strong> {'from 10:00 - 12:00 (America/Sao_Paulo)'}</p> */}
        <p><strong>Your Local Time:</strong> {userStartTime} - {userEndTime}</p>
        <p><strong>Your Timezone:</strong> {userTimezone}</p>
      </div>
    </section>
  );
}
