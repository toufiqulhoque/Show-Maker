import { useEffect, useState } from "react"


const useFetch = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://shrouded-tor-41331.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))

    }, []);
    console.log(service)

    return { service };

}
export default useFetch;


