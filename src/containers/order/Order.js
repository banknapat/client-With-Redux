import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { ordersFetch, orderDelete } from '../../actions';

class Order extends Component {
    constructor(props) {
        super(props);
    }

    // โหลดข้อมูล มาจาก API
    componentDidMount() {
        this.props.ordersFetch();
    }
    // ลบ ข้อมูล
    delOrder(order) {
        this.props.orderDelete(order.id);
    }
    //  method แสดงสินค้า
    showOrders() {
        // เช็คก่อนว่ามี ข้อมูลหรือไม่ แล้วนำไป map เพื่อจัดรูปแบบข้อมูล
        return this.props.orders && this.props.orders.map(order => {
            // สร้างตัวแปล date เพื่อแปลงค่า วันที่ใน orderedDate ที่เราเก็บไว้
            const date = new Date(order.orderedDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        {/* ปุ่ม เรียก function ลบ ข้อมูล โดยส่ง order เข้าไปให้ */}
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>x</button>
                    </p>
                    {/* แสดงวันที่เป็น String เรียก function ให้ทำงาน ต้องมี () */}
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {/* ใช้ .map เพื่อ return รูปแบบ JSX ไปแสดง */}
                        {order.orders && order.orders.map(record => {
                            return (
                                <li key={record.product.id}>
                                    {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                </li>
                            )
                        })}
                    </ul>
                    {/* สรุปยอดรวม */}
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                        {/* เรียก function มาแสดงสินค้า */}
                        {this.showOrders()}
                    </div>
                </div>
                <Footer company="BankDev" email="bankdev@mail.com" />
            </div>
        )
    }
}
// function ที่ใช้ map ค่าใน store ส่งให้ porps เอาไปใช้
function mapStateToProps({ orders }) {
    // ค่าที่ส่ง
    return { orders };
}
// connect ใส่ค่าไป 2 ค่า 1. function ที่ดึงค่า state จาก store 2. actions ที่ไปให้ porps ใช้ เช่น  this.props.ordersFetch();
export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order);