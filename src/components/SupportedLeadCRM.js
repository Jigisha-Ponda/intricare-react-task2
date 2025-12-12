import React from 'react'

function SupportedLeadCRM() {
    return (
        <section id="supported-leadcrm" className="supported-leadcrm position-relative">
            <div className="container">
                <h5 className="heading">
                    Our Supported
                    <span className="position-relative d-inline-block">
                        LeadCRM
                        <img
                            src="/images/supported-leadcrm-header.png"
                            alt="icon"
                            className="position-absolute"
                            style={{
                                width: "auto",
                                height: "97px",
                                top: "-80px",
                                right: "-80px"
                            }}
                        />
                    </span>
                </h5>
                <p className="content mt-3">
                    LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!
                </p>
                <img src="/images/supported-leadcrm.png" alt="supported-leadcrm" className="img-fluid mt-4" />
                <div className="text-center mt-5">
                    <button className="leadcrm-btn mx-auto">
                        Lets Integrate your CRM Now!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SupportedLeadCRM;