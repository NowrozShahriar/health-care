import { useEffect, useState } from "react";

function useFakedata() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://nowrozshahriar.github.io/fakedata/fakedata.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return services;
}

export default useFakedata;