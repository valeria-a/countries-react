
// we want a function that returns a joke after polling

import axios from "axios"


export default async function getJoke() {
    console.log("getJoke: Sending request for joke")
    const response = await axios.get("https://api.chucknorris.io/jokes/random")
    if (response.status === 200) {
        console.log('getJoke: Received response for joke, trying to return response')
        return response.data.value
    } else {
        throw response.statusText
    }
}