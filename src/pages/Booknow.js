import React, { useState, useContext, useEffect } from 'react'
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from '../images/room-3.jpeg';

export default function Booknow(props) {
    const [slug, setSlug] = useState();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    let { romms: rooms, getRoom } = useContext(RoomContext);

    useEffect(() => {
        setSlug(props.match.params.slug);
        handleChangeEnd.bind(props);
        handleChangeStart.bind(props);
    }, []);
    const handleChangeStart = (date) => {
        setStartDate(date);
    }
    const handleChangeEnd = (date) => {
        setEndDate(date)
    }
    const calculateDaysLeft = (startDate, endDate) => {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        return endDate.diff(startDate, "days");
    }
    const room = getRoom(slug);
    const daysLeft = calculateDaysLeft(startDate, endDate) + 1;
    if (!room) {
        return (<div className="container roomerror">
            <div className="row my-5">
                <div className="col-md-6 col-12 mx-auto">
                    <div className="card shadow-lg border-0 p-4 error">
                        <h1 className="text-center display-4">Rất xin lỗi</h1>
                        <h3>Không tìm thấy phòng nào phù hợp...</h3>
                        <Link to="/rooms" className="btn btn-warning mt-4 ">Quay trở lại đặt phòng</Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    const { name, capacity, size, price, breakfast, pets, images } = room;
    const [mainImg, ...defaultBcg] = images;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                    <div>
                        <h1 className="display-4">Đặt phòng</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={mainImg || defaultBcg} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Thông tin về phòng</h1>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th> <i class="fa fa-info" aria-hidden="true"></i> Loại phòng</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-home" aria-hidden="true"></i> Sức chứa</th>
                                        <td>{capacity} người</td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-square" aria-hidden="true"></i> Kích thước</th>
                                        <td>{size} sqft</td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-coffee" aria-hidden="true"></i> Ăn sáng</th>
                                        <td>{breakfast === true ? 'Bao gồm ăn sáng' : 'Không bao gồm ăn sáng'}</td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-paw" aria-hidden="true"></i> Thú cưng</th>
                                        <td>{pets === true ? 'Được phép mang vào phòng' : 'Không được phép mang vào phòng'}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="col-lg-6 col-12 my-auto img-fluid">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3395744560726!2d105.82218501540221!3d21.019094593483043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab797c957f3d%3A0x80675d0ba06ea09f!2zMzYgUC4gSG_DoG5nIEPhuqd1LCBDaOG7oyBE4burYSwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655288712541!5m2!1svi!2s" width="440" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-6 col-12 my-auto img-fluid">
                            <h1>Thông tin người đặt</h1>
                            <table className="table">
                                <thead className="thead">
                                    <tr>
                                        <th> <i class="fa fa-file" aria-hidden="true"> </i> Ảnh thẻ</th>
                                        <td> <input type="file" className="form-control-sm" required /></td>
                                    </tr>
                                </thead>
                            </table>
                            <table className="table">
                                <thead className="thead-light">
                                    
                                    <tr>
                                        <th> <i class="fa fa-address-book" aria-hidden="true"></i> Họ và tên</th>
                                        <td> <input type="text" className="form-control-md" placeholder="VD: Nguyễn Nam Anh" required /></td>
                                    </tr>



                                    <tr>
                                        <th> <i class="fa fa-location-arrow" aria-hidden="true"> </i> Quê quán</th>
                                        <td>
                                            <select class="form-control-sm" name="hometown">
                                                <option value="1">An Giang</option>
                                                <option value="2">Bà rịa-Vũng tàu</option>
                                                <option value="3">Bắc Giang</option>
                                                <option value="4">Bắc Kạn</option>
                                                <option value="5">Bạc Liêu</option>
                                                <option value="6">Bắc Ninh</option>
                                                <option value="7">Bến Tre</option>
                                                <option value="8">Bình Định</option>
                                                <option value="9">Bình Dương</option>
                                                <option value="10">Bình Phước</option>
                                                <option value="11">Bình Thuận</option>
                                                <option value="12">Cà Mau</option>
                                                <option value="13">Cần Thơ</option>
                                                <option value="14">Cao Bằng</option>
                                                <option value="15">Đà Nẵng</option>
                                                <option value="16">Đắk Lắk</option>
                                                <option value="17">Đắk Nông</option>
                                                <option value="18">Điện Biên</option>
                                                <option value="19">Đồng Nai</option>
                                                <option value="20">Đồng Tháp</option>
                                                <option value="21">Gia Lai</option>
                                                <option value="22">Hà Giang</option>
                                                <option value="23">Hà Nam</option>
                                                <option value="24" selected>Hà Nội</option>
                                                <option value="25">Hà Tĩnh</option>
                                                <option value="26">Hải Dương</option>
                                                <option value="27">Hải Phòng</option>
                                                <option value="28">Hậu Giang</option>
                                                <option value="29">Hòa Bình</option>
                                                <option value="30">Hưng Yên</option>
                                                <option value="31">Khánh Hòa</option>
                                                <option value="32">Kiên Giang</option>
                                                <option value="33">Kon Tum</option>
                                                <option value="34">Lai Châu</option>
                                                <option value="35">Lâm Đồng</option>
                                                <option value="36">Lạng Sơn</option>
                                                <option value="37">Lào Cai</option>
                                                <option value="38">Long An</option>
                                                <option value="39">Nam Định</option>
                                                <option value="40">Nghệ An</option>
                                                <option value="41">Ninh Bình</option>
                                                <option value="42">Ninh Thuận</option>
                                                <option value="43">Phú Thọ</option>
                                                <option value="44">Phú Yên</option>
                                                <option value="45">Quảng Bình</option>
                                                <option value="46">Quảng Nam</option>
                                                <option value="47">Quảng Ngãi</option>
                                                <option value="48">Quảng Ninh</option>
                                                <option value="49">Quảng Trị</option>
                                                <option value="50">Sóc Trăng</option>
                                                <option value="51">Sơn La</option>
                                                <option value="52">Tây Ninh</option>
                                                <option value="53">Thái Bình</option>
                                                <option value="54">Thái Nguyên</option>
                                                <option value="55">Thanh Hóa</option>
                                                <option value="56">Thừa Thiên Huế</option>
                                                <option value="57">Tiền Giang</option>
                                                <option value="58">Thành phố Hồ Chí Minh</option>
                                                <option value="59">Trà Vinh</option>
                                                <option value="60">Tuyên Quang</option>
                                                <option value="61">Vĩnh Long</option>
                                                <option value="62">Vĩnh Phúc</option>
                                                <option value="63">Yên Bái</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-globe" aria-hidden="true"> </i> Quốc tịch</th>
                                        <td>
                                            <select class="form-control-sm" name="city">
                                                <option value="1">Vietnam</option>
                                                <option value="Danish">Đan Mạch</option>
                                                <option value="England">British</option>
                                                Anh
                                                <option value="Estonia">Estonian</option>
                                                nước Estonia	người Estonia
                                                <option value="Finland">Finnish</option>
                                                nước Phần Lan	người Phần Lan
                                                <option value="Iceland">Iceland</option>
                                                nước Iceland	người Iceland
                                                <option value="Ireland">Irish</option>
                                                nước Ireland	người Ireland
                                                <option value="Latvia">Latvian</option>
                                                nước Latvia	người Latvia
                                                <option value="Lithuania">Lithuanian</option>
                                                nước Lithuania	người Lithuania
                                                <option value="Northern">Ireland British</option>
                                                nước Bắc Ireland	người Bắc Ireland
                                                <option value="Norway">Norwegian</option>
                                                nước Na Uy	người Na Uy
                                                <option value="Scotland">British</option>
                                                nước Scotland	người Scotland
                                                <option value="Sweden">Swedish</option>
                                                nước Thụy Điển	người Thụy Điển
                                                <option value="United">Kingdom British</option>
                                                Vương Quốc Anh và Bắc Ireland	người Anh
                                                <option value="Wales">British / Welsh</option>
                                                nước Wales	người Wales
                                                <option value="Austria">Austrian</option>
                                                nước Áo	người Áo
                                                <option value="Belgium">Belgian</option>
                                                nước Bỉ	người Bỉ
                                                <option value="France">French</option>
                                                nước Pháp	người Pháp
                                                <option value="Germany">German</option>
                                                nước Đức	người Đức
                                                <option value="Netherlands">Dutch</option>
                                                nước Hà Lan	người Hà Lan
                                                <option value="Switzerland">Swiss</option>
                                                nước Thụy Sĩ	người Thụy Sĩ
                                                <option value="Albania">Albanian</option>
                                                nước Albania	người Albania
                                                <option value="Croatia">Croatian</option>
                                                nước Croatia	người Croatia
                                                <option value="Cyprus">Cypriot</option>
                                                nước Cyprus	người Cyprus
                                                <option value="Greece">Greek</option>
                                                nước Hy Lạp	người Hy Lạp
                                                <option value="Italy">Italian</option>
                                                nước Ý	người Ý
                                                <option value="Portugal">Portuguese</option>
                                                nước Bồ Đào Nha	người Bồ Đào Nha
                                                <option value="Serbia">Serbian</option>
                                                nước Serbia	người Serbia
                                                <option value="Slovenia">Slovenian</option>
                                                nước Slovenia	người Slovenia
                                                <option value="Spain">Spanish</option>
                                                nước Tây Ban Nha	người Tây Ban Nha
                                                <option value="Belarus">Belarusian</option>
                                                nước Belarus	người Belarus
                                                <option value="Bulgaria">Bulgarian</option>
                                                nước Bulgaria	người Bulgaria
                                                <option value="Czech">Republic	Czech</option>
                                                nước Cộng hòa Séc	người Séc
                                                <option value="Hungary">Hungarian</option>
                                                nước Hungary	người Hungary
                                                <option value="Poland">Polish</option>
                                                nước Ba Lan	người Ba Lan
                                                <option value="Romania">Romanian</option>
                                                nước Romania	người Romania
                                                <option value="Russia">Russian</option>
                                                nước Nga	người Nga
                                                <option value="Slovakia">Slovak / Slovakian</option>
                                                nước Slovakia	người Slovakia
                                                <option value="Ukraine">Ukrainian</option>
                                                nước Ukraine	người Ukraine
                                                <option value="Canada">Canadian</option>
                                                nước Canada	người Canada
                                                <option value="Mexico">Mexican</option>
                                                nước Mexico	người Mexico
                                                <option value="United">States	American</option>
                                                nước Mỹ	người Mỹ
                                                <option value="Cuba">Cuban</option>
                                                nước Cuba	người Cuba
                                                <option value="Guatemala">Guatemalan</option>
                                                nước Guatemala	người Guatemala
                                                <option value="Jamaica">Jamaican</option>
                                                nước Jamaica	người Jamaica
                                                <option value="Argentina">Argentinian</option>
                                                nước Argentina	người Argentina
                                                <option value="Bolivia">Bolivian</option>
                                                nước Bolivia	người Bolivia
                                                <option value="Brazil">Brazilian</option>
                                                nước Brazil	người Brazil
                                                <option value="Chile">Chilean</option>
                                                nước Chile	người Chile
                                                <option value="Colombia">Colombian</option>
                                                nước Colombia	người Colombia
                                                <option value="Ecuador">Ecuadorian</option>
                                                nước Ecuador	người Ecuador
                                                <option value="Paraguay">Paraguayan</option>
                                                nước Paraguay	người Paraguay
                                                <option value="Peru">Peruvian</option>
                                                nước Peru	người Peru
                                                <option value="Uruguay">Uruguayan</option>
                                                nước Uruguay	người Uruguay
                                                <option value="Venezuela">Venezuelan</option>
                                                nước Venezuela	người Venezuela
                                                <option value="Georgia">Georgian</option>
                                                nước Georgia	người Georgia
                                                <option value="Iran">Iranian</option>
                                                nước Iran	người Iran
                                                <option value="Iraq">Iraqi</option>
                                                nước Iraq	người Iraq
                                                <option value="Israel">Israeli</option>
                                                nước Israel	người Israel
                                                <option value="Jordan">Jordanian</option>
                                                nước Jordan	người Jordan
                                                <option value="Kuwait">Kuwaiti</option>
                                                nước Kuwait	người Kuwait
                                                <option value="Lebanon">Lebanese</option>
                                                nước Lebanon	người Lebanon
                                                <option value="Palestinian">Territories	Palestinian</option>
                                                Lãnh thổ Palestin	người Palestin
                                                <option value="Saudi">Arabia	Saudi Arabian</option>
                                                nước Ả-rập Saudi	người Ả-rập Saudi
                                                <option value="Syria">Syrian</option>
                                                nước Syria	người Syria
                                                <option value="Turkey">Turkish</option>
                                                nước Thổ Nhĩ Kỳ	người Thổ Nhĩ Kỳ
                                                <option value="Yemen">Yemeni / Yemenite</option>
                                                nước Yemen	người Yemen
                                                <option value="Afghanistan">Afghan / Afghani</option>
                                                nước Afghanistan	người Afghanistan
                                                <option value="Bangladesh">Bangladeshi</option>
                                                nước Bangladesh	người Bangladesh
                                                <option value="India">Indian</option>
                                                nước Ấn Độ	người Ấn Độ
                                                <option value="Kazakhstan">Kazakh / Kazakhstani</option>
                                                nước Kazakhstan	người Kazakhstan
                                                <option value="Nepal">Nepalese / Nepali</option>
                                                nước Nepal	người Nepal
                                                <option value="Pakistan">Pakistani</option>
                                                nước Pakistan	người Pakistan
                                                <option value="Sri">Sri Lankan</option>
                                                nước Sri Lanka	người Sri Lanka
                                                <option value="China">Chinese</option>
                                                nước Trung Quốc	người Trung Quốc
                                                <option value="Japan">Japanese</option>
                                                nước Nhật	người Nhật
                                                <option value="Mongolia">Mongolian</option>
                                                nước Mông Cổ	người Mông Cổ
                                                <option value="North">Korea	North Korean</option>
                                                nước Triều Tiên	người Triều Tiên
                                                <option value="South">Korea	South Korean</option>
                                                nước Hàn Quốc	người Hàn Quốc
                                                <option value="Taiwan">Taiwanese</option>
                                                nước Đài Loan	người Đài Loan
                                                <option value="Cambodia">Cambodian</option>
                                                nước Cam-pu-chia	người Cam-pu-chia
                                                <option value="Indonesia">Indonesian</option>
                                                nước Indonesia	người Indonesia
                                                <option value="Laos">Laotian / Lao</option>
                                                nước Lào	người Lào
                                                <option value="Malaysia">Malaysian</option>
                                                nước Malaysia	người Malaysia
                                                <option value="Myanmar">Burmese</option>
                                                nước Myanmar	người Myanmar/Miến Điện
                                                <option value="Philippines">Filipino</option>
                                                nước Philippines	người Philippines
                                                <option value="Singapore">Singaporean</option>
                                                nước Singapore	người Singapore
                                                <option value="Thailand">Thai</option>
                                                nước Thái Lan	người Thái Lan
                                                <option value="Vietnam">Vietnamese</option>
                                                nước Việt Nam	người Việt Nam
                                                <option value="Australia">Australian</option>
                                                nước Australia	người Australia
                                                <option value="Fiji">Fijian</option>
                                                nước Fiji	người Fiji
                                                <option value="New">Zealand	New Zealand</option>
                                                nước New Zealand	người New Zealand
                                                <option value="Algeria">Algerian</option>
                                                nước Algeria	người Algeria
                                                <option value="Egypt">Egyptian</option>
                                                nước Ai-cập	người Ai Cập
                                                <option value="Ghana">Ghanaian</option>
                                                nước Ghana	người Ghana
                                                <option value="Ivory">Coast	Ivorian</option>
                                                nước Bờ biển Ngà	người Bờ biển Ngà
                                                <option value="Libya">Libyan</option>
                                                nước Libya	người Libya
                                                <option value="Morocco">Moroccan</option>
                                                nước Morocco	người Morocco
                                                <option value="Nigeria">Nigerian</option>
                                                nước Nigeria	người Nigeria
                                                <option value="Tunisia">Tunisian</option>
                                                nước Tunisia	người Tunisia
                                                <option value="Ethiopia">Ethiopian</option>
                                                nước Ethiopia	người Ethiopia
                                                <option value="Kenya">Kenyan</option>
                                                nước Kenya	người Kenya
                                                <option value="Somalia">Somali / Somalian</option>
                                                nước Somalia	người Somalia
                                                <option value="Sudan">Sudanese</option>
                                                nước Sudan	người Sudan
                                                <option value="Tanzania">Tanzanian</option>
                                                nước Tazania	người Tazania
                                                <option value="Uganda">Ugandan</option>
                                                nước Uganda	người Uganda
                                                <option value="Angola">Angolan</option>
                                                nước Angola	người Angola
                                                <option value="Botswana">Botswanan</option>
                                                nước Botswana	người Botswana
                                                <option value="Democratic">Republic the Congolese</option>
                                                nước Cộng hòa Dân chủ Congo	người Congo
                                                <option value="Madagascar">Malagasy</option>
                                                nước Madagascar	người Madagasca
                                                <option value="Mozambique">Mozambican</option>
                                                nước Mozambique	người Mozabique
                                                <option value="Namibia">Namibian</option>
                                                nước Namibia	người Namibia
                                                <option value="South"> South African</option>
                                                nước Nam Phi	người Nam Phi
                                                <option value="Zambia">Zambian</option>
                                                nước Zambia	người Zambia
                                                <option value="Zimbabwe">Zimbabwean</option>
                                                nước Zimbabwe	người Zimbabwe
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-phone" aria-hidden="true"></i><span> </span>Số điện thoại</th>
                                        <td><input type="tel" className="form-control-md" placeholder="VD: 0869165610" required /></td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-envelope" aria-hidden="true"></i> Email</th>
                                        <td> <input type="email" className="form-control-md" placeholder="VD: trungnt@hnue.edu.vn" required /></td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-venus-mars" aria-hidden="true"></i> Giới tính</th>
                                        <td>
                                            <div>
                                                <input
                                                    type="radio"
                                                    value="false"
                                                    name="gender"
                                                />
                                                Nam
                                                <span> </span>
                                                <input
                                                    type="radio"
                                                    value="true"
                                                    name="gender"
                                                />
                                                Nữ
                                                <span> </span>
                                                <input
                                                    type="radio"
                                                    value="false"
                                                    name="gender"
                                                />
                                                Khác (Other)
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-birthday-cake" aria-hidden="true"></i> Ngày sinh</th>
                                        <td>
                                            <input
                                                type="date"
                                                id="birthday"
                                                name="dob"
                                            ></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> <i class="fa fa-heart" aria-hidden="true"></i> Màu yêu thích</th>
                                        <td>
                                            <input type="color" name="favorite_color" value="#008080" required />
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">Ngày đặt phòng</label>
                                <DatePicker selected={startDate} onChange={handleChangeStart} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">Ngày trả phòng</label>
                                <DatePicker selected={endDate} onChange={handleChangeEnd} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bolder">Number of days : {daysLeft > 0 ? daysLeft : <p style={{ color: "red" }}>Số ngày đặt phòng không hợp lệ, xin kiểm tra lại lần nữa</p>}</h6>
                            <mark><i class="fa fa-exclamation-triangle" aria-hidden="true"></i><span> </span><strong>Thời gian <i>Checkin</i> của khách sạn là từ 10 am đến 11 pm</strong></mark>
                        </div>
                        <div className="col-md-6 n-12">
                            <h6 className="font-weight-bold">Tổng tiền 1 ngày: <span className="badge badge-info">$ {price}</span></h6>
                            <h6 className="font-weight-bold">Tổng số tiền phải trả : <span className="text-success">{daysLeft >= 0 ? `$ ${daysLeft * price}` : <p style={{ color: "red" }}>Đã xảy ra lỗi khi tính tổng tiền</p>}</span></h6>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder">Chọn phương thức thanh toán</label>
                                <select className="form-control">
                                    <option disabled>Chọn phương thức thanh toán</option>
                                    <option value="Credit">Qua thẻ ngân hàng</option>
                                    <option value="checkin">Qua thẻ thành viên của khách sạn</option>
                                    <option value="Debit">Qua thẻ ghi nợ</option>
                                    <option value="Debit">Chuyển khoản cho nhân viên lễ tân</option>
                                    <option value="checkin">Thanh toán khi checkin</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <div className="col-md-6 col-12 float-right">
                                <button className="btn btn-success" data-toggle="modal" data-target="#thanks">Xác nhận đặt phòng</button>
                            </div>
                            <Link to="/rooms" className="btn btn-danger">
                                Tìm phòng khác
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="thanks">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h2>Xin cảm ơn bạn</h2>
                            <p className="lead">Bạn đã đặt phòng thành công....</p>
                            <p className="lead">Thông tin đặt phòng của bạn đã được ghi nhận!!!</p>
                            <p class="boss"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> <u>Lưu ý: Nếu bấm nút "Trở về trang chủ" thì nhấn phím F5 để tải lại trang sau khi về được trang chủ</u></p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/" className="btn btn-info">Trở về trang chủ</Link>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
