import React from 'react'

function Footer() {
    return (
        <section id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <a href="/">
                            <img src="/images/logo.png" alt="logo" />
                        </a>
                        <p className="footer-description my-4">LeadCRM is LinkedIn integration
                            tool for your CRM.</p>
                        <div className="d-flex flex-row">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                <img src="/images/facebook.png" alt="Facebook" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                <img src="/images/twitter.png" alt="Twitter" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                <img src="/images/linkdln.png" alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                                <img src="/images/instagram.png" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h5 className="footer-title">Integrations</h5>
                        <div className="d-flex flex-column footer-links mt-3">
                            <a href="/">HubSpot</a>
                            <a href="/">Salesforce</a>
                            <a href="/">Pipedrive</a>
                            <a href="/">Close.io<span className="ms-2 green-badge">Coming Soon</span></a>
                            <a href="/">Insightly<span className="ms-2 green-badge">Coming Soon</span></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h5 className="footer-title">Alternative</h5>
                        <div className="d-flex flex-column footer-links mt-3">
                            <a href="/">Surfe VS LeadCRM</a>
                            <a href="/">Linkmatch Alternative</a>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h5 className="footer-title">Legal</h5>
                        <div className="d-flex flex-column footer-links mt-3">
                            <a href="/">Privacy Policy</a>
                            <a href="/">Terms of Use</a>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 mt-4 mt-lg-0">
                        <h5 className="footer-title">Contact Us</h5>
                        <div className="d-flex flex-column footer-links mt-3">
                            <a href="mailto:support@leadcrm.io">
                                <img src="/images/mail.png" alt="mail" className="me-3" />support@leadcrm.io
                            </a>
                            <a href="tel:+12315387466">
                                <img src="/images/call.png" alt="mail" className="me-3" />+1 231-538-7466
                            </a>
                            <a href="/">
                                <img src="/images/help.png" alt="mail" className="me-3" />Help Center
                            </a>
                            <button className="chrome-web-store me-3 ms-auto">
                                <p className="mb-0 text-start me-2">Available in <br/><span>Chrome</span></p>
                                <div>
                                    <img src="/images/chrome.png" alt="chrome" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <p className="footer-disclaimer mt-5 mb-2">Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.</p>
                <hr className="m-0"/>
                <p className="footer-copyright my-2">Copyright © 2025 LeadCRM. All Rights Reserved.</p>
            </div>
        </section>
    )
}

export default Footer;