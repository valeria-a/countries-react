
import { useState, useEffect } from "react";

export default function Countdown({seconds, onCountdownFinished}) {
    const [timeLeft, setTimeLeft] = useState(seconds);
  
    // useEffect(() => {
    //     console.log('calling useEffect', timeLeft)
    //     if (timeLeft === 0) {
    //         onCountdownFinished()
    //     }
    //     const timerId = setTimeout(() => {
    //       setTimeLeft((t) => t - 1);
    //     // setTimeLeft(timeLeft-1);
    //   }, 1000);
    //   console.log('set timeout', timerId)
      
    //   // we have to provide clean-up function to stop interval/timer!
    //   return () => {
    //     console.log('calling clearTimeout for timerId', timerId)
    //     clearTimeout(timerId)
    //   };
    // }, [timeLeft]);

    useEffect(() => {
      console.log('calling useEffect', timeLeft)
      if (timeLeft == 0) {
          onCountdownFinished()
      } else {
          const intervalId = setInterval(() => {

            console.log('still running interval')
            setTimeLeft((t) => t - 1);
            
          // setTimeLeft(timeLeft-1);
        }, 1000);
        console.log('set intervalId', intervalId)

        // we have to provide clean-up function to stop interval/timer!
        return () => {
          console.log('calling clearTimeout for intervalId', intervalId)
          clearInterval(intervalId)
        };
      }
    

  }, [timeLeft]);


    //follow-up questions
    // 1. why can't we set empty dependencies list? []
    // 2. We want timer to continue counting if we navigate inside the app! how to achieve this?
    //  


  
    return (
        <div>{timeLeft}s</div>
    )
  }