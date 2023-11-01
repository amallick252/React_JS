import { useState, useCallback, useEffect } from "react";

function App() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passwordGenerator = useCallback(()=>{
        let pass =''
        let str = 'A,B,C,D,E,F,a,b,c,d,e,f'
        
        if(charAllowed) str += '!,@,#,$,%,^,&'
        if(numberAllowed) str += '0,1,2,3,4,5,6,7,8,9'

        for (let index = 1; index <=length; index++) {
            let charIndex = Math.floor(Math.random()*str.length +1)
            pass += str.charAt(charIndex)            
        }
        setPassword(pass)      

    }, [length, numberAllowed, charAllowed, setPassword])

    useEffect(() => {
        passwordGenerator()
    },[length,numberAllowed,charAllowed, passwordGenerator])

    return
    
}