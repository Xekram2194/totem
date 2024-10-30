import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useInactivityRedirect(timeout = 60000) {
  const navigate = useNavigate();
  let inactivityTimer;

  const resetTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      navigate('/');
    }, timeout);
  };

  useEffect(() => {
    // Reset timer on user activity
    const events = ['mousemove', 'mousedown', 'click', 'scroll', 'keypress'];

    events.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    // Start timer when the component mounts
    resetTimer();

    // Clean up event listeners when component unmounts
    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [navigate, timeout]);

  return null;
}

export default useInactivityRedirect;
