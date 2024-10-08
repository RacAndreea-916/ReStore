import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";


const midLink =[
    {title: 'catalog', path:'/catalog'},
    {title: 'about', path:'/about'},
    {title: 'contact', path:'/contact'},

]

const rightLink =[
    {title: 'login', path:'/login'},
    {title: 'register', path:'/register'}

]


interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

const navStyles = {color:'inherit',
    typography:'h6',
     textDecoration:'none',
    '&:hover':{
        color: 'grey.500'
    },
    '&.active':{
        color:'text.secondary'
        },
}

export default function Header({darkMode, handleThemeChange}:Props){
    const {basket} = useAppSelector(state=> state.basket);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
    const {user} = useAppSelector(state=>state.account);
    return (
        <>
           <AppBar position="static" sx={{mb:4}}>
                <Toolbar sx={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} to='/' sx={navStyles}>
                        RE-STORE
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange}></Switch>
                </Box>


                    
                    <List sx={{display: 'flex'}}>
                        {midLink.map(({title, path})=>(
                            <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                                >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                        <Box display='flex' alignItems='center'>
                        <IconButton component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{mr: 2}}>
                            <Badge badgeContent={itemCount} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                        {user ? (
                            <SignedInMenu />
                        )
                        :(
                        <List sx={{display: 'flex'}}>
                        {rightLink.map(({title, path})=>(
                            <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                    )}

                    
                        </Box>
                        
                </Toolbar>
           </AppBar>
        </>
    )
}