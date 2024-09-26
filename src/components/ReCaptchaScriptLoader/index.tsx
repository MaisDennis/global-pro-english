"use client"; // Client component

import { useEffect } from 'react';

const ReCaptchaScriptLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LfmLEoqAAAAACCulQDVpB3npNbGKLlxYFa8bQCa';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default ReCaptchaScriptLoader;
