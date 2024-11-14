import { useCallback, useState, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(4);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  
  const passref = useRef(null);
  
  // Function to copy the password to the clipboard
  const CopytoClip = useCallback(() => {
    passref.current?.select();
    document.execCommand('copy');  // Use execCommand for older browsers
    window.navigator.clipboard.writeText(passref.current.value);  // Clipboard API for modern browsers
  }, [password]);
  
  // Password generator function
  const PasswordGenerator = useCallback(() => {
    let pass = '';
    let str = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) {
      str += '0123456789';
    }
    if (charAllowed) {
      str += '!@#$%^&*()';
    }
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-black flex flex-col'>
        <h1 className='text-white text-center my-3 text-3xl'>Password Generator</h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            ref={passref}
            type="text" 
            placeholder='Password'
            readOnly
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-700 text-white cursor-pointer"
          />
          <button 
            className='button relative h-[50px] w-[150px] rounded-lg overflow-hidden 
            transition-all duration-500 ease-in-out cursor-pointer
            hover:shadow-[0.5px_0.5px_150px_#252525]
            group'
            onClick={CopytoClip}
          >
            <span className="absolute inset-0 bg-white text-teal-600 text-[1.2rem] font-semibold flex 
              items-center justify-center transform transition-all duration-500 ease-in-out 
              translate-y-0 scale-110 group-hover:-translate-y-full group-hover:scale-0 
              group-hover:rotate-120"
            >
              Copy
            </span>
            <span className="absolute inset-0 bg-teal-600 text-white text-[1.2rem] font-semibold flex 
              items-center justify-center transform transition-all duration-500 ease-in-out 
              translate-y-full group-hover:translate-y-0 group-hover:scale-110"
            >
              Copied 
            </span>
          </button>
        </div>
        
        <div className='flex justify-center mb-4'>
          <input 
            type="range" 
            min={4}
            max={25}
            value={length}  // Ensure the range is controlled by the state
            className="cursor-pointer bg-blue-600"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label htmlFor="length" className='text-lg text-white ml-2'>
            Length: {length}
          </label>
        </div>

        <div className='flex gap-4 justify-evenly mt-4'>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              id="Numbers" 
              checked={numAllowed} 
              onChange={() => setNumAllowed((prev) => !prev)} 
            />
            <label htmlFor="Numbers" className='text-white text-2xl'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              id="Characters" 
              checked={charAllowed} 
              onChange={() => setCharAllowed((prev) => !prev)} 
            />
            <label htmlFor="Characters" className='text-white text-2xl'>Characters</label>
          </div>
        </div>

        <div className='flex justify-center mt-2'>
          <button 
            className='relative inline-flex items-center justify-center
            text-white font-black uppercase tracking-wider
            py-3 px-6 text-[18px] bg-[#008542] cursor-pointer
            transition-all duration-[700ms] ease-[cubic-bezier(0,0.8,0.26,0.99)]
            active:translate-y-1 select-none'
            onClick={PasswordGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
