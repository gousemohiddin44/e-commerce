import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import CardItem from "../Card";
import useProductsApi from "../../api/productsApi";
import ScrollButton from "./ScrollButton";

function Home(){

  const [data,error] = useProductsApi();

  const searchedItem = useSelector((state)=> state.searchItem.searchedItem);

  console.log("searchItem",searchedItem);

  console.log("res",data , error);

    return (
      <div>
        <Grid container style={{marginLeft:'2%'}}>
            {error ? "No products" : data.filter((product)=> product.category.includes(searchedItem)).map((product)=> <CardItem key={product.id} product={product} />)}
        </Grid>
        <ScrollButton />
    </div>
    )
}

export default Home;