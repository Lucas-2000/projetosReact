import { AppBar, Drawer, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlineOutlined, EqualizerOutlined, Facebook, FavoriteBorderOutlined, InfoOutlined, Instagram, LinkedIn, LocalHospitalOutlined, MailOutlineOutlined, PhotoLibraryOutlined, SubjectOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { useHistory, useLocation } from 'react-router'

const drawerWidth = 240

const useStyles = makeStyles((tema) => {
    return {
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: tema.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: tema.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        info: {
            flexGrow: 1
        },
        icons: {
            marginLeft: tema.spacing(2),
            color: 'black'
        },
        toolbar: tema.mixins.toolbar
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: "Posts",
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: "Criar posts",
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/criar'
        },
        {
            text: "Campanha",
            icon: <FavoriteBorderOutlined color="secondary" />,
            path: '/campanha'
        },
        {
            text: "Dados",
            icon: <EqualizerOutlined color="secondary" />,
            path: '/dados'
        },
        {
            text: "Doenças",
            icon: <LocalHospitalOutlined color="secondary" />,
            path: '/doencas'
        },
        {
            text: "Galeria",
            icon: <PhotoLibraryOutlined color="secondary" />,
            path: '/galeria'
        },
        {
            text: "Contato",
            icon: <MailOutlineOutlined color="secondary" />,
            path: '/contato'
        }
    ]

    return (
        <div className={classes.root}>
            { /* app bar */}
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.info}>
                        Informativo sobre o novembro azul
                    </Typography>
                    <Typography>
                        Redes Sociais
                    </Typography>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <Instagram className={classes.icons} />
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank">
                        <Facebook className={classes.icons} />
                    </Link>
                    <Link href="https://br.linkedin.com/" target="_blank">
                        <LinkedIn className={classes.icons} />
                    </Link>
                </Toolbar>
            </AppBar>

            { /* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Novembro Azul
                    </Typography>
                </div>

                { /* List / Links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>

        </div>
    )
}

export default Layout
