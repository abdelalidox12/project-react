import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [countdown, setCountdown] = useState(null); // للعد التنازلي



  async function handleClick() {
    setPending(pending + 1);
    setCountdown(1); // ابدأ من 3 ثواني

    // عد تنازلي كل ثانية
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 3) {
          clearInterval(interval); // نوقف العد
          return null;
        }
        return prev + 1;
      });
    }, 1000);

    await delay(3000);
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
 

  }

  return (
    <>
      <h3>
        Promise : {countdown}
      </h3>  <h3>
        En attente : {pending}
      </h3>
      <h3>
        Finalisé : {completed}
      </h3>
      <button onClick={handleClick}>
        Acheter
      </button>
    </>
  );
}

function delay(ms) {
    
  return new Promise(resolve => {setTimeout(resolve, ms);
  });
}
