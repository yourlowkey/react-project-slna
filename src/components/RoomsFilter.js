import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context';
import Title from '../components/Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({ rooms }) {
  let { handleChange, ...state} = useContext(RoomContext);
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <div className="container mt-5">
            <Title title="Tìm kiếm phòng" />
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label htmlFor="type">Chọn loại phòng</label>
                        <select name="type" id="type" value={state.type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Số khách ở</label>
                        <select name="capacity" id="capacity" value={state.capacity} className="form-control" onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Giá phòng ${state.price}</label>
                        <input type="range" name="price" min={state.minPrice} max={state.maxPrice} id="price" value={state.price} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="col-md-4 col-12 ml-auto">
                    <div className="custom-control custom-checkbox my-5">
                        <input type="checkbox" className="custom-control-input" name="breakfast" id="breakfast" checked={state.breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast" className="custom-control-label">Có ăn sáng</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" name="pets" id="pets" checked={state.pets} onChange={handleChange} />
                        <label htmlFor="pets" className="custom-control-label">Thú cưng</label>
                    </div>
                    <div className="input-group my-5">
                        <label htmlFor="size" className="mr-3">Kích thước phòng</label>
                        <input type="number" name="minSize" id="size" value={state.minSize} onChange={handleChange} className="form-control" />
                        <input type="number" name="maxSize" id="size" value={state.maxSize} onChange={handleChange} className="form-control" />
                    </div>
                </div>
            </div>
        </div>
    )
}