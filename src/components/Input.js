import React from 'react';

const Input = () => {
    function search(e){
        if(e.target.timer){
            clearTimeout(e.target.timer)
        }

        e.target.timer = setTimeout(()=>{
            console.log(e.target.value)
        }, 1000)
    }
    return ( 
        <div>
            <input type="text" onInput={search}/>
        </div>
     );
}
 
export default Input;