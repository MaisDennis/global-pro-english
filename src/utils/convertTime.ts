// utils/convertTime.ts
export const convertTimeToUserTimezone = (date: string | Date) => {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  const options: Intl.DateTimeFormatOptions = {
    timeZone: userTimezone,
    // weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  const userTime = new Date(date).toLocaleString('en-US', options);
  return {
    time: userTime,
    timezone: userTimezone,
  };
};
