import axios from "axios"
import { useEffect, useState } from "react"

export default function PollingJokes() {

    const [joke, setJoke] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                console.log('sending request')
                axios.get("https://api.chucknorris.io/jokes/random")
                .then((response) => {
                    if (response.status === 200) {
                        setJoke(response.data.value)
                    } else {
                        console.log('inside else', response.statusText)
                        throw response.statusText
                    }
                })
                .catch((error) => {
                    setErrorMsg(error.message)
                })
                console.log('hi')
            }, 5000
        )
        // no clean-up causes a LOT of trouble!
        return () => clearInterval(intervalId)
        
    }, [])


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