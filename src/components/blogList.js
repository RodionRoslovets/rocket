import React from 'react'
import BlogItem from './blogListItem'

const BlogList = ({posts}) => {
    let postsItems = posts.map(post=>{
        return (
            <BlogItem 
                key={post.post.id} 
                name={post.user.name}
                username={post.user.username}
                email={post.user.email}
                title={post.post.title}
                body={post.post.body}>
            </BlogItem>
        )
    })
    return ( 
        <ul>
            {postsItems}
        </ul>
     );
}
 
export default BlogList;