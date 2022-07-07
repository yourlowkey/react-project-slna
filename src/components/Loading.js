import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';
export default function Loading() {
    return (
        <div className="loading">
            <h3>Dữ liệu đang cập nhật, vui lòng chờ!!!</h3>
            <img src={loadingGif} alt="loading please wait" />
        </div>
    )
}
