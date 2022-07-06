import React, { useContext, useState } from "react";
import defaultBcg from "../images/room-3.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import { useEffect } from "react";

export default function SingleRoom(props) {
  let { rooms: rooms, getRoom: getRoom } = useContext(RoomContext);
  const [slug, setSlug] = useState();
  useEffect(() => {
    setSlug(props.match.params.slug);
  }, []);
  const room = getRoom(slug);
  if (!room) {
    return (
      <div className="container roomerror">
        <div className="row my-5">
          <div className="col-md-6 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4 error">
              <h1 className="text-center display-4">Xin lỗi</h1>
              <h3>Không tìm thấy phòng nào...</h3>
              <Link to="/rooms" className="btn btn-warning mt-4 ">
                Quay lại các loại phòng
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  const [mainImg, ...defaultBcg] = images;
  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn btn-primary">
            Quay lại tìm kiếm phòng
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room container">
        <div className="row">
          {defaultBcg.map((item, index) => {
            return (
              <div className="col-md-4 col-12 mx-auto" key={index}>
                <div className="card border-0 shadow-lg">
                  <img
                    key={index}
                    src={item}
                    alt={name}
                    className="img-fluid"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>
              <i class="fa fa-eye" aria-hidden="true"></i> Mô tả
            </h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Thông tin chi tiết</h3>
            <h6>mức giá : ${price}</h6>
            <h6>kích thước : {size} SQFT</h6>
            <h6>
              sức chứa tối đa :{" "}
              {capacity > 1 ? `${capacity} người` : `${capacity} người`}
            </h6>
            <h6>
              <i class="fa fa-minus-circle" aria-hidden="true"></i>{" "}
              {pets
                ? "được mang thú cưng vào phòng"
                : "không được mang thú cưng vào phòng"}
            </h6>
            <h6> <i class="fa fa-minus-circle" aria-hidden="true"></i>
              {breakfast
                ? "đã bao gồm tiền ăn sáng"
                : " không bao gồm tiền ăn sáng"}
            </h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h3>
          <i class="fa fa-bell" aria-hidden="true"></i> Thông tin thêm
        </h3>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="p-4 clearfix">
          <div className="row">
            <div className="col-md-3 col-12 ml-auto">
              <Link
                to={`/booknow/${slug}`}
                className="btn btn-outline-danger btn-block btn-lg float-right "
              >
                Đặt phòng
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
