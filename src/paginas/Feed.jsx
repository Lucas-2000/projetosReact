import { Container, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PostsCard from '../componentes/PostsCard'
import Masonry from 'react-masonry-css'

const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <Container>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {posts.map(post => (
                    <div key={post.id}>
                        <PostsCard post={post} />
                    </div>
                ))}
            </Masonry>
        </Container>
    )
}

export default Feed
