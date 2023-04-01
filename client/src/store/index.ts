import {configureStore} from '@reduxjs/toolkit';

import modal from './modal';

const store = configureStore({
    reducer: {
        modal
    }
});

export default store;