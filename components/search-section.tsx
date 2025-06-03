import React from 'react'

export default function SearchSection() {
    return (
        <>
            <div className="header-search-bar d-flex align-items-center">
                <button className="search-close">×</button>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="search-bar">
                                <div className="contact-form-box contact-search-form-box">
                                    <form action="#">
                                        <input type="email" placeholder="Search here..." />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </form>
                                    <p>Type above and press Enter to search. Press Close to cancel.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
