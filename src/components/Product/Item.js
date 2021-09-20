import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    leftDiv:{
        float:'left',
        width:'35%'
    },
    rightDiv:{
        float:'right',
        width:'60%',
        marginRight:'20px'
    },
    img:{
        marginLeft:'10%',
        marginTop:'20px',
        width:'500px',
        height:'500px'
    },
    title:{
        color:'grey'
    },
    desc:{
        lineHeight:'2',
        fontFamily:"Sans-serif"
    },
    btn:{
        margin:'0 10px 0 0',
    }
})

export default function Item({product}){
    const classes = useStyles();
    return(
        <>
            <div className={classes.leftDiv}>
                <img className={classes.img} src={product.image} alt='product' />
            </div>
            <div className={classes.rightDiv}>
                <h1>{product.category}</h1>
                <h3 className={classes.title}>{product.title}</h3>
                {product.rating && <h4>{product.rating.rate} ❤ || <span>{product.rating.count} Reviews</span></h4>}
                <hr />
                <h4 className={classes.desc}>{product.description}</h4>
                <Button className={classes.btn} variant="contained">Add To Cart</Button>
                <Button className={classes.btn} variant="outlined" style={{backgroundColor:'#DA0037',color:'white'}}>Buy Now</Button>
            </div>
        </>

    )
}