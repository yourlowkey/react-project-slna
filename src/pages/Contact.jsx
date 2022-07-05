import React from 'react'
const Contact = () => {
    return (
        <div className="container contact">
            <div className="row">
                <div className="col-md-8 col-12 mx-auto">
                    <div className="card shadow-lg border-0 p-4">
                        <h1 className="text-center bg-white text-dark display-4 d-inline-block">GỬI PHẢN HỒI</h1>
                        <div className="form-group my-5">
                            <div className="row">
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="text" className="form-control-lg" placeholder="Nhập tên vào đây" required />
                                </div>
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="text" className="form-control-lg" placeholder="Nhập họ vào đây" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <div className="row">
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="email" className="form-control-lg" placeholder="Địa chỉ Email" required />
                                </div>
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="tel" className="form-control-lg" placeholder="Số điện thoại" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-11">
                            <textarea class="form-control" id="descrition" placeholder="Nhập nội dung vào đây!"></textarea>                            
                            </div>
                        </div>
                        <div className="mt-5 col-md-6 col-12 mx-auto">
                            <button className="btn btn-outline-dark btn-lg btn-block">Gửi thông tin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact