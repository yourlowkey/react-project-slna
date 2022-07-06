import RoomsFilter from './RoomsFilter';
import React,{useContext} from 'react'
import { RoomContext } from "../context";
import RoomsList from './RoomsList';
import { useEffect,useState } from 'react';
export default function RoomsContainer() {
  let { rooms: rooms,sortedRooms:sortedRooms} = useContext(RoomContext);

    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );

}