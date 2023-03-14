import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { CountdownContext } from "../CountdownContext";
import Countdown from "./Countdown";

export default function CountdownPage() {
    const [secondsInput, setSecondsInput] = useState("")
    const timeLeft = useContext(CountdownContext)
  
    return (
        <Box>
            <form 
                onSubmit={(event) => {
                    event.preventDefault()
                }} 
            >
                <input type='text' 
                    placeholder="Insert seconds" 
                    value={secondsInput} 
                    onChange={(event) => setSecondsInput(event.target.value)}
                    disabled={timeLeft > 0}/>
                <button type="submit"
                        disabled={timeLeft > 0}>
                        Start countdown
                </button>
            </form>
            
            <Countdown />

            
        </Box>
    )
  }