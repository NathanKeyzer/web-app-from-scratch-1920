import render from './render.js';
import routie from './routie.js';

// Import pages
import home from '../views/home.js'
import top from '../views/top.js'
import detail from '../views/detail.js'

routie({
    '': home,
    'top': top,
    'detail/:artist/:track': detail
});

export default routie;
