import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        borderBottom: `3px solid ${theme.palette.primary.main}`,
    },
    button: {
        // marginRight: '43px',
        fontSize: '18px',
        margin: '0px 25px',
    },
    buttonMob: {
        fontSize: '18px',
    },
}))

function NavBtn(props) {
    const classes = useStyles()
    const { btnText, href } = props
    return (
        <Button variant="text" href={href}>
            <Typography
                variant="button"
                className={`${classes.button} ${window.location.pathname === href && classes.root
                    }`}
            >
                {btnText}
            </Typography>
        </Button>
    )
}

function NavBtnMob(props) {
    const classes = useStyles()
    const { btnText, href } = props
    return (
        <Button variant="text" href={href}>
            <Typography
                variant="button"
                className={`${classes.buttonMob} ${window.location.pathname === href && classes.root
                    }`}
            >
                {btnText}
            </Typography>
        </Button>
    )
}

export { NavBtn, NavBtnMob }