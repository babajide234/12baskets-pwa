import React, { useEffect} from 'react'
import { motion } from 'framer-motion'
import { ProductCard, ProductCards, RecommendProductCard, SearchProductCards } from '../components/Cards/Cards'
import { Carousel } from '../components/Carousal/Carousal'
import { SearchInput } from '../components/Inputs'
import { Tab, TabPanel } from '../components/Tab/Tab'
import useProductStore from '../store/productSlice'
import useUserStore from '../store/userSlice'
import useFetch from '../api/useFetch'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../components/Modal/Modal'
import searchStore from '../store/searchSlice'
import { Link } from 'react-router-dom'

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
      
        
        if (filtered.length > 0) {
          return filtered.map((product) => (
            <ProductCard src={product.main_photo} title={product.name} price={`${product.amount} `} id={product.id} />
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
            className="min:h-full w-full pb-32"
        >
          <div className=" px-5">
            <h1 className=" text-xl leading-10 font-bold mb-5">What do you want to eat today?</h1>
          </div>
          <div className="flex px-5 mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex">
              <div className=" w-[280px] h-[120px] bg-slate-200 rounded-lg mr-4">2</div>
              <div className=" w-[280px] h-[120px] bg-slate-200 rounded-lg mr-4">2</div>
              <div className=" w-[280px] h-[120px] bg-slate-200 rounded-lg mr-4">2</div>
            </div>
          </div>
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
          <div className="flex justify-between mt-10 px-5">
            <h2 className=" text-base font-bold">Recomendation</h2>
            <Link className=' text-primary text-sm font-semibold'>Show All</Link>
          </div>
          <div className="flex px-5 mx-auto overflow-x-auto scrollbar-hide mt-5">
            <div className="flex">
              <RecommendProductCard />
              <RecommendProductCard />
            </div>
          </div>
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