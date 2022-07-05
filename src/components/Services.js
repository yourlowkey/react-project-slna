import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import { useState } from 'react';

const Services = () => {
    const [services] = useState([
        {
            icon: <FaCocktail />,
            title: "CockTail miễn phí",
            info: "Cocktail là một thức uống hỗn hợp có cồn, là sự kết hợp của các loại rượu mạnh, hoặc một hoặc nhiều loại rượu mạnh trộn với các thành phần khác như nước ép trái cây, xi-rô có hương vị, hoặc kem lạnh. Có nhiều loại cocktail khác nhau, dựa trên số lượng và loại thành phần được thêm vào"
        },

        {
            icon: <FaHiking />,
            title: "Leo núi bất tận",
            info: "Trải nghiệm cảm giác leo núi, trượt tuyết cùng cả gia đình. Đặc biệt free vé cho trẻ em dưới 10 tuổi và giảm giá cho khách hàng VIP"
        },

        {
            icon: <FaShuttleVan />,
            title: "Đi lại dễ dàng",
            info: "Giao thông thuận tiện, đi lại dễ dàng, có thể sử dụng phương tiện công cộng hoặc phương tiện cá nhân. Nếu quý khách có nhu cầu đặt xe taxi thì xin quý khách hãy liên hệ trực tiếp với nhân viên lễ tân"
        },

        {
            icon: <FaBeer />,
            title: "Thỏa sức Beer tươi",
            info: "Thoải mái uống beer tươi được khách sạn nhập khẩu trực tiếp từ Đức, quý khách chỉ cần trả 10% phí dịch vụ là đã có thể thoải mái uống beer và xả hơi cùng bạn bè"
        }
    ]);
    return (
        <div className="container-fluid services">
            <Title title="Dịch vụ" />
            <div className="row">
                {services.map((item, index) => {
                    return (
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Services;