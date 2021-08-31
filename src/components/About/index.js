import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import pickup from '../../assests/pickup.jpg';

const useStyles = makeStyles({
    aboutDiv:{
        margin:'2% 4%'
    },
    aboutImg:{
        float:'left',
        width:'50%'
    },
    aboutContent:{
        float:'right',
        width:'50%'
    },
    aboutH2:{
        color:'#FE9898'
    },
    aboutP:{
        fontSize:'1.2rem',
        lineHeight:'1.5'
    },
    coreValues:{
        clear:'both',
        paddingTop:'3%'
    }
})

function About(){

    const classes = useStyles();

    return(
        <div className={classes.aboutDiv} >
        <div className={classes.aboutImg}>
            <img src={pickup} alt="pickup" />
        </div>
        <div className={classes.aboutContent}>
            <h1 style={{color:'#FD6F96'}}>About PickUp</h1>
            <p className={classes.aboutP}>PickUp is a new world e-commerce site to pick your favorite products at amazing discounts from within your neighbourhood. <br /> We connect close-by buyer and seller within neighbourhood. <br /> PickUp has 5 step checkup so you can buy only the Best products.</p>
        </div>
        <div className={classes.coreValues}>
            <h2 style={{color:'#FD6F96'}} >Our core Values</h2>
            <Grid container spacing={2}>
                <Grid item sm={4}>
                    <h2 className={classes.aboutH2}>Transparency</h2>
                    <p className={classes.aboutP}>We make sure all of our process is visible to the customer. Though we keep the seller details private all other process and product details, transportation fee and fares are open to view by buyer</p>
                </Grid>
                <Grid item sm={4}>
                    <h2 className={classes.aboutH2}>Quality</h2>
                    <p className={classes.aboutP}>We make sure all of our process is visible to the customer. Though we keep the seller details private all other process and product details, transportation fee and fares are open to view by buyer</p>
                </Grid>
                <Grid item sm={4}>
                    <h2 className={classes.aboutH2}>Customer Satisfaction</h2>
                    <p className={classes.aboutP}>We make sure all of our process is visible to the customer. Though we keep the seller details private all other process and product details, transportation fee and fares are open to view by buyer</p>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}

export default About;