import { Globals } from '@/utils/globals'
import React from 'react'

export default function Feature() {
    return (
        <>
            <section className="tour-section fix section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">Projects Pricings</span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Check your budget | negotiable prices</h2>
                        <p className="mt-3 mt-mb-0 wow fadeInUp" data-wow-delay=".5s">
                            Discover cutting-edge software and electronics solutions from OpenChains Technologies , We also build custom services based on what you want
                            wether electronics , software  , bots , designs and more
                        </p>
                    </div>
                    <div className="row">
                        {
                            Globals.getPrices().map((e, i) => {
                                return <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="tour-box-items">
                                        <div className="thumb">
                                            <img src={e.icon} alt="img" />
                                        </div>
                                        <div className="content">
                                            <span>openchains</span>
                                            <h4>
                                                <a href={Globals.getWhatappFormat(e.link ?? e.name)} target="_blank" >
                                                    {e.name}
                                                </a>
                                            </h4>
                                            <h6>From <span>{e.price}</span> <del>{(e.price * (Globals.PromotionPrice / Globals.ActualPrice) + e.price).toFixed(0)}</del></h6>
                                            <ul className="list">
                                                <li>
                                                    <i className="far fa-calendar"></i>
                                                    {e.days}
                                                </li>
                                                <li>
                                                    <i className="far fa-flag"></i>
                                                    internation
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}
