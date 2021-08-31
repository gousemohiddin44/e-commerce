import { AppBar, Badge, Button, InputBase, Toolbar, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Search,ShoppingCart} from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchItem } from '../../redux/actions';

const useStyles = makeStyles({
    navbar:{
        width:'100%',
        backgroundColor:'#FE9898',
        margin:'0',

    },
    title:{
        color:'red',
        fontFamily: 'Rampart One'
    },
    search:{
        border:'1px solid white',
        borderRadius:'5px',
        display:'flex',
        justifyContent:'space-between',
        margin:'1.6% 0 1% 2%',
        padding:'2px',
        width:'16%'
    },
    btngroup:{
        marginLeft:'45%'
    },
    btn:{
        color:'#fff',
        fontSize:'1.2rem',
        marginRight:'20px',
        fontWeight:'500',
        '&:hover':{
            background:'none',
            color:'black'
        }
    }
})

function Navbar(){

    const classes = useStyles();

    const dispatch = useDispatch()

    const itemsInCart = useSelector((state)=>state.addItemToCart.item);

    function handleSearch(event){
        dispatch(searchItem(event.target.value))
    }


    return (
        <AppBar position='static' className={classes.navbar}>
            <Toolbar>
                    <Typography variant="h4" className={classes.title} >
                        PickUp
                    </Typography>
                <div className={classes.search}>
                    <div>
                        <Search fontSize='large'/>
                    </div>
                    <InputBase placeholder='Search...' style={{color:'white',fontSize:'17px'}} onChange={(e)=>{handleSearch(e)}} />
                </div>
                <div className={classes.btngroup}>
                    <Link to="/" style={{textDecoration:'none'}}><Button color="inherit" className={classes.btn}>Home</Button></Link>
                    <Link to="/about" style={{textDecoration:'none'}}><Button color="inherit" className={classes.btn}>About</Button></Link>
                    <Link to="/contact" style={{textDecoration:'none'}}><Button color="inherit" className={classes.btn}>Contact</Button></Link>
                    <Badge badgeContent={itemsInCart} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;