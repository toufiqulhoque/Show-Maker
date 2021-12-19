import { useEffect, useState } from "react"


const useFetch = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))

    }, []);
    console.log(service)

    return { service };

}
export default useFetch;


