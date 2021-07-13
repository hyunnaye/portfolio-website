
import React, { useEffect, useRef, useState } from "react";
import './typing.css'

export default function Typing({done, text, setDone}) {
    const subIndex = useRef(0);
    const index = useRef(0);
    const [currText, setCurrText] = useState('');
    const [blinker, setBlinker] = useState(false);
    useEffect(() => { 
        if (index.current === text.length) {
            setDone(true);
            setBlinker(false);
            return;
        }
    
        if (subIndex.current === text[index.current].length) {
            setCurrText(currText + `\n`);
            index.current += 1;
            subIndex.current = 0;
            return;
        }
        const typeTimeout = setTimeout(() => {
            setCurrText(currText + text[index.current].charAt(subIndex.current));
            subIndex.current += 1;
            }, 45); 
        return() => clearTimeout(typeTimeout)
    }, [currText, text, subIndex, index, setDone]
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