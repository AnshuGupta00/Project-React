import { useState, useEffect } from "react"


  
const [data, serData]=useState({})
function useCurrencyinfo(currency){
    useEffect(()=>{
         fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
        .then((res) => res.json())
        .then((res) => serData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}
    
export default useCurrencyinfo;