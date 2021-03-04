import React, { useReducer, useEffect } from 'react';
import BlogList from './components/blogList';
import Input from './components/Input';
import getProcessedPosts from './helpers/getPosts'
import Loader from './components/loader'
import reducer from './reducer'

const App = () => {
  let [posts, dispatch] = useReducer(reducer, [])

  useEffect(()=>{

    const fetchData = async()=>{
      await getProcessedPosts().then(res=>dispatch({type:'INIT', payload:res}))
    }

    fetchData()
  }, [])

  return ( 
    <div>
      <Input />

      {posts.length ? <BlogList posts={posts}/> : <Loader/>}
    </div>
   );
}
 
export default App;