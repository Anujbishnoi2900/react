import React, { useCallback, useEffect, useState } from 'react'

const Experiment = () => {
    const [length , setLength]= useState(8)
    const [numberAllow , setNumberAllow]= useState(false)
    const [charAllow , setCharAllow]= useState(false)
    const [password, setPassword]= useState("")

    const copypassword =()=>{
        window.navigator.clipboard.writeText(password)
    }

    const passwordGenrator = useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTVUXYZabcdefghijklmnopqrstvuxyz"

        if(numberAllow) str+="0123456789"
        if(charAllow) str+="*()_-&^%$#@!~{}[]"
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    },[length, numberAllow , charAllow])
    useEffect(()=>{
passwordGenrator()
    },[length , numberAllow , charAllow])

  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow py-4 px-3 bg-gray-200 text-orange-500'>


<h1 className='text-white-700 text-center my-3'>Password Genrator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input
value={password}
 type="text" 
 className='outline-none bg-white border-black-800 w-full py-1 px-1'
 readOnly
 />
 <button
 className='bg-blue-800 text-white shrink-0 active:scale-95 '
 onClick={copypassword} 
 >copy</button>
     
</div>

<div className='flex text-sm gap-x-2'>
<div className='flex item-center gap-x-1'>
    <input type="range" min={6} max={25} value={length} onChange={(e)=>setLength(e.target.value)}/>
    <label >length:{length}</label>
</div>
<div className='flex text-center'>
    <input
    defaultChecked={numberAllow}
    onChange={()=>setNumberAllow((prev)=>!prev)}
    type="checkbox"  
    />
    <label>number</label>
</div>
<div className='flex text-center'>
    <input
    defaultChecked={charAllow}
    onChange={()=>setCharAllow((prev)=>!prev)}
    type="checkbox"  
    />
    <label>charactor</label>
</div>
</div>
      </div>
    </div>
  )
}

export default Experiment
