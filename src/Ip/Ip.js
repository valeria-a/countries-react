import axios from "axios"
import { useState } from "react"

const GET_IP_URL ="https://api.ipify.org/?format=json"
const GEO_URL = (ip) => `http://ip-api.com/json/${ip}`

async function getIpData() {
    const ip_response = await axios.get(GET_IP_URL)
    const ip = ip_response.data['ip']
    const geo_data_response = await axios.get(GEO_URL(ip))
    return geo_data_response.data
}

export default function Ip() {

    const [data, setData] = useState("")

    async function handleClick() {
        try {
            const info = await getIpData()
            console.log(info)
            setData(`${info.country}, ${info.city}`)
        } catch(error) {
            setData('ERROR')
        }
        
    }

    return <div>
        <button onClick={handleClick}>Get IP data</button>
        <div>
            <p>{data}</p>
        </div>
    </div>
}