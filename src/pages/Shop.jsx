import React, { useEffect} from 'react'
import { motion } from 'framer-motion'
import { ProductCards, SearchProductCards } from '../components/Cards/Cards'
import { Carousel } from '../components/Carousal/Carousal'
import { SearchInput } from '../components/Inputs'
import { Tab, TabPanel } from '../components/Tab/Tab'
import useProductStore from '../store/productSlice'
import useUserStore from '../store/userSlice'
import useFetch from '../api/useFetch'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../components/Modal/Modal'
import searchStore from '../store/searchSlice'

const Shop = () => {
    const token = useUserStore(state => state.token)
    const getProducts = useProductStore(state => state.getProducts)
    const getCat = useProductStore(state => state.getCat)
    // const products = useProductStore(state => state.products)
    const searchModal = searchStore(state => state.searchModal)
    const changeSearchModal = searchStore(state => state.changeSearchModal)
    const searchResult = searchStore(state => state.searchResult)
    
    const { data: categories  , loading, error} = useFetch('misc/category');
    const { data: products  , loading: productLoad, error: productError} = useFetch('store/products');
    

    const filterProductsByCategory = (categoryName) => {
        if (!products) {
          return <div>Loading...</div>;
        }
      
        const filtered = products.filter((product) => product.category_name === categoryName);
      
        console.log("filtered By Category", filtered);
        
        if (filtered.length > 0) {
          return filtered.map((product) => (
            <ProductCards src={product.main_photo} title={product.name} price={`N ${product.amount} `} id={product.id} />
          ));
        } else {
          return (
            <div className="w-full h-32 flex justify-center items-center mx-auto">
              <h2 className="">No Products In this Category</h2>
            </div>
          );
        }
    };
      
    const handleModalClose = ()=>{
      changeSearchModal(!searchModal);
    }

  return (
   <>
        <motion.div 
            className=" pt-20 h-full"
        >
            <h1 className=" text-2xl leading-10 font-bold mb-5 w-5 ml-10">12Baskets Menu</h1>
            <SearchInput/>

            <Tab>
                {
                    categories ? (
                        categories.map((item, index) => (
                            <TabPanel title={item.category_name} key={index}>
                                { filterProductsByCategory(item.category_name) }
                            </TabPanel>
                        ))
                      
                    ): (
                        <Skeleton/>
                    )
                }
            </Tab>
        </motion.div>
        <Modal title="Search Result" open={searchModal} close={handleModalClose}>
          <div className=" w-full grid grid-cols-2 pt-10 gap-y-16">
                {
                  searchResult && searchResult.map((product)=>(
                    <SearchProductCards src={product.main_photo} title={product.name} price={`N ${product.amount} `} id={product.id} />
                  ))
                }
          </div>
        </Modal>
   </>
  )
}

export default Shop