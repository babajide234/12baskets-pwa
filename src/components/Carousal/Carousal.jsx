import React, { useState } from 'react';

import AliceCarousel from 'react-alice-carousel';

export const Carousel = ({ children }) => {


    return (
        <AliceCarousel    
            mouseTracking 
            infinite
            items={children}
            autoHeight={true}
            paddingLeft={20}
            paddingRight={20}
            disableButtonsControls={true}
            disableDotsControls={true}
        />
    );
  };