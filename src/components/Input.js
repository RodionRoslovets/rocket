import React, { useContext } from 'react';
import {MyContext} from '../App'
import getProcessedPosts from '../helpers/getPosts'


const Input = () => {
    const dispatch = useContext(MyContext)

    const fetchData = async()=>{
        await getProcessedPosts().then(res=>dispatch({type:'INIT', payload:res}))
    }

    function search(e){
        if(e.target.timer){
            clearTimeout(e.target.timer)
        }

        e.target.timer = setTimeout(()=>{
            if(e.target.value.trim()){
                fetchData().then(()=>{dispatch({type:'SEARCH', payload:e.target.value}) })
            } else {
                fetchData()
            }  
        }, 1000)
    }
    return ( 
        <div>
            <input type="text" onInput={search}/>
        </div>
     );
}
 
export default Input;