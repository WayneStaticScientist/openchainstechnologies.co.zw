import React from 'react'

export default function BreadCrump({ page, title }: { page: string, title: string }) {
    return (
        <>
            <div className="breadcrumb-wrapper section-padding  bg-cover" style={{
                backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')"
            }}>
                <div className="container-fluid">
                    <div className="page-heading">
                        <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                            <li>
                                <a href="index-2.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <i className="far fa-slash"></i>
                            </li>
                            <li>
                                {title}
                            </li>
                        </ul>
                        <h1 className="wow fadeInUp" data-wow-delay=".5s">{page}</h1>
                    </div>
                </div>
                <div className="plane-shape float-bob-x">
                    <img src="/assets/img/breadcrumb-plane.png" alt="img" />
                </div>
            </div>

        </>
    )
}
