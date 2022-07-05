import React,{useContext} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';

function Rooms(){
    return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Dịch vụ chuyên nghiệp" subtitle="Tận hưởng dịch vụ phòng cao cấp nhất">
                <Link to="/" className="btn btn-warning">
                      Trở về trang chủ
                </Link>
        </Banner>
        <RoomsContainer />
    </div>
    )
}

export default Rooms
