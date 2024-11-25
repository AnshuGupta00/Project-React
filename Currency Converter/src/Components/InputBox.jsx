
import {useId} from './InputBox';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrancychange,
    currencyoption=[],
    selectcurrency="usd",
    amountdisable=false,
    currencyDisable=false,
    className = "",
}) {
   
const amountuniqeID=useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor='{amountuniqueId}' className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id='{amountuniqeId}'
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange (Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=>onCurrancychange && onCurrancychange (e.target.value)}
                    disabled={currencyDisable}>
                    
                            {currencyoption.map( (Currency)=>(        
                        <option key={Currency} value={Currency }
                        >
                        {Currency}
                    </option> 
                            ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
