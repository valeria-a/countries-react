import { useEffect, useState } from "react"
import getJoke from "./utils2"

export default function PollJokesAsyncAwait2() {

    const [joke, setJoke] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
         async function fetchJoke() {
            try {
                // You can await here
                console.log('PollJokesAsyncAwait1: Calling getJoke()')
                const newJoke = await getJoke()
                console.log('PollJokesAsyncAwait1: Received return value from getJoke:', newJoke)
                setJoke(newJoke)
            } catch (error) {
                console.error(error)
                setErrorMsg(error.message)
            }
           }
           fetchJoke();
    } , [])


    return(
        <>
            <h5>We will automatically poll for random joke every 5 seconds:</h5>
            <p>{joke}</p>
            {errorMsg &&
                <p style={{color: 'red'}}>{errorMsg}</p>
            }
        </>
    )

}