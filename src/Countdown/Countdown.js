import { useContext } from "react"
import { CountdownContext } from "../CountdownContext"

export default function Countdown() {

    const timeLeft = useContext(CountdownContext)

    if (timeLeft > 0) {
      return (
          <>
          <h5>Counting down...</h5>
          <div>{timeLeft}s</div>
          </>
      )
    } else {
      return null
    }
  }