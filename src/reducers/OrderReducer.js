import { ORDERS_FETCH } from '../actions/types';
// ตัวรับ
// function ธรรมดา ที่รับ ค่า stateเดิมที่อยู่ใน store และ action
export default function (state = [], action) {
    // รับ action มาแล้วเลือกทำงาน
    switch (action.type) {
        case ORDERS_FETCH:
            // ค่า ใน payload คือข้อมูลสินค้าไปเซ็ตค่า state ใหม่ในstore
            return action.payload;
        default:
            // return ค่า satae เก่า
            return state;
    }
}