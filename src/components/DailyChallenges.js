import React from 'react'

function DailyChallenges() {
    return (
        <section id="challenges-section" className="challenges-section">
            <div className="container">
                <h2 className="heading">Every LinkedIn Prospector faces these daily challenges</h2>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="challenge-1">
                            <img src="/images/challenge1.png" alt="challenge1" className="img-fluid w-100" />
                            <h6 className="mt-3 mb-0 head">Without LeadCRM</h6>
                            <div>
                                <ul className="custom-list ps-2 mb-0">
                                    <li>
                                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center ms-2">
                                            <h6 className="mb-0 me-2 subhead">Manual Data Entry</h6>
                                            <div className="red-badge mt-2 mt-md-0">3+ Hours wasted daily</div>
                                        </div>
                                        <p className="content ms-2">Copying LinkedIn contacts to CRM manually plus losing conversation history</p>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center ms-2">
                                            <h6 className="mb-0 me-2 subhead">Incomplete Data</h6>
                                            <div className="red-badge mt-2 mt-md-0">60% Data Incomplete</div>
                                        </div>
                                        <p className="content ms-2">LinkedIn profiles missing Email and Phones from 700M+ Database</p>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center ms-2">
                                            <h6 className="mb-0 me-2 subhead">No CRM Visibility</h6>
                                            <div className="red-badge mt-2 mt-md-0">Zero context available</div>
                                        </div>
                                        <p className="content ms-2">Can’t see existing CRM contacts when browsing LinkedIn profiles</p>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center ms-2">
                                            <h6 className="mb-0 me-2 subhead">Limited Productivity</h6>
                                            <div className="red-badge mt-2 mt-md-0">No smart assistance</div>
                                        </div>
                                        <p className="content ms-2 mb-0">Writing messages manually plus no AI assistant for reply, Invite or comments.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="challenge-2">
                            <img src="/images/challenge2.png" alt="challenge1" className="img-fluid w-100" />
                            <div className="d-flex flex-row align-items-center mt-3">
                                <h6 className="mb-0 head">With LeadCRM</h6>
                                <img src="/images/logo-icon.png" alt="logo-icon" className="mx-3" />
                                <div className="green-badge">4+ Hours/day Saved</div>
                            </div>
                            <div>
                                <ul className="custom-list2 ps-2 mb-0">
                                    <li>
                                        <div className="d-flex flex-row align-items-center ms-4">
                                            <h6 className="mb-0 me-2 subhead">Complete Bi-Directional Sync</h6>
                                        </div>
                                        <p className="content ms-4">Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-row align-items-center ms-4">
                                            <h6 className="mb-0 me-2 subhead">700M+ Contacts + Enrichment</h6>
                                        </div>
                                        <p className="content ms-4">Get verified emails and phone numbers from a vast global database.</p>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-row align-items-center ms-4">
                                            <h6 className="mb-0 me-2 subhead">CRM Overlay on LinkedIn</h6>
                                        </div>
                                        <p className="content ms-4">See full CRM insights directly on LinkedIn profiles without switching tabs.</p>
                                    </li>
                                    <li>
                                        <div className="d-flex flex-row align-items-center ms-4">
                                            <h6 className="mb-0 me-2 subhead">AI Response + Templates + Bulk Exports</h6>
                                        </div>
                                        <p className="content ms-4 mb-0">Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 position-relative">
                    <button className="leadcrm-btn">
                        Start Using LeadCRM Now
                    </button>
                    <img src="/images/save-hours.webp" alt="save-hours" className="save-hours-img"/>
                </div>
            </div>
        </section>
    )
}

export default DailyChallenges;