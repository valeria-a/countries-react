
// we want a function that returns a joke after polling

import axios from "axios"

// this won't work!
export default function getJoke() {
    console.log("getJoke: Sending request for joke")
    axios.get("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        if (response.status === 200) {
            console.log('getJoke: Received response for joke, trying to return response')
            return response.data.value
        }
    })
    console.log('getJoke: Retuning from getJoke')
}