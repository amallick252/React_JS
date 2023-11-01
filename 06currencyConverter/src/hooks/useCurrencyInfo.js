import {useEffect, useState} from "react"


function useCurrencyInfo(currency){// some hooks take optional argument, our hook takes an argument, this hook will return some data
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())// also you can use JSON.parse.res
        .then((res) => setData(res[currency]))// here the currency is the key(below date->usd)
        console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;

const myObject = {
    key1: 'value1', // 'key1' is a valid identifier
    'key2': 'value2', // 'key2' is a string literal (property name in quotes)
    'property with spaces': 'value3', // Property name with spaces (needs to be in quotes)
    '4thProperty': 'value4', // Property name starting with a number (needs to be in quotes)
  };
  
//   console.log(myObject.key1); // Accessing using dot notation
//   console.log(myObject['key2']); // Accessing using square bracket notation
//   console.log(myObject['property with spaces']); // Accessing a property with spaces
//   console.log(myObject['4thProperty']); // Accessing a property starting with a number

// import {useEffect, useState} from "react"
// const [data, setData] = useState()
// let currency = 'usd'
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => {setData(res[currency]);
//             console.log(data);
//         })
        

// let currency = 'usd'
// let data
// fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => data = res[currency], console.log (data)) 


