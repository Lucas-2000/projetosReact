import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import { blue, green, pink, red, yellow } from '@material-ui/core/colors'
import { DeleteOutline, MoreVert, ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (post) => {
            if (post.categoria == 'doenças') {
                return red[700]
            }
            if (post.categoria == 'dicas') {
                return green[500]
            }
            if (post.categoria == 'prevenção') {
                return blue[500]
            } 
            return pink[500]
        }
    }
})

const PostsCard = ({ post }) => {
    const classes = useStyles(post)

    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {post.categoria[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <ThumbUpAlt color="secondary" />
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
