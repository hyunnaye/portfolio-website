
import React, { useEffect, useRef, useState } from "react";
import './typing.css'

export default function Typing({done, text, setDone}) {
    const index = useRef(0);
    const [currText, setCurrText] = useState('');
    const [blinker, setBlinker] = useState(false);
    useEffect(() => { 
        if (index.current === text.length) {
            setDone(true);
            setBlinker(false);
            return;
        }
        if (index.current === 0) {
            setCurrText(text[index.current]);
            index.current += 1;
        }
        const typeTimeout = setTimeout(() => {
            setCurrText(currText +`\n`+text[index.current] );
            index.current += 1;
            }, 750); 
        return() => clearTimeout(typeTimeout)
    }, [currText, text, index, setDone]
    );
    
    useEffect(() => {
        if (done) {
            setBlinker(false);
            return;
        }
        const blinkTimeout = setTimeout(() => {
            setBlinker((prev) => !prev);
          }, 150);
          return () => clearTimeout(blinkTimeout);
        }, [blinker, done]);



    return(
        <p className='linebreak'>{currText}{blinker ? "|" : " "}</p>
    );

}