const data = localStorage.getItem('posts')
const posts = data ? JSON.parse(data) : []

const handleCancel = () => {
    window.history.back()
}

const handlePost = () => {
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const content = document.getElementById('content').value


    const post = ({title, description, content});

    posts.push(post)

    localStorage.setItem('posts', JSON.stringify(posts))

    handleCancel()
}