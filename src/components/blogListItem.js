import styled from 'styled-components'

const Name = styled.span`
    font-size:12px;
`
const UserName = styled.p`
    font-size:16px;
    font-weight:bold;
`
const Email = styled.a`
    font-size:12px;
`
const Title = styled.p`
    font-size:24px;
    font-weight:bold;

    &:first-letter{
        text-transform:uppercase;
    }
`
const Body = styled.p`
    margin-top:16px;
    &:first-letter{
        text-transform:uppercase;
    }
`

const BlogListItem = styled.li`
    list-style:none;
    padding:14px 18px;
    border-radius:8px;
    box-shadow:0px 0px 4px #ccc;
    margin:12px 0; 
`

const BlogItem = ({name, username, email, title, body})=>{
    return (
        <BlogListItem>
            <div>
                <Title>{title}</Title>
                <div>

                    <UserName>{username}</UserName>
                    <Name>{name} </Name>

                    <Email href={`mailto:${email}`}>{email}</Email>

                </div>
                <Body>{body}</Body>
            </div>
        </BlogListItem>
    )
}

export default BlogItem
            // <div>
            //     <p>
            //         <span>{post.user.name} </span>
            //         <span>{post.user.username}</span>
            //     </p>
            //     <p>
            //         <span>{post.user.email}</span>
            //     </p>
            // </div>

            // <div>
            //     <p>{post.post.title}</p>
            //     <p>{post.post.body}</p>
            // </div>