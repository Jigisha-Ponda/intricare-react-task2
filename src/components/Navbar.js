import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    const [activeMega, setActiveMega] = useState(null);

    React.useEffect(() => {
        function handleClickOutside(e) {
            const menu = document.querySelector(".mobile-menu");
            const toggler = document.querySelector(".navbar-toggler");

            // Close mobile menu if clicked outside
            if (menuOpen && menu && !menu.contains(e.target) && !toggler.contains(e.target)) {
                setMenuOpen(false);
            }

            // Close mega menu if clicked outside any mega dropdown
            const megaMenus = document.querySelectorAll(".mega-menu");
            const toggles = document.querySelectorAll(".mega-toggle");

            if (![...megaMenus, ...toggles].some(el => el.contains(e.target))) {
                setActiveMega(null);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [menuOpen]);

    return (
        <div className="min-h-screen">
            <nav className="navbar navbar-expand-lg fixed-top bg-white">
                <div className="container-fluid position-relative">

                    {/* LEFT: Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="logo" height="40" />
                    </Link>

                    {/* RIGHT: Buttons */}
                    <div className="d-lg-none d-flex gap-2 ms-auto justify-content-center justify-content-lg-end">
                        <button className="btn primary-btn d-none d-md-block">Get Your Free Account</button>
                        <button className="btn primary-outline-btn">
                            <img src="/images/login-icon.png" alt="login" className="me-2 login-icon" />
                            Login
                        </button>
                    </div>
                    <button
                        className="navbar-toggler ms-auto d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* MOBILE MENU */}
                    <div
                        className={`mobile-menu slide-left ${menuOpen ? "show" : ""}`}
                        id="navbarSupportedContent"
                    >
                        {/* Close button */}
                        <div className="text-end p-3 d-lg-none">
                            <button
                                className="btn-close"
                                aria-label="Close"
                                onClick={closeMenu}
                            ></button>
                        </div>
                        {/* CENTER: Nav Links */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mega-parent">
                                <div className="nav-link d-flex align-items-center mega-toggle" onClick={() =>
                                    setActiveMega(activeMega === "product" ? null : "product")
                                }>
                                    Product   <i
                                        className={`bi bi-caret-down-fill ms-1 ${activeMega === "product" ? "rotate-arrow" : ""}`}
                                    ></i>
                                </div>

                                {/* Mega Menu */}
                                <div className={`mega-menu shadow-lg ${activeMega === "product" ? "show" : ""}`}>
                                    <div className="row g-4">

                                        {/* LEFT: Image & Title */}
                                        <div className="col-md-12 col-lg-3">
                                            <div className="mega-description">
                                                <h4 className="mega-title px-4 pt-4">LinkedIn Extension</h4>
                                                <p className="mega-desc px-4 mt-2">
                                                    Easily manage your network, organize leads, and integrate seamlessly with your CRM for efficient follow-ups and enhanced sales workflows. Take control of your LinkedIn outreach like never before!
                                                </p>
                                                <img src="/images/linkdln-extension.webp" alt="product" className="img-fluid rounded" />
                                            </div>
                                        </div>

                                        {/* CENTER: Features List */}
                                        <div className="col-md-12 col-lg-6">
                                            <h5 className="mega-section-title">Features</h5>

                                            <div className="row">
                                                <div className="col-md-5 col-lg-6">
                                                    <ul className="mega-link ps-0">
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/lead-finder.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>Lead Finder</b><br />Professional Profiles Instantly.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/teammate.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>Teammate</b><br />Empower. Collaborate. Grow. Win.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/deal-management.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>
                                                                        Deal Management</b><br />treamline Your Deal Management.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/waterfall-data-enrichment.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>Waterfall Data Enrichment</b><br />Transform Data. Drive Sales Success.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/bulk-export.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>Bulk Export & Enrich</b><br />Export Linkedln Leads & Auto-Enrich.
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-5 col-lg-6">
                                                    <ul className="mega-link ps-0">
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/crm-data-sync.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>CRM Data Sync</b><br /> Sync LinkedIn Contacts Directly.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/crm-data-overlay.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>CRM Data Overlay</b><br />Instant LinkedIn Intel Overlaid on Your CRM.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/ai-assisted.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>

                                                                        AI-Assisted Commenting</b><br />Auto-Generate Comments and Build Trust.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/ai-response.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>AI Response Assistant
                                                                    </b><br />Reply Smarter & Faster to Messages.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="mega-item">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-2">
                                                                    <img src="/images/templates.webp" />
                                                                </div>
                                                                <div className="col-10">
                                                                    <b>Templates & Shortcuts</b><br />Speed Up Outreach with 1-Click Templates.
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        {/* RIGHT: CRM + Extensions */}
                                        <div className="col-md-6 col-lg-3">
                                            <h5 className="mega-section-title">LeadCRM Integration</h5>
                                            <ul className="mega-link ps-0">
                                                <li className="mega-item">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-2">
                                                            <img src="/images/crm-integration.webp" />
                                                        </div>
                                                        <div className="col-10">
                                                            <b>CRM Integration
                                                            </b><br /> Boost Productivity with Integration
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                            <h5 className="mega-section-title mt-4">Extensions</h5>
                                            <ul className="mega-link ps-0">
                                                <li className="mega-item">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-2">
                                                            <img src="/images/chrome-logo.webp" />
                                                        </div>
                                                        <div className="col-10">
                                                            <b>Chrome</b><br /> LinkedIn Chrome Extension
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mega-item">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-2">
                                                            <img src="/images/firefox-logo.webp" />
                                                        </div>
                                                        <div className="col-10">

                                                            <b>Firefox</b><span className="green-badge ms-2">Coming soon</span><br /> LinkedIn Firefox Extension
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mega-item">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-2">
                                                            <img src="/images/edge-logo.webp" />
                                                        </div>
                                                        <div className="col-10">
                                                            <b>Edge</b><span className="green-badge ms-2">Coming soon</span><br /> LinkedIn Edge Extension
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item dropdown mega-dropdown">
                                <div className="nav-link mega-toggle" onClick={() =>
                                    setActiveMega(activeMega === "resources" ? null : "resources")
                                }>Resources<i
                                    className={`bi bi-caret-down-fill dropdown-arrow ms-1 ${activeMega === "resources" ? "rotate-arrow" : ""}`}
                                ></i></div>
                                <div className={`mega-menu mega-menu2 ${activeMega === "resources" ? "show" : ""}`}>
                                    <Link to="/blogs" className="mega-item">
                                        <img src="/images/blog-link.webp" alt="" />
                                        Blogs
                                    </Link>

                                    <Link to="/api-docs" className="mega-item">
                                        <img src="/images/api-documentation-link.webp" alt="" />
                                        API Documentation
                                    </Link>

                                    <Link to="/alternatives" className="mega-item">
                                        <img src="/images/lead-crm-alternative-link.webp" alt="" />
                                        LeadCRM Alternatives
                                    </Link>

                                    <Link to="/integration" className="mega-item">
                                        <img src="/images/crm-integration-link.webp" alt="" />
                                        CRM Integration Guide
                                    </Link>

                                    <Link to="/export-guide" className="mega-item">
                                        <img src="/images/bulk-export-link.webp" alt="" />
                                        Lead Export Guide
                                    </Link>

                                    <Link to="/hubspot-guide" className="mega-item">
                                        <img src="/images/hubspot-troubleshooting-link.webp" alt="" />
                                        HubSpot Troubleshooting Guide
                                    </Link>

                                    <Link to="/faqs" className="mega-item">
                                        <img src="/images/faqs-link.webp" alt="" />
                                        FAQs
                                    </Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown mega-dropdown">
                                <div className="nav-link mega-toggle" onClick={() =>
                                    setActiveMega(activeMega === "company" ? null : "company")
                                }>Company<i
                                    className={`bi bi-caret-down-fill dropdown-arrow ms-1 ${activeMega === "company" ? "rotate-arrow" : ""}`}
                                ></i></div>
                                <div className={`mega-menu mega-menu2 ${activeMega === "company" ? "show" : ""}`}>
                                    <Link to="/blogs" className="mega-item">
                                        <img src="/images/about-us-link.webp" alt="" />
                                        About Us
                                    </Link>

                                    <Link to="/api-docs" className="mega-item">
                                        <img src="/images/contact-us-link.webp" alt="" />
                                        Contact Us
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT — Buttons (Desktop Only) */}
                    <div className="d-none d-lg-flex gap-2">
                        <button className="btn primary-btn">Get Your Free Account</button>
                        <button className="btn primary-outline-btn">
                            <img src="/images/login-icon.png" className="me-2 login-icon" />
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

