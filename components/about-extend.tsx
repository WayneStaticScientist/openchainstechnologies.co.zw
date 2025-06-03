import { Globals } from '@/utils/globals'
import Link from 'next/link'
import React from 'react'

export default function AboutExtend() {
    return (
        <>
            <section className="about-section section-padding section-bg fix">
                <div className="container">
                    <div className="about-wrappper-2">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src="/assets/img/about/02.png" alt="img" className="wow img-custom-anim-left" />
                                    <div className="cricle-shape float-bob-y">
                                        <img src="/assets/img/about/circle-shape.png" alt="img" />
                                    </div>
                                    <div className="counter-box float-bob-y">
                                        <div className="content">
                                            <h2><span className="count">{Globals.NumberOfProjects}</span>+</h2>
                                            <p>Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">About Openchains</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            The world of Innovation <br />
                                            and Technology
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        We combine technical expertise with creative vision to deliver exceptional results.
                                    </p>
                                    <div className="about-area">
                                        <div className="about-items wow fadeInUp" data-wow-delay=".3s">
                                            <div className="icon">
                                                <i className="flaticon-support"></i>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    24/7 Support
                                                </h4>
                                                <p>
                                                    We are available 24/7 to deliver you with your proposed projects and in time on our line {Globals.Phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="about-items wow fadeInUp" data-wow-delay=".5s">
                                            <div className="icon">
                                                <i className="flaticon-exclusive"></i>
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    Insured Quality Service
                                                </h4>
                                                <p>
                                                    Our products are professionally built and managed by  <br /> experts engineers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                        <span>contact us now</span> <i className="far fa-long-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
