import React from 'react';

export const images = require.context('../logos', true);
export const imageList = images.keys().map(image => images(image));

