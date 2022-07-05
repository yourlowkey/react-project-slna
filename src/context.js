import React, { Component } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLoading } from "react-use-loading";

const RoomContext = React.createContext();

// get data through API and provide data to other component
export default function RoomProvider({children}){
    const [{isLoanding,message},{start,stop}]= useLoading(true);
    const [data,setData]=useState([]);
    useEffect(()=>{
        start();
        axios
            .get("https://62c381c2876c4700f53d4ded.mockapi.io/api/rooms")
            .then((response)=> setData(response.data));
        stop();
    },[start, stop]);
    const [state,setState]=useState({
        rooms:[],
        sortedRoom:[],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    });

    useEffect(() => {
        let rooms =formatData(data);
        let featuredRooms = rooms.filter((room) => room.featured === true);
        let maxPrice =Math.max(...rooms.map((item)=> item.price));
        let maxSize = Math.max(...rooms.map((item)=> item.size));

        setState({
            rooms,
            featuredRooms,
            loading:false,
            price: maxPrice,
            maxPrice,
            maxSize,
        })
    },[data]);
    const formatData = (items) =>{
        let tempItems = 
        items &&
        items.map((item)=> {
            let id = item.sys.id;
            let images =items.fields.images.map((image)=> image.fields.file.url);
            let room = {...item.fields ,images, id};
            return room;
        });
        return tempItems;
    };
    const getRoom = (slug) => {
        let tempRooms =[...state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value ==="checkbox" ? target.checked : target.value;
        const name = event.target.name;
        setState((prev)=> ({...prev,[name]:value}));
        if (name ==="type"){
            filterRoomType(value);
        }
        if (name === "capacity") {
            filterRoomsCapacity(value);
          }
          if (name === "price") {
            filterRoomsPrice(value);
          }
          if (name === "minPrice") {
            filterRoomsType(value);
          }
          if (name === "maxPrice") {
            filterRoomsType(value);
          }
          if (name === "breakfast") {
            filterRoomsBreakfast(value);
          }
          if (name === "pets") {
            filterRoomsPets(value);
          }
    };
    const filterRoomsType = (value) => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      state;

      let tempRooms =[...state.sortedRoom];
      if (value != 'all'){
        tempRooms= tempRooms.filter((room)=> room.type === value);
        console.log({ ...prev, sortedRooms: tempRooms });
      }
      setState((prev) => ({ ...prev, sortedRooms: tempRooms }));
    };
    const filterRoomsCapacity = (value) => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
        state;
        let tempRooms =[...state.sortedRoom];
        if (value != 'all'){
          tempRooms= tempRooms.filter((room)=> room.capacity === value);
          console.log(tempRooms);
        }
        setState((prev) => ({ ...prev, sortedRooms: tempRooms }));
    };
    const filterRoomsPrice = (value) => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
          state;
        let tempRooms = [...state.sortedRooms];
        tempRooms = tempRooms.filter((room) => room.price <= value);
        setState((prev) => ({ ...prev, sortedRooms: tempRooms }));
    };
      const filterRoomsBreakfast = (value) => {
        let { rooms, } =state;
    
        let tempRooms = [...state.sortedRooms];
        if (value) {
          tempRooms = tempRooms.filter((room) => room.breakfast === true);
          setState((prev) => ({ ...prev, sortedRooms: tempRooms }));
        } else {
          setState((prev) => ({ ...prev, sortedRooms: rooms }));
        }
    };
      const filterRoomsPets = (value) => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
          state;
        let tempRooms = [...state.sortedRooms];
        if (value) {
          tempRooms = tempRooms.filter((room) => room.pets === true);
          setState((prev) => ({ ...prev, sortedRooms: tempRooms }));
        } else {
          setState((prev) => ({ ...prev, sortedRooms: rooms }));
        }
    };
    return (
        <RoomContext.Provider
            value={{
                ...state,
                getRoom:getRoom,
                handleChange: handleChange,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return(
            <RoomConsumer>
                {(value)=> <Component {...props} context ={value} />}
            </RoomConsumer>
        );
    };
}

export {RoomProvider ,RoomConsumer, RoomContext};