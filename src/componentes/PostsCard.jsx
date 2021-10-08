import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'
import { DeleteOutline, MoreVert, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons'
import React from 'react'

const PostsCard = ({ post }) => {
    return (
        <div>
            <Card elevation={3}>
                <CardHeader
                    action={
                        <IconButton>
                            <ThumbUpAlt />
                        </IconButton>
                    }
                    title={post.titulo}
                    subheader={post.categoria}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {post.detalhes}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="secondary">
                        Compartilhar
                    </Button>
                    <Button size="small" color="secondary">
                        Saiba mais
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default PostsCard
