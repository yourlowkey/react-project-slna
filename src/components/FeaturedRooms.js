import React, { useContext } from "react";
import Room from "./Room";
import Title from "./Title";
import { RoomContext } from "../context";
import Loading from "./Loading";

export default function FeaturedRooms() {
  let { featuredRooms: rooms, isLoading } = useContext(RoomContext);

  rooms =
    rooms &&
    rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
  return (
    <section className="featured-rooms container">
      <Title title="Chi tiết các loại phòng" />
      <div className="row">{isLoading ? <Loading /> : rooms}</div>
    </section>
  );
}
