import Link from 'next/link'
import React from 'react'

export default function CatalogueGroup() {
    return (
        <>
            <section className="trending-destinations section-padding fix">
                <div className="container">
                    <div className="section-title-area lg-center">
                        <div className="section-title">
                            <span className="wow fadeInUp">Services</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Our amazing Services</h2>
                        </div>
                        <Link href="/projects" className="theme-btn theme-btn-2 wow fadeInUp" data-wow-delay=".5s">
                            <span>Explore More</span> <i className="far fa-long-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="trending-destinations-card-items">
                                <div className="destinations-img">
                                    <img src="/assets/img/destinations/01.jpg" alt="Web Design" />
                                    <div className="icon">
                                        <Link href="/web">
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <ul className="destinations-content">
                                        <li className="title">
                                            <Link href="/web">Web Design</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="trending-destinations-card-items">
                                <div className="destinations-img">
                                    <img src="/assets/img/destinations/02.jpg" alt="App Design" />
                                    <div className="icon">
                                        <Link href="/app">
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <ul className="destinations-content">
                                        <li className="title">
                                            <Link href="/app">App Design</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="trending-destinations-card-items">
                                <div className="destinations-img">
                                    <img src="assets/img/destinations/03.jpg" alt="electronics" />
                                    <div className="icon">
                                        <Link
                                            href="/electronics">
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <ul className="destinations-content">
                                        <li className="title">
                                            <Link
                                                href="/electronics">Electronics</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="trending-destinations-card-items">
                                <div className="destinations-img">
                                    <img src="assets/img/destinations/04.jpg" alt="Graphic Design" />
                                    <div className="icon">
                                        <Link href="/graphic">
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <ul className="destinations-content">
                                        <li className="title">
                                            <Link href="/graphic">Graphic Design</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="trending-destinations-card-items">
                                <div className="destinations-img">
                                    <img src="assets/img/destinations/05.jpg" alt="artificial intelligence" />
                                    <div className="icon">
                                        <Link href="/ai">
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <ul className="destinations-content">
                                        <li className="title">
                                            <Link href="/ai">Artificial Intelligence</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="trending-destinations-card-items">
                                <div className="destinations-img">
                                    <img src="assets/img/destinations/06.jpg" alt="System Design" />
                                    <div className="icon">
                                        <Link href="/systems">
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <ul className="destinations-content">
                                        <li className="title">
                                            <Link href="/systems">Microservices</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
