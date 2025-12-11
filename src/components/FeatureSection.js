import React from 'react'

function FeatureSection() {
  return (
    <section id="feature-section" className="feature-section">
        <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <div>
                    <img src="/images/contact-access.png" alt="contact-access" className="me-3"/>
                    Access to <span>700M+ Contacts</span>
                </div>
                <div className="mt-2 mt-md-0">
                    <img src="/images/one-click-push.png" alt="contact-access" className="me-3"/>
                    <span>One click push</span> to CRM
                </div>
                <div className="mt-2 mt-md-0">
                    <img src="/images/custom-field-mapping.png" alt="contact-access" className="me-3"/>
                    <span>Custom Field </span>Mapping
                </div>
                <div className="mt-2 mt-md-0">
                    <img src="/images/advance-waterfall.png" alt="contact-access" className="me-3"/>
                    Advanced <span>Waterfall Enrichment</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection;