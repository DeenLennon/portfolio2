
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {

    const navigate = useNavigate();

    return (

        <main id="privacy-policy" className="legal-page">

            {/* Back Navigation */}
            <motion.nav
                className="project-nav"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <button
                    onClick={() => navigate("/#portfolio")}
                    className="back-link"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>

                    Back to Portfolio
                </button>
            </motion.nav>


            {/* Hero */}
            <section className="legal-hero">
                <div className="legal-container">
                    <p className="legal-date">
                        Last Updated: August 2026
                    </p>

                </div>
            </section>

            {/* Content */}
            <section className="legal-section">
                <div className="legal-container">

                    <article className="legal-content">
                        <h2>Policy</h2>

                        <section>
                            <h2>Contact Form</h2>

                            <p>
                                Information submitted through the contact form
                                will be used to respond to your inquiry or discuss
                                a potential project.
                            </p>

                            <p>
                                Contact information may be retained for a reasonable
                                period where necessary to maintain communication,
                                provide services, maintain records in compliance with
                                legal obligations.
                            </p>
                        </section>

                        <section>
                            <h2>Professional and Project Information</h2>

                            <p>
                                If you contact me regarding a software, web design,
                                cybersecurity, digital forensics, or electronics
                                project, you may voluntarily provide technical or
                                business information.
                            </p>

                            <p>
                                You should only provide information that you are
                                legally authorized to share.
                            </p>

                            <p>
                                I do not ask for confidential client information,
                                credentials, private keys, or sensitive security
                                information through ordinary website forms unless
                                a secure communication channel has specifically
                                been provided.
                            </p>
                        </section>

                        <section>
                            <h2>Cybersecurity and Digital Forensics</h2>

                            <p>
                                All demonstrations and examples are provided for educational, research,
                                and authorized testing purposes only. Any techniques, tools, or procedures
                                shown should only be used on systems, networks, applications, or data for
                                which proper authorization has been obtained. I do not encourage or
                                endorse unauthorized access, exploitation, malicious use of the information, 
                                techniques, or tools presented in this portfolio. I am not responsible or liable 
                                for any damage, loss, disruption, unauthorized access, data loss, legal consequences, 
                                or other harm resulting from the misuse or unauthorized application of the information provided.
                                Users are solely responsible for ensuring that their activities comply
                                with applicable laws, regulations, and permissions.
                            </p>
                                                        
                        </section>

                        <section>
                            <h2>Digital Electronics Information</h2>

                            <p>
                                If you contact me regarding electronics, robotics or
                                embedded-system projects, you may provide information
                                such as:
                            </p>

                            <ul>
                                <li>Circuit designs</li>
                                <li>Schematics</li>
                                <li>PCB designs</li>
                                <li>Microcontroller information</li>
                                <li>Component lists</li>
                                <li>Embedded software</li>
                                <li>Project requirements</li>
                                <li>Images and diagrams</li>
                            </ul>

                            <p>
                                You should remove passwords, API keys, confidential
                                information, and unnecessary personal information
                                before submitting technical materials.
                            </p>
                        </section>                      
                                         
                          
                        <section>
                            <h2>Changes to This Privacy Policy</h2>

                            <p>
                                This Privacy Policy may be updated periodically to
                                reflect changes to the website, technologies, services,
                                business practices, or applicable legal requirements.
                            </p>

                        </section>

                    </article>

                </div>
            </section>

        </main>
    );
};

export default PrivacyPolicy;
