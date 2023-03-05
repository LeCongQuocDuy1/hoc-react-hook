import { useState, useEffect } from 'react'
import axios from 'axios';

export const GetAPI = () => {

    const tabs = ["posts", "comments", "albums"];
    const [type, setType] = useState('posts');
    const [showBtnTop, setShowBtnTop] = useState(false);
    const [posts, setPosts] = useState([]);

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => {
                setPosts(res.data)
                console.log(res);
            })
    }, [type])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setShowBtnTop(true) : setShowBtnTop(false)
        })
    }, [])

    return (
        <>
            <h1>Get API with Axios</h1>
            <br />

            {tabs.map((tab) => (
                <button style={type === tab ? { backgroundColor: '#000', color: '#fff' } : {}} key={tab} onClick={() => setType(tab)}>{tab}</button>
            ))}
            <br />
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>

            {showBtnTop && <button style={{ position: 'fixed', bottom: '50px', right: '80px' }}>To Top</button>}
        </>
    )
}