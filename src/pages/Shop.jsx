import { motion } from 'framer-motion'
import React from 'react'
import { ProductCards } from '../components/Cards/Cards'
import { Carousel } from '../components/Carousal/Carousal'
import { SearchInput } from '../components/Inputs'
import { Tab, TabPanel } from '../components/Tab/Tab'

const Shop = () => {
  return (
   <>
        <motion.div 
            className=" pt-20 h-full"
        >
            <h1 className=" text-2xl leading-10 font-bold mb-5 w-5 ml-10">12Baskets Menu</h1>
            <SearchInput/>
            <Tab>
                <TabPanel title="Platters">
                    <Carousel autoPlay={false} autoPlayInterval={3000}>
                        <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                        <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                        <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                    </Carousel>
                </TabPanel>
                <TabPanel title="Pastries">
                    <Carousel autoPlay={false} autoPlayInterval={3000}>
                        <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                        <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                        <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                    </Carousel>
                </TabPanel>
                <TabPanel title="Sides">
                <p>Content for Tab 2 goes here.</p>
                </TabPanel>
                <TabPanel title="Traditional">
                <p>Content for Tab 3 goes here.</p>
                </TabPanel>
                <TabPanel title="Drinks">
                <p>Content for Tab 3 goes here.</p>
                </TabPanel>
                <TabPanel title="Packs">
                <p>Content for Tab 3 goes here.</p>
                </TabPanel>
            </Tab>
        </motion.div>
   </>
  )
}

export default Shop