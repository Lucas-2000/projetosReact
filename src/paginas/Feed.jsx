import { Container, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PostsCard from '../componentes/PostsCard'

const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <Container>
            <Grid container spacing={3} >
                {posts.map(post => (
                    <Grid key={post.id} xs={12} md={6} lg={4}>
                    <PostsCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Feed
