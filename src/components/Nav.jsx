import React from 'react'
import { AppBar, makeStyles, Toolbar, ButtonGroup, Link, Hidden, IconButton, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

import { NavBtn, NavBtnMob } from './NavBtn'
import Logo from './Logo'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        background: theme.palette.background.dark
    },
    drawer: {
        background: theme.palette.background.default
    },

    nav: {
        background: theme.palette.background.dark
    },

    icon: {
        position: 'absolute',
        right: '6px',
        zIndex: 1
    },

    bg: {
        margin: 'auto'
    }
}));

function Nav() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* Desktop Nav */}
            <Hidden mdDown>
                <AppBar className={classes.nav}>
                    <Toolbar>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <Logo />
                        </Link>
                        <ButtonGroup
                            aria-label="text primary button group"
                            className={classes.bg}
                        >
                            <NavBtn btnText="Home" href="/" />
                            <NavBtn btnText="Competitions" href="/comps" />
                            {/* <NavBtn btnText="Services" href="/services" /> */}

                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </Hidden>

            {/* Mobile Nav */}
            <Hidden lgUp>
                <div className={classes.root}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Logo />
                    </Link>
                    <IconButton
                        className={classes.icon}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="top"
                        open={open}
                        classes={{
                            paper: classes.drawer
                        }}
                    >
                        <IconButton
                            className={classes.icon}
                            color='inherit'
                            onClick={handleDrawerClose}
                        >
                            <ClearIcon />
                        </IconButton>
                        <Toolbar />
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical outlined primary button group"
                        >
                            {/* <div className={classes.logoMobile}>
                                <Logo />
                            </div> */}
                            <NavBtnMob btnText="Home" href="/" />
                            <NavBtnMob btnText="Competitions" href="/comps" />
                            {/* <NavBtnMob btnText="Services" href="/services" /> */}
                        </ButtonGroup>
                    </Drawer>

                </div>
            </Hidden>
        </div>

    )
}

export default Nav