import React from 'react'

function FeedbackSection() {
    return (
        <section id="feedback-section" className="feedback-section">
            <div className="container my-5">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mb-4">
                    <h5 className="heading">What people are saying about LeadCRM</h5>
                    <div className="carousel-controls mt-2 mt-lg-0">
                        <button className="btn btn-white carousel-icon rounded-circle me-2" data-bs-target="#reviewCarousel" data-bs-slide="prev">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className="btn btn-white carousel-icon rounded-circle" data-bs-target="#reviewCarousel" data-bs-slide="next">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="card p-4">
                                        <div className="card-description">
                                            <p className="card-content">“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“</p>
                                            <div className="d-flex flex-row align-items-center mt-2 md:mt-0">
                                                <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                                                    <img src="/images/capterra-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                                                </div>
                                                <div className="me-2">
                                                    <img src="/images/rating-img.png" alt="ratings" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="/images/david-fincher.png" alt="user-img" />
                                            </div>
                                            <div className="col-10">
                                                <h6 className="mb-0 avatar-name">David Fincher</h6>
                                                <small className="avatar-location">On Capterra</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
                                    <div className="card p-4">
                                        <div className="card-description">
                                            <p className="card-content">My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”</p>
                                            <div className="d-flex flex-row align-items-center mt-2 md:mt-0">
                                                <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                                                    <img src="/images/capterra-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                                                </div>
                                                <div className="me-2">
                                                    <img src="/images/rating-img.png" alt="ratings" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="/images/david-fincher.png" alt="user-img" />
                                            </div>
                                            <div className="col-10">
                                                <h6 className="mb-0 avatar-name">Lillian Williams</h6>
                                                <small className="avatar-location">On Capterra</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 mx-auto mt-4 mt-lg-0">
                                    <div className="card p-4">
                                        <div className="card-description">
                                            <p className="card-content">“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“</p>
                                            <div className="d-flex flex-row align-items-center mt-2 md:mt-0">
                                                <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                                                    <img src="/images/capterra-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                                                </div>
                                                <div className="me-2">
                                                    <img src="/images/rating-img.png" alt="ratings" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="/images/david-fincher.png" alt="user-img" />
                                            </div>
                                            <div className="col-10">
                                                <h6 className="mb-0 avatar-name">Michael</h6>
                                                <small className="avatar-location">On Capterra</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="card p-4">
                                        <div className="card-description">
                                            <p className="card-content">“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“</p>
                                            <div className="d-flex flex-row align-items-center mt-2 md:mt-0">
                                                <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                                                    <img src="/images/capterra-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                                                </div>
                                                <div className="me-2">
                                                    <img src="/images/rating-img.png" alt="ratings" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="/images/david-fincher.png" alt="user-img" />
                                            </div>
                                            <div className="col-10">
                                                <h6 className="mb-0 avatar-name">David Fincher</h6>
                                                <small className="avatar-location">On Capterra</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mt-4 mt-md-0">
                                    <div className="card p-4">
                                        <div className="card-description">
                                            <p className="card-content">“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“</p>
                                            <div className="d-flex flex-row align-items-center mt-2 md:mt-0">
                                                <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                                                    <img src="/images/capterra-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                                                </div>
                                                <div className="me-2">
                                                    <img src="/images/rating-img.png" alt="ratings" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="/images/david-fincher.png" alt="user-img" />
                                            </div>
                                            <div className="col-10">
                                                <h6 className="mb-0 avatar-name">Michael</h6>
                                                <small className="avatar-location">On Capterra</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 mt-4 mt-lg-0">
                                    <div className="card p-4">
                                        <div className="card-description">
                                            <p className="card-content">My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”</p>
                                            <div className="d-flex flex-row align-items-center mt-2 md:mt-0">
                                                <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                                                    <img src="/images/capterra-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                                                </div>
                                                <div className="me-2">
                                                    <img src="/images/rating-img.png" alt="ratings" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="/images/david-fincher.png" alt="user-img" />
                                            </div>
                                            <div className="col-10">
                                                <h6 className="mb-0 avatar-name">Lillian Williams</h6>
                                                <small className="avatar-location">On Capterra</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedbackSection;