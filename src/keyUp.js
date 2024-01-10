// import { useEffect, useRef, useState } from 'react';

// function keyUp(key, callback) {
//     const callbackRef = useRef(callback);
    
//     useEffect(() => {
//         callbackRef.current = callback;
//     });
    
//     useEffect(() => {
//         function handle(event){
//             if(event.code === key){
//                 callbackRef.current(event);
//             }
//         }

//         document.addEventListener("keyup", handle)
//         return document.removeEventListener("keyup", handle)

//     }, [key]);
// };

// export default keyUp;