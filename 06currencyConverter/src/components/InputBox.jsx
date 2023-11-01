import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,// to change state when amount changes, an useState will be made at, where amont changes
    selectCurrency= 'usd',// default value of selected currency
    currencyOptions=[],//default empty arry so that it doesnot crash, we will loop through this (list of curr dropdown)
    onCurrencyChange,// to update state when currency changes
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()// we are using use Id for mapping assesibility( pressing tab to navigate)|| dont use useId for generating keys in a list

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> {/* this class name we are taking from user, so we are using{``}, ${className} will have the user input css here */}
            <div className="w-1/2">
                <label htmlFor= {amountInputId} className="text-black/40 mb-2 inline-block">
                    {label} {/* this will come from variable data to or from */}
                </label>
                <input
                    id={amountInputId}// the htmlfor element binds with the same input id(we can map input id & lable html for without using useId hook, but we want to generate unique id for each so using this)
                    className="outline-none w-full bg-gray-100 py-1.5 px-2 rounded-lg"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}// ask amountDisabled for its value
                    value={amount}// aks amount that we took from the user for the value
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}// we are calling a method onAmoCha so that all are imformed of the changes of amount|| this method will be accessed directly from, where the user makes the change || && checked whether the method exists or not || in events js takes the value as str so Number() takes the value as num
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value= {selectCurrency}// current value of the select field
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}// when the user selects a different currency this changes the {selectCurrency} value should change to a different currency
                    disabled= {currencyDisable}
                >
                    
                        {currencyOptions.map((curr)=> (// using =>() or only => are the same
                            <option key ={curr} value={curr}>
                            {curr}
                            </option>// remember to use the key for loops in react jsx for performance(use id if availeble)
                        ))}
                
                </select>
                
            </div>
        </div>
    ); 
}

export default InputBox;

// myarr= [{'a': 1, 'b': 2}]
// myarr.map((currency)=>(
// <option key={currency} value={currency}>
//       {currency}
//     </option>
// ))

