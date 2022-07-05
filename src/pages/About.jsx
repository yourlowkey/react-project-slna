import React from 'react'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function About() {
    return (
        <div className="container aboutus">
            <div className="row">
                <div className="col-md-6 col-12 my-auto">
                    <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12 my-auto">
                    <h1 className="display-4 text-center my-5">Về chúng tôi</h1>
                    <p className="lead text-justify text-center">
                        Trong hành trình phát triển với tầm nhìn chiến lược, mong muốn mang đến những sản phẩm dịch vụ chất lượng, tạo nên một thế giới dịch vụ đẳng cấp, Tập đoàn Khách sạn Mường Thanh đã mở rộng sang những lĩnh vực mới như giải trí, thể dục thể thao, vật phẩm lưu niệm... Những thương hiệu như Bò Sữa Safari Diễn Lâm (Vườn thú lớn nhất miền Bắc), VRC (Trung tâm giải trí đa chức năng), Fitness Plus (Trung tâm Finess & Yoga 5 sao), DreamKid (Khu vui chơi học tập dành cho trẻ em), Hoa Ban Gift Shop (Chuỗi cửa hàng Lưu niệm cao cấp)... đều ghi nhận thành công và phục vụ hàng ngàn khách hàng, đáp ứng nhu cầu đa dạng cho nhiều đối tượng với phong cách dịch vụ tận tâm từ trái tim.
                    </p>
                    <div className="text-center col-md-6 col-12 mx-auto">
                        <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Liên hệ</Link>
                    </div>
                </div>
            </div>
            <div className="about_company">
                <h1 className="display-4">Thông tin về khách sạn</h1>
                <div className="pt-4">
                    <p className="about_info">
                        Thắp sáng bản đồ ngành lưu trú Việt Nam, khẳng định vị thế vững chắc cho riêng mình, Tập đoàn Khách sạn Bò Sữa đã tạo được chỗ đứng trong lòng khách hàng và du khách trong và ngoài nước. Là hệ thống Khách sạn tư nhân lớn nhất tại Đông dương, Bò Sữa tự hào sở hữu gần 60 khách sạn với sức chứa hơn 12.000 phòng, tạo việc làm và môi trường phát triển cho hơn 10.000 lao động, đóng góp vào ngân sách quốc gia hàng ngàn tỷ đồng mỗi năm. Những thành quả ấn tượng đó được Bò Sữa hình thành và phát triển qua bề dày gần 30 năm kinh nghiệm, sự đồng lòng tập thể và khát vọng không ngừng hoàn thiện và phát triển kinh doanh song hành mang lại lợi ích bền vững cho đất nước và con người Việt
                    </p>
                </div>
            </div>
            <div className="testimony">
                <h1 className="display-4 mb-4">Phản hồi từ khách hàng</h1>
                <div className="row mb-5">
                    <div className="col-md-10 col-12 mx-auto">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner card border-0 shadow-lg p-4">
                                <div className="carousel-item active text-center">
                                    <div className="row">
                                        <div className="col-md-8 col-12 my-auto">
                                            <img src={require('../images/customers/customer.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                        </div>
                                        <div className="col-md-4 col-12 my-auto">
                                            <div className="text-dark">
                                                <h3 className="font-weight-bolder ">Mrs. Thanh Hằng</h3>
                                                <p>Nhân viên khách sạn nhiệt tình, chu đáo, chất lượng dịch vụ tuyệt vời, chắc chắn tôi sẽ quay lại vào hè năm sau</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item text-center">
                                    <div className="row">
                                        <div className="col-md-8 col-12 my-auto">
                                            <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                        </div>
                                        <div className="col-md-4 col-12 my-auto">
                                            <div className="text-dark">
                                                <h3 className="font-weight-bolder">Miss Yến Linh</h3>
                                                <p>Nhân viên khách sạn nhiệt tình, chu đáo, chất lượng dịch vụ tuyệt vời, chắc chắn tôi sẽ quay lại vào hè năm sau</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item text-center">
                                    <div className="row">
                                        <div className="col-md-8 col-12 my-auto">
                                            <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                        </div>
                                        <div className="col-md-4 col-12 my-auto">
                                            <div className="text-dark">
                                                <h3 className="font-weight-bolder">Mr. Nam Anh</h3>
                                                <p>Đồ ăn ngon, nhân viên khách sạn nhiệt tình, chu đáo, giá cả luôn cạnh tranh, chất lượng phòng tắm tuyệt vời!!!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item text-center">
                                    <div className="row">
                                        <div className="col-md-8 col-12 my-auto">
                                            <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                        </div>
                                        <div className="col-md-4 col-12 my-auto">
                                            <div className="text-dark">
                                                <h3 className="font-weight-bolder ">Mr. Hoàng Tuấn</h3>
                                                <p>Nhân viên khách sạn nhiệt tình, chu đáo, đồ ăn ngon, phong cảnh đẹp, chắc chắn tôi sẽ quay lại vào hè năm sau</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
                <h1 className="display-4">Nhóm thực hiện</h1>
            </div>
            <div className="row lg-4">
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Thành viên nhóm</h5>
                            <div className="card-text text-black-50">Business Analyst<p className="float-right">7 years</p>
                            </div>
                            <h6 className="mt-5">Liên hệ</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Thành viên nhóm</h5>
                            <div className="card-text text-black-50">Tester<p className="float-right">5 years</p>
                            </div>
                            <h6 className="mt-5">Liên hệ</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Thành viên nhóm</h5>
                            <div className="card-text text-black-50">Coder<p className="float-right">8 years</p>
                            </div>
                            <h6 className="mt-5">Liên hệ</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto my-2">
                    <div className="card border-0 shadow-lg p-4">
                        <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">Trưởng nhóm</h5>
                            <div className="card-text text-black-50">Team Leader<p className="float-right">14 years</p>
                            </div>
                            <h6 className="mt-5">Liên hệ</h6>
                            <div className="d-flex justify-content-around">
                                <FaFacebookSquare className="connect" />
                                <AiFillInstagram className="connect" />
                                <FaLinkedin className="connect" />
                                <IoLogoYoutube className="connect" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;