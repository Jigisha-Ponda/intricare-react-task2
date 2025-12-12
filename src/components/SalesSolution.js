import React from 'react'
function SalesSolution() {
    return (
        <section id="sales-solution" className="sales-solution">
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
                        <img src="/images/enrichment.png" className="img-fluid" alt="" />
                        <p>It’s hard to find the accurate contact data for every prospects by</p>
                    </div>
                    <div className="tab-pane fade" id="content2" role="tabpanel">
                        <img src="/images/data-sync.png" className="img-fluid" alt="" />
                        tab2
                    </div>
                    <div className="tab-pane fade" id="content3" role="tabpanel">
                        <img src="/images/bulk-export.png" className="img-fluid" alt="" />
                        tab3
                    </div>
                    <div className="tab-pane fade" id="content4" role="tabpanel">
                        <img src="/images/ai-productivity.png" className="img-fluid" alt="" />
                        tab4
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SalesSolution;
