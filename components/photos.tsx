import { PhotoGallery } from '@/utils/globals'
import React from 'react'

export default function Photos() {
    return (
        <>
            <div className="instagram-section fix">
                <div className="swiper instagram-slider">
                    <div className="swiper-wrapper">
                        {PhotoGallery.map((item, index) => (
                            <div className="" key={index}>
                                <div className="instagram-image">
                                    <img src={item.img} alt="img" />
                                    <a href="#" className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
