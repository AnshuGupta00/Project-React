import { useState } from 'react'
import InputBox from './Components'
import useCurrencyinfo from './Hooks/useCurrencyinfo'
import './App.css'

function App() {
    const [amount,setAmount]=useState(0)
    const [from,SetFrom ]=useState("usd")
    const [to,setTo]=useState("inr")
    const [convertedAmount , setConvertedAmount]=useState("inr")



    const currencyinfo= useCurrencyinfo(from)
  return (
    <>
 <h1 className=' bg-orange-600'> hello there!</h1>
    </>
  )
}
export default App
