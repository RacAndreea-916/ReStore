import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";
import {  useEffect } from "react";

export default function Catalog() {
 const products = useAppSelector(productSelectors.selectAll);
 const dispatch = useAppDispatch();
 const {productsLoaded} = useAppSelector(state=>state.catalog)
  

  useEffect(() => {
   if(!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  if (status.includes('pending'))
    return <LoadingComponent message="Loading products"></LoadingComponent>;
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}
