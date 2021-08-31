import {makeStyles} from '@material-ui/core/styles';
import contact from '.././../assests/contact.jpg';

const useStyles = makeStyles({
    mainDiv:{
        margin:'3% 8%',
        width:'1300px',
    },
    leftDiv:{
        float:'left',
        width:'50%',
        color:'black'
    },
    rightDiv:{
        float:'right',
        width:'35%',
        color:'black',
        marginTop:'3%',
    }
})

function Contact(){

    const classes = useStyles();

    return (
        <div className={classes.mainDiv}>
            <div className={classes.leftDiv}>
                <h2>Get In Touch</h2>
                <img style={{width:'800px',height:'400px'}} src={contact} alt="contact" />
            </div>
            <div className={classes.rightDiv}>
                <h2>Email</h2>
                <h3 style={{marginBottom:'8%'}}>services@pickup.com</h3>
                <h2>Contact</h2>
                <h3 style={{marginBottom:'8%'}}>+91 9632587410</h3>
                <h2>Address</h2>
                <h3>D.No:- 11/21-B</h3>
                <h3>HSR Layout</h3>
                <h3>Banglore, Karnataka</h3>
                <h3>
                    Pin - 500101
                </h3>
            </div>
            
        </div>
    )
};

export default Contact;