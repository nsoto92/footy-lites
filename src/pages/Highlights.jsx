import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Typography, Card, CardHeader, CardMedia } from '@material-ui/core'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { StateContext } from '../State';



const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            width: '100%',
            marginBottom: '150px'
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '25px',
            margin: 'auto',
            width: '85%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginBottom: '150px'
        },

        [theme.breakpoints.up('md')]: {
            marginTop: '25px',
            margin: 'auto',
            width: '85%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginBottom: '100px'
        },

        [theme.breakpoints.up('lg')]: {
            margin: 'auto',
            marginTop: '25px',
            width: '85%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            marginBottom: '100px'
        },

    },

    card: {
        margin: '15px',
        maxWidth: '350px',
        padding: '5px',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        overflow: 'visible',
        transition: '0.4s',
        '&:hover': {
            transform: 'translateY(-2px)',
            '& $shadow': {
                bottom: '-1.5rem',
            },
            '& $shadow2': {
                bottom: '-2.5rem',
            },
        },

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    title: {
        textAlign: 'center',
        marginTop: '25px'
    },
    icon: {
        fontSize: '32px'
    },

    divider1: {
        margin: 'auto',
        width: '275px',
        marginTop: '5px',
        marginBottom: '15px',
        border: '1px solid #424242'
    }

}));



function Highlights() {
    const { data } = useContext(StateContext)
    const classes = useStyles()

    const latest = data.slice(0, 12)
    return (
        <>
            <Typography className={classes.title} variant="h1">
                <SportsSoccerIcon /><SportsSoccerIcon className={classes.icon} />
                  Footy Lites
                  <SportsSoccerIcon className={classes.icon} /><SportsSoccerIcon />
            </Typography>
            <div className={classes.divider1}></div>
            <Typography variant="h2">Latest Highlights: </Typography>
            <hr style={{ color: '#424242' }} />
            <div className={classes.root}>
                {latest.map(v => {
                    return (

                        <Card className={classes.card}>
                            <Link to={`/${v.title}`}>
                                <CardMedia
                                    className={classes.media}
                                    image={v.thumbnail}
                                    title={v.title}
                                />
                            </Link>
                            <CardHeader
                                className={classes.header}
                                title={v.title}
                                subheader={v.competition.name} />
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default Highlights