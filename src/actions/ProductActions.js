import axios from 'axios';
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from './types';

// ตัวส่ง action เรียกสินค้าตัวเดียว
export const productFetch = id => {
    return dispatch => {
        axios.get("http://localhost:3001/products/" + id).then(
            res => {
                // ส่งค่าไปบอก reducer
                dispatch({ type: PRODUCT_FETCH, payload: res.data });
            }
        )
    }
}

// ตัวส่ง action เรียกสินค้าหลายตัว
export const productsFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/products").then(
            res => {
                // ส่งค่าไปบอก reducer
                dispatch({ type: PRODUCTS_FETCH, payload: res.data });
            }
        )
    }
}
// ลบสินค้า
export const productDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/products/" + id).then(res => {
            axios.get("http://localhost:3001/products").then(
                res => {
                    // ส่งค่าไปบอก reducer
                    dispatch({ type: PRODUCTS_FETCH, payload: res.data });
                });
        });
    }
}

// สร้างสินค้า
export const productCreate = values => {
    return dispatch => {
        // ใส่ url และ ค่าที่ต้องการเพิ่ม 
        axios.post("http://localhost:3001/products", values).then(
            res => {
                // ส่งค่าไปบอก reducer
                dispatch({ type: PRODUCT_CREATE });
            });
    }
}

// อัพเดทสินค้า 
export const productUpdate = (id, values) => {
    return dispatch => {
        // ใส่ url + id และ ค่าที่ต้องการอัพเดท
        axios.put("http://localhost:3001/products/" + id, values).then(res => {
                // ส่งค่าไปบอก reducer
                dispatch({ type: PRODUCT_UPDATE });
            });
    }
}
