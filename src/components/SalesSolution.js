import React from 'react'
function SalesSolution() {
    return (
        <section id="sales-solution" className="sales-solution position-relative">
            <img src="/images/sales-solution-header.png" alt="img" className="img-fluid position-absolute" style={{
                top: "-25px",
                zIndex: "-1",
                height: "120px"
            }} />
            <div className="container">
                <h5 className="heading">Complete LinkedIn Sales Solutions</h5>
                <p className="content mt-3">Everything you need for professional LinkedIn prospecting</p>
                {/* Tabs */}
                <ul className="nav nav-tabs justify-content-start custom-tabs" id="leadTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#content1" role="tab">
                            <img src="/images/crm-data-enrichment.png" alt="" className="me-2" />
                            CRM Data Enrichment
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#content2" role="tab">
                            <img src="/images/crm-data-sync.png" alt="" className="me-2" />
                            CRM Data Sync
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#content3" role="tab">
                            <img src="/images/bulk-export.png" alt="" className="me-2" />
                            Bulk Export & Enrichment
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tab4" data-bs-toggle="tab" data-bs-target="#content4" role="tab">
                            <img src="/images/ai-productivity.png" alt="" className="me-2" />
                            AI Productivity
                        </button>
                    </li>
                </ul>

                {/* Tab Content */}
                <div className="tab-content mt-4" id="leadTabsContent">
                    <div className="tab-pane fade show active" id="content1" role="tabpanel">
                        <p>It’s hard to find the accurate contact data for every prospects by <span className="red-badge mt-2 mt-md-0">Incomplete Data</span></p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <h5 className="card-heading">Here is how LeadCRM tackles that situation.</h5>
                                    <p className="card-content mt-1">Try LeadCRM Data Enrichment <i className="bi bi-chevron-right small fw-bold"></i></p>
                                    <img src="/images/tab-1-1.png" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <p className="card-description">If it does not works for you ! try our <span>Advanced Waterfall Enrichment</span></p>
                                    <img src="/images/tab-1-2.webp" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="content2" role="tabpanel">
                        <p>40+ hours lost to copy-paste. Every. Single. Month. <span className="red-badge mt-2 mt-md-0">Lost Lead Context</span></p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <h5 className="card-heading">The Solution? LeadCRM's Instant Data Sync.</h5>
                                    <p className="card-content mt-1">Try LeadCRM Data Sync <i className="bi bi-chevron-right small fw-bold"></i></p>
                                    <img src="/images/tab-2-1.png" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <h5 className="card-heading">Unlock instant CRM insights on every profile you visit.</h5>
                                    <p className="card-content mt-1">Try LeadCRM Data Overlay <i className="bi bi-chevron-right small fw-bold"></i></p>
                                    <img src="/images/tab-2-2.png" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="content3" role="tabpanel">
                        <p>Your Sales Navigator Workflow is Broken. <span className="red-badge mt-2 mt-md-0">Lost Productivity</span></p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <h5 className="card-heading">Enrich & Export 250 Profiles in Just 60 Seconds.</h5>
                                    <p className="card-content mt-1">Try LeadCRM Bulk Export Sync <i className="bi bi-chevron-right small fw-bold"></i></p>
                                    <img src="/images/tab-3-1.png" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <h5 className="card-heading">Export & enrich profiles to the CRM or G-Sheet</h5>
                                    <p className="card-content mt-1">Try LeadCRM Bulk Export <i className="bi bi-chevron-right small fw-bold"></i></p>
                                    <img src="/images/tab-3-2.png" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="content4" role="tabpanel">
                        <p>Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink. <span className="red-badge mt-2 mt-md-0">No Smart Assistance</span></p>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <h5 className="card-heading">Get the same high-impact engagement in 80% less time.</h5>
                                    <p className="card-content mt-1">Try LeadCRM AI Response <i className="bi bi-chevron-right small fw-bold"></i></p>
                                    <img src="/images/tab-4-1.webp" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mt-2">
                                    <h5 className="card-heading">Use Shortcuts to reply faster.</h5>
                                    <p className="card-content mt-1">Try LeadCRM Templates <i className="bi bi-chevron-right small fw-bold"></i></p>
                                    <img src="/images/tab-4-2.webp" alt="tab-img" className="img-fluid mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SalesSolution;
