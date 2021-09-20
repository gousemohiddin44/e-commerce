import {Card, CardActionArea, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Favorite, ShoppingCart } from '@material-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {addItem, getItem} from '../../redux/actions';

const useStyles = makeStyles({
    card:{
        width:'21%',
        margin:'1% 1%',
        border:'1px solid white',
        borderRadius:'15px',
        boxShadow:'10px 5px 5px lightgrey',
        '&:hover':{
            color:'initial',
        }
    },
    img:{
        width:'100%',
        height:'300px',
        objectFit:'cover',
    },
    oldprice:{
        color:'grey',
        fontSize:'14px',
        marginLeft:'5px',
        textDecoration:'line-through'
    },
    discount:{
        margin:'5px',
        color:'green',
        fontSize:'14px',
        fontWeight:'bold'
    }
})

function CardItem({product}){

    // console.log(product);

    const classes = useStyles();
    const [fav,setFav] = useState(false);
    const [cartClick,setCartClick] = useState(false);

    const dispatch = useDispatch();

    const discount = Math.floor((Math.random()*200)/2);
    const oldPrice = Math.floor(product.price+(product.price * (discount/100)));

    function handleFav(){
        setFav(!fav);
    }

    function handleCart(){
        dispatch(addItem(1));
        setCartClick(!cartClick);
    }

    function handleGetProductId(id){
        dispatch(getItem(id))
    }

    return(
        <Card className={classes.card}>
           <CardActionArea onClick={()=> handleGetProductId(product.id)} >
           <Link to={`/product/${product.id}`}><img className={classes.img} src={product.image} alt="iphone" /> </Link>
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {product.category}
                    </Typography>
                    <Typography gutterBottom variant="body1" color="textPrimary" component="p">
                        {product.title.slice(0,30)+"..."}
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                        ${product.price}
                        <span className={classes.oldprice}> {oldPrice}</span>
                         <span className={classes.discount}> {discount}%</span> 
                        <Favorite style={{position:'absolute',left:'75%'}} color={fav ?'secondary':'disabled'} onClick={handleFav} />
                        <ShoppingCart style={{position:'absolute',left:'85%'}} color={cartClick ? 'seconary' :'disabled'} onClick={handleCart} />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default CardItem;