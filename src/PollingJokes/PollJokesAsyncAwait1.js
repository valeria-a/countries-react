import { useEffect, useState } from "react"
import getJoke from "./utils"

export default function PollJokesAsyncAwait1() {

    const [joke, setJoke] = useState("")

    useEffect(() => {
        console.log('PollJokesAsyncAwait1: Calling getJoke() from component')
        const newJoke = getJoke()
        console.log('PollJokesAsyncAwait1: Received return value from getJoke:', newJoke)
        setJoke(newJoke)
    } , [])


    return(
        <>
            <h5>We will automatically poll for random joke every 5 seconds:</h5>
            <p>{joke}</p>
        </>
    )

}