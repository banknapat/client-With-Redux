import axios from 'axios';
import { ORDERS_FETCH } from './types';

// ตัวส่ง action
export const ordersFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/orders").then(
            res => {
                // ส่ง type คือ ประเภท action และค่าที่ดึงได้ใน pyload ส่งไปให้ ruducer 
                dispatch({ type: ORDERS_FETCH, payload: res.data });
            }
        )
    }
}

export const orderDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/orders/" + id).then(res => {
            axios.get("http://localhost:3001/orders").then(
                res => {
                    dispatch({ type: ORDERS_FETCH, payload: res.data });
                });
        });
    }
}
