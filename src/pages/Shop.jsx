import React from 'react'
import { ProductCards } from '../components/Cards/Cards'
import { Carousel } from '../components/Carousal/Carousal'
import { SearchInput } from '../components/Inputs'
import { Tab, TabPanel } from '../components/Tab/Tab'

const Shop = () => {
  return (
   <>
        <h1 className=" text-4xl leading-10 font-bold mb-10 w-11/12 ml-4">12Baskets Menu</h1>
        <SearchInput/>
        <Tab>
            <TabPanel title="Food">
                <Carousel autoPlay={false} autoPlayInterval={3000}>
                    <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                    <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                    <ProductCards src='https://picsum.photos/200/300' title='Veggie tomato mix' price='N1,900'/>
                </Carousel>
            </TabPanel>
            <TabPanel title="Drinks">
            <p>Content for Tab 2 goes here.</p>
            </TabPanel>
            <TabPanel title="Snacks">
            <p>Content for Tab 3 goes here.</p>
            </TabPanel>
            <TabPanel title="Sauce">
            <p>Content for Tab 3 goes here.</p>
            </TabPanel>
        </Tab>
   </>
  )
}

export default Shop