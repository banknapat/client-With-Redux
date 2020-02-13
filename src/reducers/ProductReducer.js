import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from '../actions/types';
// ตัวรับ
// function ธรรมดา ที่รับ ค่า stateเดิมที่อยู่ใน store และ action
export default function (state = [], action) {
    switch (action.type) {
        case PRODUCTS_FETCH:
        case PRODUCT_FETCH:
            // ค่า ใน payload
            return action.payload;
        case PRODUCT_CREATE:
            return { saved: true, msg: "บันทึกสินค้าเรียบร้อยค่ะ" };
        case PRODUCT_UPDATE:
            return { ...state, saved: true, msg: "บันทึกสินค้าเรียบร้อยค่ะ" };
        default:
            // return ค่า satae เก่า
            return state;
    }
}