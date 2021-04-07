import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles, Typography, Card } from '@material-ui/core'
import Iframe from 'react-iframe'

import { StateContext } from '../State';

const useStyles = makeStyles((theme) => ({
    '&html, body': {
        height: '100%'
    },
    root: {
        height: '100%'

    },

    card: {
        margin: 'auto',
        width: '480px',
        height: '430px',
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
    title: {
        textAlign: 'center',
        marginTop: '25px',
        marginBottom: '25px'
    },

    divider1: {
        margin: 'auto',
        width: '275px',
        marginTop: '5px',
        marginBottom: '15px',
        border: '1px solid #424242'
    },

    video: {
        margin: 'auto'
    }

}));

export default function Video() {
    const classes = useStyles()
    const { sides } = useParams()
    const { data, getEmbed } = useContext(StateContext)
    const [current, setCurrent] = useState({})

    const getCurrent = () => {
        setCurrent(
            data.find(r => r.title === sides))
    }

    useEffect(() => {
        getCurrent()
    }, [current])

    console.log(current)
    return (
        <div className={classes.root}>
            {(current) ?
                <>
                    <Typography className={classes.title} variant="h1">
                        {/* {current.side1.name} v. {current.side2.name} Highlights */}
                    </Typography>
                    <div className={classes.divider1}></div>
                    <Card className={classes.card}>
                        <Iframe
                            url={(current.embed) ? getEmbed(current.embed) : null}
                            width="450px"
                            height="400px"
                            className={classes.video}
                        />
                    </Card>
                </>
                :
                <h1>Loading</h1>}
        </div>
    )
}
