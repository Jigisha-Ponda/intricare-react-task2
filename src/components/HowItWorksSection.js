import React from 'react'

function HowItWorksSection() {
  return (
    <section id="how-works-section" className="how-works-section">
        <div className="container">
            <h5 className="heading">How it Works</h5>
            <p className="content">From setup to success in <span>4 simple steps</span></p>
            <div className="row mt-4">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-details">
                            <img src="/images/1.png" alt="number" className="card-index"/>
                            <h5 className="card-head">Install the Extension</h5>
                            <p className="card-content">Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.</p>
                        </div>
                       <img src="/images/card-1-img.png" alt="card-1"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                <div className="card">
                        <div className="card-details">
                            <img src="/images/2.png" alt="number" className="card-index"/>
                            <h5 className="card-head">Browse LinkedIn</h5>
                            <p className="card-content">Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.</p>
                        </div>
                       <img src="/images/card-2-img.png" alt="card-1"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                <div className="card">
                        <div className="card-details">
                            <img src="/images/3.png" alt="number" className="card-index"/>
                            <h5 className="card-head">Get Enriched Data</h5>
                            <p className="card-content">Enrich profiles with verified emails, phones, and company data with 
                            95%+ accuracy guaranteed.</p>
                        </div>
                       <img src="/images/card-3-img.png" alt="card-1"/>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                <div className="card">
                        <div className="card-details">
                            <img src="/images/4.png" alt="number" className="card-index"/>
                            <h5 className="card-head">Sync to CRM Instantly</h5>
                            <p className="card-content">Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.</p>
                        </div>
                       <img src="/images/card-4-img.png" alt="card-1"/>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <button className="leadcrm-btn mx-auto">
                        Try LeadCRM Now <img src="/images/btn-arrow.png" alt="btn-arrow" className="btn-arrow-icon"/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorksSection;
