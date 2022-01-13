import React from 'react';
import { useState, useEffect } from 'react';


export const Timer = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setInterval(() => {
          const id =  setCounter((p) => {
                console.log(p)
                if (p === 10) {
                    clearInterval(id);
                    // return 0;
                } else {
                    return p + 1
                }
            })
        }, 1000);
        
    }, []);

    return (  
        <div>
      count is : {counter}
        </div>
    )
}  