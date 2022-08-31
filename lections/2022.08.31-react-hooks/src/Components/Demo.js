import React from "react";
import { useEffect } from "react";
function Demo({ props }) {
    const [state,setState]=useState('');

    useEffect(()=>{
        //runs once after initial render
        //and after every change of props or state changes

    },[props,state])
}
export default Demo;
