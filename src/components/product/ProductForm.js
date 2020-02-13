import React, { Component } from 'react'
// function ที่เราจะผูก form กับ component
import { reduxForm, Field } from 'redux-form';
import FormField from '../common/FormField';
import { productFormField } from './formFields';
import { connect } from 'react-redux';
class ProductForm extends Component {
    // method ที่ return form
    renderFields(formFields) {
        // ใช้ map เพื่อไปดึงค่ามาจาก array เป็น JSX
        return formFields.map(({ label, name, type, required }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }
    render() {
        const { onProductSubmit } = this.props
        return (
            <div>
                {/* handleSubmit เป็นของตัว redux form มันจะเช็คว่ามี error หรือไม่ ถ้ามี จะแสดงที่หน้า form ถ้าไม่มี มันจะเรียก onProductSubmit */}
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFields(productFormField)}
                    <button className="btn btn-block btn-info title" type="submit">
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}
// function เช็คค่าใน form รับค่า values
function validate(values) {
    const error = {};
    productFormField.forEach(({ name, required }) => {
        // เช็คว่า มีค่าถูกกรอบ และ required หรือไม่
        if (!values[name] && required) {
            error[name] = 'กรุณากรอบข้อมูลด้วยค่ะ';
        }
    });
    return error;
}

// จะใส่ ค่าพื้นฐานให้ form
function mapStateToProps({ products }) {
    if(products && products.id) {
    //นำค่าไปเซ็ตให้ form
    return { initialValues: products };
    } else {
        return {};
    }
}

// ส่งค่า form และ  ชื่อ component ไปให้
ProductForm = reduxForm({ validate, form: "productForm" })(ProductForm);
//mapStateToProps เพื่อดึงสินค้า
export default connect(mapStateToProps)(ProductForm);
