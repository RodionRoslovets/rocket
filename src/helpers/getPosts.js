async function getPosts(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(response.status === 200){
            let json = await response.json()
            return json
        }

    } catch (err) {
        console.log(err, 'Failed to fetch posts')
    }
}

async function getUsers(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(response.status === 200){
            let json = await response.json()
            return json
        }

    } catch (err) {
        console.log(err, 'Failed to fetch users')
    }
}

async function getProcessedPosts(){
    let posts, users, processedPosts = []

    await getPosts().then(res=>posts = res)
    await getUsers().then(res=>users = res)

    posts.forEach(post => {
        let procpost = {
            post,
            user: users.filter(user => user.id === post.userId)[0]
        }

        processedPosts.push(procpost)
    });

    return processedPosts
}

export default getProcessedPosts