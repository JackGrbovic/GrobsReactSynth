// import { useEffect, useRef, useState } from 'react';

// function keyDown(key, callback) {
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

//         document.addEventListener("keydown", handle)
//         return document.removeEventListener("keydown", handle)

//     }, [key]);
// };

// export default keyDown;