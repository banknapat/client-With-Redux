import React, { Component } from 'react'
import { productCreate, productUpdate, productFetch } from '../../actions';
import Header from '../../components/Header';
import ProductForm from '../../components/product/ProductForm';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';

export class ProductEdit extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            // เรียกสินค้ามา แสดง โดยส่ง id ของสินค้าไปให้
            this.props.productFetch(this.props.match.params.id);
        }
    }
    render() {
        // match เป็นการ ดึงค่าต่างๆ เพื่อเอามาเช็ค url
        // ดึงค่ามาจาก porps
        const { formValues, match, products, productCreate, productUpdate } = this.props;
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                    {/* แสดง form เพิ่มสินค้า ค้นหาว่ามี add ใน path หรือไม่ */}
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>เพิ่มสินค้า</h2>
                            {/* แสดงข้อความ บันทึกรายการแล้ว */}
                            {products.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productCreate(formValues)} />
                        </div>
                    )}
                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            {/* แสดง form แก้ไขสินค้า ค้นหาว่ามี edit ใน path หรือไม่ */}
                            <h2>แก้ไขสินค้า</h2>
                            {/* แสดงข้อความ บันทึกรายการแล้ว */}
                            {products.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {products.msg}
                                </div>
                            )}
                            <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
                        </div>
                    )}
                </div>
                <Footer company="BankDev" email="bankdev@mail.com" />
            </div>
        )
    }
}

// รับค่า form และ products มาจาก store
function mapStateToProps({ form, products }) {
    // ดึงค่าจาก form จะได้ค่า formValues และค่า products
    return { formValues: form.productForm ? form.productForm.values : null, products };
}
export default connect(mapStateToProps, { productCreate, productUpdate, productFetch })(ProductEdit);
