import { useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(0)
  const [Numallowed, setnumallowed] = useState(0)
  const[charallowed, setcharallowed] =useState(false)
  const [password, setpassword] = useState(false)

const PasswordGenrator=()=>{}

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-black justify-center text-3xl'
       ><h1 className='text-white text-center my-3'>Passwor Genrator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" 
        placeholder='Password'
        readOnly
         className="outline-none w-full py-1 px-3"
      />
      <button className='bg-orange-400 text-2xl text-center rounded-md' >Copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
     <input type="range" 
     min={8}
     max={25}
     className="cursor-pointer"
     />
      </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" id="Numbers" />
        <label htmlFor="Numbers" className='text-base text-white'> Numbers </label>
        </div>
        
      <div>
      </div>
     </div>
    </>
  )
}

export default App
