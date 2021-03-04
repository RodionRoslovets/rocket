import React from 'react';

const BlogList = ({posts}) => {
    let postsItems = posts.map(post=>(
        <li key={post.post.id}>
            <div>
                <p>
                    <span>{post.user.name} </span>
                    <span>{post.user.username}</span>
                </p>
                <p>
                    <span>{post.user.email}</span>
                </p>
            </div>

            <div>
                <p>{post.post.title}</p>
                <p>{post.post.body}</p>
            </div>
            
        </li>
    ))
    return ( 
        <ul>
            {postsItems}
        </ul>
     );
}
 
export default BlogList;