import React from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';

//core
import { Hidden, IconButton } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import logo from "/src/assets/logos/LogoDesignITUS.svg";
import tabItemStyle from "/src/assets/components/tabItemStyle";
import { navBarStyle } from "/src/assets/components/glassmorphismStyle";
import { primaryColor, whiteColor } from "/src/assets/globalStyle";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        padding: 0,
        margin: 0,
        width: "100%",
        zIndex: 10000,
        top: 0,
        "& .MuiIconButton-root": {
            padding: 0,
        },
        "& .MuiIconButton-edgeEnd": {
            margin: 0
        }
    },
    navBarContainer: {
        ...navBarStyle,
        [theme.breakpoints.up("sm")]: {
            padding: "8px 40px",
        },
        [theme.breakpoints.up("md")]: {
            padding: "16px 120px",
        },
    },
    logo: {
        height: "40px",
        [theme.breakpoints.down("sm")]: {
            height: "28px"
        },
    },
    listItems: {
        display: "flex",
        alignItems: "center"
    },
    items: {
        ...tabItemStyle.default,
        "&:hover": {
            color: "#7B96E7",
        },
    },
    itemsCurrent: {
        ...tabItemStyle.current,
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            background: "none",
            color: primaryColor,
            marginLeft: 0
        },
    }, 
    hide: {
        display: 'none',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    linkDrawer: {
        textDecoration: "none",
        color: whiteColor,
        display: 'flex'
    }
}));

export default function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    // Handle drawer
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const navItems = [
        {
            text: "Tổng quan",
            link: "/events/outr-space-7",
        },
        {
            text: "Chủ đề",
            link: "/events/outr-space-7/topic",
        },
        {
            text: "Quy cách tham gia",
            link: "/events/outr-space-7/how-to-join",
        },
        {
            text: "Trở về trang chủ",
            link: '/'
        }
    ]
    return (
        <div className={classes.root}>
            <div className={classes.navBarContainer}>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" id="logoImg" className={classes.logo} />
                    </Link>
                </div>
                <Hidden only={['xs', 'sm']}>
                    <div className={classes.listItems}>
                        {navItems.map((item) => (
                            <div>
                                {item.link === props.current ?
                                    <Link to={item.link} className={classes.itemsCurrent}>
                                        {item.text}
                                    </Link>
                                    :
                                    <Link to={item.link} className={classes.items}>
                                        {item.text}
                                    </Link>
                                }
                            </div>
                        ))}
                    </div>
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                    <IconButton
                        aria-label="open drawer"
                        edge='end'
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List>
                    {navItems.map((item) => (
                        <ListItem button key={item.text}>
                            {item.link === props.current ?
                                <Link to={item.link} className={classes.itemsCurrent}>
                                    {item.text}
                                </Link>
                                :
                                <Link to={item.link} className={classes.items}>
                                    {item.text}
                                </Link>
                            }
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}