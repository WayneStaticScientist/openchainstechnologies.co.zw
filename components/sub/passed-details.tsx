import { Globals } from '@/utils/globals'
import React from 'react'

export default function PassedDetails({ img, title, description, list, faqs, min, normal, nop }: {
    img: string,
    title: string,
    description: string,
    min: number,
    normal: number,
    nop: number,
    list: string[],
    faqs: { title: string, summary: string }[]
}) {
    return (
        <>
            <section className="destination-details-section section-padding">
                <div className="container">
                    <div className="destination-details-wrapper">
                        <div className="row g-5">
                            <div className="col-xl-8 col-12">
                                <div className="details-post">
                                    <div className="details-image">
                                        <img src={img} alt="web design" />
                                    </div>
                                    <div className="details-content">
                                        <h2>
                                            {title}
                                        </h2>
                                        <p>
                                            {description}
                                        </p>

                                        <div className="destination-list-item">
                                            <h4>
                                                Example of Topics covered
                                            </h4>
                                            <div className="destination-list">
                                                <ul className="list">
                                                    {list.map((e, i) => {
                                                        return <li key={i}>
                                                            <i className="flaticon-check"></i>
                                                            {e}
                                                        </li>
                                                    })}
                                                </ul>

                                            </div>
                                        </div>
                                        <div className="faq-items">
                                            <h2>Frequently Asked Questions</h2>
                                            <div className="faq-accordion">
                                                <div className="accordion" id="accordion2">
                                                    {faqs.map((e, i) => {
                                                        return <div className="accordion-item mb-3" key={i}>
                                                            <h5 className="accordion-header">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                                                                    {e.title}
                                                                </button>
                                                            </h5>
                                                            <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                                <div className="accordion-body">
                                                                    {e.summary}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-12">
                                <div className="main-side-bar sticky-style">
                                    <div className="destination-single-sideber-widget">
                                        <div className="widget-title">
                                            {title} Info
                                        </div>
                                        <ul className="destination-card">
                                            <li>Minimum Prize:
                                                <span>{min}</span>
                                            </li>

                                            <li>Normal Prize:
                                                <span>{normal}</span>
                                            </li>
                                            <li>Currency Used:
                                                <span>USD</span>
                                            </li>
                                            <li>No.. Projects:
                                                <span>{nop}</span>
                                            </li>
                                            <li>Location:
                                                <span>Anywhere</span>
                                            </li>
                                        </ul>
                                        <a href={Globals.getWhatappFormat(`*Booking Details*\n\nHie i would like to place a book for ${title}`)} className="theme-btn w-100">
                                            <span>Book Now</span> <i className="far fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="offer-card bg-cover" style={{
                                        backgroundImage: "url('/assets/img/destinations/offter-card.jpg')"
                                    }}>
                                        <h3>Book Now and Enjoy Amazing Savings!</h3>
                                        <img src="/assets/img/destinations/disocunt.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
