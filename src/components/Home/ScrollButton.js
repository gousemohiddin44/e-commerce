import {useState} from 'react';
import {Button } from '@material-ui/core';
import {ArrowUpward} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    btn:{
        position:'sticky',
        bottom:'0',
        left:'95%',
        backgroundColor:'initial',
        width:'32px',
        height:'55px',
        color:'red',
        borderRadius:'55%',
        '&:hover':{
            backgroundColor:'red',
            color:'white'
        }
    }
})

function ScrollButton(){

   const classes = useStyles(); 

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
      setVisible(true)
  };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

      
    window.addEventListener('scroll', toggleVisible);

    return (
        <Button className={classes.btn}>
         <ArrowUpward onClick={scrollToTop} 
         style={{display: visible ? 'inline' : 'none'}} />
        </Button>
      );
};

export default ScrollButton;