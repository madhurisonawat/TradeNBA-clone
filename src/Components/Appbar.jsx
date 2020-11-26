import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    },
    app:{
        backgroundColor: "#0c2340"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginLeft:"30%",
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
     
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    typo: {
        marginLeft: "2%", 
    },
    typo1: {
        marginRight: "20%" ,
        marginLeft: "3%",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
    },
    link1: {
        textDecoration: "none",
        color: "#fff",
        marginLeft:"2%"
    },
    btn: {
        color: "#fff",
        marginLeft: "2%",
        outline: " 1px solid #fff"
        
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Appbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.app}position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    
                       <img src="././resource/orange.png" alt="logo"/>
    
                    <Typography  variant="h6" noWrap>
                        TradeNBA
          </Typography>
                    <Typography className={classes.typo} variant="h6" noWrap>
                        <Link className={classes.link}to="/" >Teams</Link>
          </Typography>
                    <Typography className={classes.typo} variant="h6" noWrap>
                        <Link className={classes.link}to="/" >Trade Machine</Link>
          </Typography>
                    <Typography className={classes.typo} variant="h6" noWrap>
                        <Link className={classes.link}to="/" >Trades</Link>
          </Typography>
                    <Typography className={classes.typo} variant="h6" noWrap>
                        <Link className={classes.link}to="/" >Draft <ExpandMoreIcon/></Link>
                    </Typography>
                    <Typography className={classes.typo1} variant="h6" noWrap>
                        <Link className={classes.link}to="/" >Lists <ExpandMoreIcon /></Link>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Typography className={classes.btn} variant="h6" noWrap>
                        <Button className={classes.btn} variant="outlined">Join</Button>
                    </Typography>
                    <Typography className={classes.link1} variant="h6" noWrap>
                        <Link className={classes.link} to="/" >LOGIN</Link>
                    </Typography>
                    <Typography className={classes.link1} variant="h6" noWrap>
                        <MoreVertIcon />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}