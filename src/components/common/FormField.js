import React from 'react';
// mata คือค่า error ที่ถูก return จาก validate
export default ({ input, label, type, required, meta: { error, touched } }) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input type={type} required={required} {...input} className="form-control" />
            {/* แสดงข้อความเตือน กรอบข้อมูล */}
            {error && touched &&
                <div className="mt-2 text-danger title">{error}</div>
            }
        </div>
    )
}