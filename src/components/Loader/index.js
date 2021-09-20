import Loader from "react-loader-spinner";

function LoaderSpinner(){
    return (
        <Loader
        style={{position:'absolute',top:'47%',left:'47%'}}
        type="Circles"
        color="#FF5C58" 
        height={60} 
        width={60}
        timeout={3000} //3 secs
      />
    )
};

export default LoaderSpinner;