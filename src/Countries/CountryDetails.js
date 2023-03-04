import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function CountryDetails() {

    const urlParams = useParams()
    console.log(urlParams)

    const [countryData, setCountryData] = useState(null)

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${urlParams.countryId}`)
        .then((responseData) => {
            setCountryData(responseData.data[0])
        })
    }, [urlParams.countryId])

    return(
        <>
            <p>Details for country {urlParams.countryId}</p>

            {countryData && 
                <p>Official name: {countryData.name.official}</p>    
            }
        </>

    )
    
}