import { BlogNews } from '@/utils/globals'
import React from 'react'

export default function News() {
    return (
        <> <section className="news-section section-padding section-bg-2">
            <div className="container">
                <div className="section-title text-center">
                    <span className="wow fadeInUp" data-wow-delay=".3s">Open Latest Blog & News</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".5s">See our <br /> Upcoming Technologies</h2>
                </div>
                <div className="row">
                    {BlogNews.map((e, i) => {
                        return <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="news-box-items-4">
                                <div className="news-img">
                                    <img src="/assets/img/news/news-11.jpg" alt="img" />
                                    <ul className="post-date">
                                        <li>
                                            22
                                        </li>
                                        <li>
                                            JAN
                                        </li>
                                    </ul>
                                </div>
                                <div className="news-content">
                                    <ul>
                                        <li> <b>By</b> {e.by}</li>
                                        <li><b>{e.volunteers}</b> Collabs</li>
                                    </ul>
                                    <h3><a href="#">{e.title}</a></h3>
                                    <p>{e.summary}</p>
                                    <a href="#" className="link-btn">Continue Reading <i className="far fa-long-arrow-right"></i></a>
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
