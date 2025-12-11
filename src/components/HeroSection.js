import React from 'react'

function HeroSection() {
    return (
        <section id="hero-section" className="hero-section">
            <div className="container">
                <div className="mx-auto text-center mb-2">
                    <div className="subheading">
                        <img src="/images/leadcrm.png" alt="leadcrm" className="me-2" />Thousands of Professional using LeadCRM
                    </div>
                </div>
                <h1 className="heading">LinkedIn CRM Integration
                    Capture, Sync and Enrich in <span className="underline-img">Both Ways</span></h1>
                <p className="content">Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.</p>
                <div className="works-with-div">
                    Works with
                    <img src="/images/works-with1.png" alt="img1" className="ms-4" />
                    <img src="/images/works-with2.png" alt="img2" className="ms-4" />
                    <img src="/images/works-with3.png" alt="img3" className="ms-4" />
                </div>
                <div className="ratings">
                    <div className="d-flex flex-row align-items-center me-0 me-lg-5">
                        <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                            <img src="/images/chrome-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                        </div>
                        <div className="d-flex flex-row me-2">
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                        </div>
                        5/5
                    </div>
                    <div className="d-flex flex-row align-items-center mt-2 md:mt-0">
                        <div className="d-flex flex-row align-items-center ratings-playstore-icon me-2">
                            <img src="/images/capterra-logo.png" alt="ratings" className="ratings-icon mx-auto" />
                        </div>
                        <div className="d-flex flex-row me-2">
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                            <img src="/images/ratings.png" alt="ratings" className="star-icon" />
                        </div>
                        5/5
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-stretch">
                    <button className="chrome-web-store-btn me-3">
                        <p className="mb-0 text-start me-4"><small>Available in</small><br />Chrome Web Store</p>
                        <div>
                            <img src="/images/chrome.png" alt="chrome" />
                        </div>
                    </button>
                    <button className="free-trial-btn">Get a Free Trial Now!</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;