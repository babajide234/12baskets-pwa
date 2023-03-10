import React, { useState } from 'react';

import AliceCarousel from 'react-alice-carousel';

export const Carousel = ({ children }) => {


    return (
        <>
            {/* // <AliceCarousel    
            //     mouseTracking 
            //     infinite
            //     items={children}
            //     autoHeight={true}
            //     paddingLeft={70}
            //     paddingRight={70}
            //     disableButtonsControls={true}
            //     disableDotsControls={true}
            // /> */}
            <div className=" flex overflow-x-auto">
                {children}
            </div>
        </>
    );
  };