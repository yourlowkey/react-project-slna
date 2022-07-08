import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import {FaRegMeh} from 'react-icons/fa';

export default function Error() {
    return (
        <>
        <Hero hero="roomsError" />
         <Banner title="ERROR 404 NOT FOUND" subtitle= "Opp!!! Tìm kiếm của bạn không khả dụng">
                <FaRegMeh className="lost"></FaRegMeh>
                <Link to="/" className="btn btn-warning">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Quay về trang chủ
                </Link>
        </Banner>
        </>
    )
}
