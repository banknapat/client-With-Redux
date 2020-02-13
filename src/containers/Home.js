import React, { Component } from 'react';
import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';

class Home extends Component {

    constructor(props) {
        super(props);
    }
    // เรียกใช้ เพื่อโหลดข้อมูล เข้าไปใน component
    componentDidMount() {
        // ส่ง action ไป ดึง product 
        this.props.productsFetch();
    }
    render() {
        return (
            <div>
                <Header />
                {/* ส่งก้อนข้อมูลสินค้าไปให้ Monitor */}
                <Monitor products={this.props.products} />
                {/*การส่งค่า props ไป */}
                <Footer company="BankDev" email="bankdev@mail.com" />

            </div>
        );
    }
}
// รับค่า state จาก store
function mapStateToProps({products}) {
    // ยัดค่า state ของ store ไปใว้ที props component
    return {products};
}

// connect react กับ redux ไว้ด้วยกัน
//จะมี 2 พารามิเตอร์ 
//1. function ที่จะนำค่าจาก store มาเก็บไว้ใน props ของ component
//2. action ที่เราจะใช้
export default connect(mapStateToProps, { productsFetch })(Home);
