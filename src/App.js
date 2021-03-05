import React, { useReducer, useEffect } from 'react';
import BlogList from './components/blogList';
import Input from './components/Input';
import getProcessedPosts from './helpers/getPosts'
import reducer from './reducer'

export let MyContext = React.createContext()

const App = () => {
  let [posts, dispatch] = useReducer(reducer, [])

  useEffect(()=>{

    const fetchData = async ()=>{
      await getProcessedPosts().then(res=>dispatch({type:'INIT', payload:res}))
    }

    fetchData()
  }, [])

  return ( 
    <MyContext.Provider value={dispatch}>
      <div>
        <Input />


        {posts.length ? <BlogList posts={posts}/> : <p>Нет постов</p>}
      </div>
    </MyContext.Provider>
   );
}
 
export default App;