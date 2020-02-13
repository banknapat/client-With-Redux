import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form';
// import reducer ที่จะรวม
import ProductReducer from './ProductReducer';
import OrderReducer from './OrderReducer';

// รวม reducers เพื่อนำไปให้ตัวอื่นใช้
const rootReducer = combineReducers({
    orders: OrderReducer,
    products: ProductReducer,
    form: reduxForm
})
// เมื่อมีค่า state ใน store เปลี่ยน จะไปเรียกให้ component render ใหม่
export default rootReducer;