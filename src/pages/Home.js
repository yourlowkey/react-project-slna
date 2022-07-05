import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero"></Hero>
        <Banner title="Dịch vụ cao cấp" subtitle="Giá tiền phòng từ 300$">
                <Link to="/rooms" className="btn btn-primary">
                      Các loại phòng
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
