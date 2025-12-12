import React from 'react'

function JoinLeadCRM() {
    return (
        <section id="join-leadcrm" className="join-leadcrm position-relative">
            <div className="container">
                <h5 className="heading">Join Thousands of Professionals Using LeadCRM</h5>
                <img src="/images/linkdln-powerhouse.png" alt="join-leadcrm" className="img-fluid mt-4" />
                <div className="text-center mt-5">
                    <button className="leadcrm-btn mx-auto">
                        Get Started Today <img src="/images/btn-arrow.png" alt="btn-arrow" className="btn-arrow-icon" />
                    </button>
                </div>
            </div>
            <img src="/images/supported-leadcrm-bottom.png" alt="supported-leadcrm-bottom" className="position-absolute end-0" style={{
                top: "-110px",
                zIndex: "-1",
            }} />

        </section>
    )
}

export default JoinLeadCRM;