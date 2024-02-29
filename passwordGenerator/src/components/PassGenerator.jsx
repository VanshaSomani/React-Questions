import React, { useCallback, useEffect, useRef, useState } from 'react';

export const PassGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8)
    const [numbersAllowed, setNumbersAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const passwordRef = useRef(null)

    const passwordGenerator = () => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numbersAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }

    const copyPasswordToClipboard = () => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password)
    }

    useEffect(() => {
        passwordGenerator();
    }, [length, numbersAllowed, charAllowed])

    return (
        <div className="w-full max-w-sm p-4 bg-black border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700 flex flex-col items-center">
            <form className="space-y-6" action="#">
                <h5 className="text-3xl text-gery-400 font-bold shadow-outline">Password Generator</h5>
                <input type='text' value={password} className='outline-none w-full py-2 px-4 bg-gray-800 text-white border border-black rounded-lg shadow-md focus:ring-2 focus:ring-blue-500' placeholder='Password' readOnly ref={passwordRef} />
                <div className='flex items-center justify-center text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label>Length: {length}</label>
                    </div>
                </div>
                <div>
                    <label htmlFor="characterInput" className="text-white mr-2">Characters</label>
                    <input
                        type="checkbox"
                        defaultChecked={charAllowed}
                        id="characterInput"
                        onChange={() => {
                            setCharAllowed((prev) => !prev)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="characterInput" className="text-white mr-2">Numbers</label>
                    <input
                        type="checkbox"
                        defaultChecked={numbersAllowed}
                        id="numberInput"
                        onChange={() => {
                            setNumbersAllowed((prev) => !prev)
                        }}
                    />
                </div>
                <button type="button" onClick={copyPasswordToClipboard} className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:hover:text-gray-300 dark:hover:text-lg dark:hover:transition-all duration-300 dark:focus:ring-blue-800">Copy To Clipboard</button>
            </form>
        </div>
    );
};
