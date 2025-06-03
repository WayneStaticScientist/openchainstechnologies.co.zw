import { Categories, Globals } from '@/utils/globals'
import React from 'react'

export default function Inspirational() {
    return (
        <>
            <section className="top-destination-section-4 section-padding pb-0">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Our Top Categories</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Openchains The only one</h2>
                            <p className="mt-3 mt-mb-0 wow fadeInUp" data-wow-delay=".3s">
                                Discover a wide range of topics and interest in our categories.From technology programming to lifestyle and entertainment
                            </p>
                        </div>
                        <a href="#" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".5s">
                            <span>Explore More</span> <i className="far fa-long-arrow-right"></i>
                        </a>
                    </div>
                    <div className="row">
                        {Categories.map((e, i) => {
                            return <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <a href={Globals.getWhatappFormat(`Hie for ${e.title}`)} target='_blank'>  <div className="destination-feature-box">
                                    <div className="icon">
                                        <img src="/assets/img/icon-01.svg" alt="icon" />
                                    </div>
                                    <div className="content">
                                        <h6>{e.title}</h6>
                                        <span> From <b>{e.price}</b></span>
                                    </div>
                                </div></a>
                            </div>
                        })}

                    </div>
                    <div className="cta-wrapper-4 section-padding bg-cover" style={{
                        backgroundImage: "url('assets/img/cta/cta-bg-3.jpg')"
                    }}>
                        <div className="section-title text-center mb-0">
                            <span className="wow fadeInUp">Special Offer</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Grab Up To {(Globals.PromotionPrice * 100 / Globals.ActualPrice).toFixed(0)}% Off On <br />
                                Your Website for ${Globals.PromotionPrice}</h2>
                        </div>
                        <a href={`${Globals.getWhatappFormat(`Hie i wanna book for \$${Globals.PromotionPrice} website now !! `)}`}
                            target='_blank' className="theme-btn wow fadeInUp"
                            data-wow-delay=".5s">
                            <span>Book Now</span> <i className="far fa-long-arrow-right"></i>
                        </a>
                        <div className="discount-shape float-bob-y">
                            <img src="/assets/img/cta/discount.png" alt="img" />
                        </div>
                        <div className="bag-shape float-bob-x">
                            <img src="/assets/img/cta/bag.png" alt="img" />
                        </div>
                        <div className="plane-shape">
                            <img src="/assets/img/cta/olane-shape.png" alt="img" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
