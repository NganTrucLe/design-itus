import React from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';

//core
import { Hidden, IconButton, Menu, MenuItem } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fade from '@material-ui/core/Fade';

//icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import logo from "/src/assets/LogoDesignITUS.png";

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Be Vietnam Pro",
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
        padding: "16px 120px",
        background: "rgba(255, 255, 255, 0.2)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottom: "2px solid white",
        backdropFilter: "blur(5px)",
        [theme.breakpoints.down("sm")]: {
            padding: "8px 16px",
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
        display: "block",
        color: "#1A1A1A",
        textDecoration: "none",
        marginLeft: "60px",
        fontSize: "16px",
        cursor: "pointer",
        fontWeight: 600,
        "&:hover": {
            color: "#7B96E7",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            marginLeft: 0
        },
    },
    itemsCurrent: {
        display: "block",
        textDecoration: "none",
        marginLeft: "60px",
        fontSize: "16px",
        cursor: "pointer",
        color: "#ECECEC",
        background: "#7B96E7",
        padding: "8px 12px",
        borderRadius: "50px",
        fontWeight: 600,
        "&:hover": {
            color: "#ECECEC",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            background: "none",
            color: "#7B96E7",
            padding: 0,
            marginLeft: 0
        },
    },
    itemsChild: {
        marginLeft: "20px"
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
        color: 'white',
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

    // Handle menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navItems = [
        {
            text: "Trang chủ",
            link: "/",
        },
        {
            text: "Giới thiệu",
            link: "/about-us",
        },
        {
            text: "Sự kiện",
            link: "/events",
            child: [
                {
                    text: "Outr Space 7",
                    link: "/outr-space-7"
                }
            ]
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
                                    : (item.child ?
                                        <>
                                            <Link className={classes.items} onClick={handleClick}>
                                                {item.text}
                                            </Link>
                                            <Menu
                                                id="fade-menu"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={openMenu}
                                                onClose={handleClose}
                                                TransitionComponent={Fade}
                                                style={{ zIndex: 10000 }}
                                            >
                                                {item.child.map((child) => (
                                                    <Link to={`${item.link}${child.link}`}>
                                                        <MenuItem onClick={handleClose}>{child.text}</MenuItem>
                                                    </Link>
                                                ))}
                                            </Menu>
                                        </>
                                        :
                                        <Link to={item.link} className={classes.items}>
                                            {item.text}
                                        </Link>
                                    )
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
                        <>
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
                            <ListItem>
                                {item.child ?
                                    <>
                                        {item.child.map((child) => (
                                            <Link to={`${item.link}${child.link}`} className={[classes.items, classes.itemsChild].join(' ')}>
                                                {child.text}
                                            </Link>
                                        ))}
                                    </>
                                    :
                                    null
                                }
                            </ListItem>
                        </>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}