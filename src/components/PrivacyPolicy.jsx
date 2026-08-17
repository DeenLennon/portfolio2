
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

                    <span className="legal-badge">
                        LEGAL
                    </span>

                    <h1>Privacy Policy</h1>

                    <p className="legal-intro">
                        Your privacy matters. This page explains how information
                        is collected, used, protected, and handled when you use
                        this portfolio website.
                    </p>

                    <p className="legal-date">
                        Last Updated: August 2026
                    </p>

                </div>
            </section>


            {/* Content */}
            <section className="legal-section">
                <div className="legal-container">

                    <article className="legal-content">

                        <section>
                            <h2>1. Introduction</h2>

                            <p>
                                Welcome to <strong>Deen Lennon</strong> ("I", "me",
                                "my", "we", "us", or "our"). This Privacy Policy
                                explains how information may be collected, used,
                                stored, and protected when you visit or interact
                                with this portfolio website.
                            </p>

                            <p>
                                This portfolio showcases professional and personal
                                work relating to web design, full-stack development,
                                cybersecurity, digital forensics, networking,
                                software development, and digital electronics.
                            </p>

                            <p>
                                By using this website, you acknowledge that you have
                                read and understood this Privacy Policy.
                            </p>
                        </section>


                        <section>
                            <h2>2. Information We May Collect</h2>

                            <p>
                                Depending on how you interact with this website,
                                we may collect certain information.
                            </p>

                            <h3>2.1 Information You Provide</h3>

                            <p>
                                You may voluntarily provide information when you
                                contact us or interact with features of the website.
                            </p>

                            <ul>
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Telephone number</li>
                                <li>Company or organization name</li>
                                <li>Project information</li>
                                <li>Messages and inquiries</li>
                                <li>Files or documents you voluntarily submit</li>
                                <li>Other information you choose to provide</li>
                            </ul>

                            <p>
                                Please do not submit passwords, authentication
                                tokens, private encryption keys, financial
                                credentials, secret API keys, or other highly
                                sensitive information through a general contact form.
                            </p>


                            <h3>2.2 Automatically Collected Information</h3>

                            <p>
                                When you visit the website, certain technical
                                information may automatically be collected by the
                                website, hosting provider, analytics services, or
                                security systems.
                            </p>

                            <ul>
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Operating system</li>
                                <li>Device type</li>
                                <li>Screen resolution</li>
                                <li>Language preferences</li>
                                <li>Pages visited</li>
                                <li>Date and time of access</li>
                                <li>Referring website</li>
                                <li>Error and diagnostic information</li>
                                <li>Security-related information</li>
                            </ul>
                        </section>


                        <section>
                            <h2>3. Cookies</h2>

                            <p>
                                This website may use cookies or similar technologies
                                to provide essential functionality, remember
                                preferences, improve performance, analyze traffic,
                                and improve website security.
                            </p>

                            <p>
                                If third-party analytics or other tracking
                                technologies are implemented, they may also place
                                cookies according to their own policies.
                            </p>

                            <p>
                                You can control or disable cookies through your
                                browser settings. However, disabling certain cookies
                                may affect some functionality of the website.
                            </p>
                        </section>


                        <section>
                            <h2>4. How Information Is Used</h2>

                            <p>
                                Information collected through this website may be
                                used to:
                            </p>

                            <ul>
                                <li>Respond to contact requests.</li>
                                <li>Respond to project inquiries.</li>
                                <li>Communicate with visitors.</li>
                                <li>Provide requested services.</li>
                                <li>Improve the website.</li>
                                <li>Analyze website performance.</li>
                                <li>Detect and prevent abuse.</li>
                                <li>Protect the website against security threats.</li>
                                <li>Investigate technical problems.</li>
                                <li>Maintain business and communication records.</li>
                                <li>Comply with applicable legal requirements.</li>
                            </ul>
                        </section>


                        <section>
                            <h2>5. Contact Forms</h2>

                            <p>
                                If you submit a message through the contact form,
                                the information you provide may be used to respond
                                to your inquiry or discuss a potential project.
                            </p>

                            <p>
                                Contact information may be retained for a reasonable
                                period where necessary to maintain communication,
                                provide services, maintain records, or comply with
                                legal obligations.
                            </p>
                        </section>


                        <section>
                            <h2>6. Professional and Project Information</h2>

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
                                Do not submit confidential client information,
                                credentials, private keys, or sensitive security
                                information through ordinary website forms unless
                                a secure communication channel has specifically
                                been provided.
                            </p>
                        </section>


                        <section>
                            <h2>7. Cybersecurity and Digital Forensics</h2>

                            <p>
                                Because this portfolio includes cybersecurity and
                                digital forensics work, some projects may demonstrate
                                security concepts, vulnerability analysis, network
                                analysis, forensic techniques, malware analysis,
                                security tools, laboratory environments, or related
                                educational material.
                            </p>

                            <p>
                                Information submitted for security or forensic
                                discussions may potentially include:
                            </p>

                            <ul>
                                <li>System logs</li>
                                <li>Network information</li>
                                <li>File metadata</li>
                                <li>Hash values</li>
                                <li>Indicators of compromise</li>
                                <li>Digital artifacts</li>
                                <li>Security reports</li>
                                <li>Incident information</li>
                            </ul>

                            <p>
                                You must have appropriate authorization before
                                submitting information relating to systems, networks,
                                devices, or data belonging to another person or
                                organization.
                            </p>
                        </section>


                        <section>
                            <h2>8. Digital Electronics Information</h2>

                            <p>
                                If you contact me regarding electronics or
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
                            <h2>9. How Information May Be Shared</h2>

                            <p>
                                I do not sell personal information as a general
                                business practice.
                            </p>

                            <p>
                                Information may be processed by trusted service
                                providers required to operate the website, such as:
                            </p>

                            <ul>
                                <li>Web hosting providers</li>
                                <li>Cloud service providers</li>
                                <li>Email providers</li>
                                <li>Database providers</li>
                                <li>Analytics providers</li>
                                <li>Security providers</li>
                                <li>Authentication providers</li>
                                <li>Payment providers, where applicable</li>
                            </ul>

                            <p>
                                Information may also be disclosed where reasonably
                                necessary to comply with applicable law, respond to
                                lawful requests, protect legal rights, investigate
                                fraud, or protect the security of the website.
                            </p>
                        </section>


                        <section>
                            <h2>10. Third-Party Websites</h2>

                            <p>
                                This portfolio may contain links to third-party
                                websites and platforms such as GitHub, LinkedIn,
                                documentation websites, social-media platforms,
                                project demonstrations, and other resources.
                            </p>

                            <p>
                                I do not control the privacy practices or security
                                of third-party websites. You should review their
                                respective privacy policies before providing personal
                                information.
                            </p>
                        </section>


                        <section>
                            <h2>11. Data Security</h2>

                            <p>
                                Reasonable technical and organizational measures may
                                be used to protect information against unauthorized
                                access, alteration, disclosure, loss, or destruction.
                            </p>

                            <ul>
                                <li>HTTPS/TLS encryption</li>
                                <li>Authentication controls</li>
                                <li>Access controls</li>
                                <li>Input validation</li>
                                <li>Secure password handling</li>
                                <li>Security monitoring</li>
                                <li>Software updates</li>
                                <li>Server logging</li>
                                <li>Backups</li>
                                <li>Principle of least privilege</li>
                            </ul>

                            <p>
                                However, no internet-based system can be guaranteed
                                to be completely secure.
                            </p>
                        </section>


                        <section>
                            <h2>12. Data Retention</h2>

                            <p>
                                Personal information may be retained only for as long
                                as reasonably necessary for the purpose for which it
                                was collected, unless a longer period is required or
                                permitted by applicable law.
                            </p>

                            <p>
                                When information is no longer required, it may be
                                securely deleted, anonymized, or otherwise disposed
                                of.
                            </p>
                        </section>


                        <section>
                            <h2>13. Your Privacy Rights</h2>

                            <p>
                                Depending on your location and applicable law, you
                                may have rights relating to your personal information,
                                including:
                            </p>

                            <ul>
                                <li>Accessing personal information held about you.</li>
                                <li>Requesting correction of inaccurate information.</li>
                                <li>Requesting deletion of certain information.</li>
                                <li>Objecting to certain processing.</li>
                                <li>Requesting restriction of processing.</li>
                                <li>Withdrawing consent where applicable.</li>
                                <li>Requesting portability of certain information.</li>
                            </ul>

                            <p>
                                To make a privacy-related request, contact:
                            </p>

                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:[YOUR EMAIL]">
                                    [YOUR EMAIL]
                                </a>
                            </p>
                        </section>


                        <section>
                            <h2>14. Children's Privacy</h2>

                            <p>
                                This website is not intentionally designed to collect
                                personal information from children without appropriate
                                authorization.
                            </p>

                            <p>
                                If you believe that a child has provided personal
                                information through the website without appropriate
                                authorization, please contact me.
                            </p>
                        </section>


                        <section>
                            <h2>15. International Data Transfers</h2>

                            <p>
                                Some hosting, cloud, analytics, email, and other
                                service providers may process information in countries
                                other than your country of residence.
                            </p>

                            <p>
                                Where required by applicable law, appropriate measures
                                will be taken for lawful international transfers of
                                personal information.
                            </p>
                        </section>


                        <section>
                            <h2>16. Security Vulnerability Reports</h2>

                            <p>
                                If you discover a potential security vulnerability
                                affecting this website, please report it responsibly.
                            </p>

                            <p>
                                <strong>Security Email:</strong>{" "}
                                <a href="mailto:[SECURITY EMAIL]">
                                    [SECURITY EMAIL]
                                </a>
                            </p>

                            <p>
                                Please do not access, modify, delete, or disclose data
                                that does not belong to you while investigating a
                                suspected vulnerability.
                            </p>
                        </section>


                        <section>
                            <h2>17. Changes to This Privacy Policy</h2>

                            <p>
                                This Privacy Policy may be updated periodically to
                                reflect changes to the website, technology, services,
                                business practices, or applicable legal requirements.
                            </p>

                            <p>
                                The "Last Updated" date at the top of this page will
                                be updated when changes are made.
                            </p>
                        </section>


                        <section>
                            <h2>18. Contact</h2>

                            <p>
                                If you have questions about this Privacy Policy,
                                please contact:
                            </p>

                            <p>
                                <strong>[YOUR FULL NAME]</strong>
                            </p>

                            <p>
                                Email:{" "}
                                <a href="mailto:[YOUR EMAIL]">
                                    [YOUR EMAIL]
                                </a>
                            </p>
                        </section>

                    </article>

                </div>
            </section>

        </main>
    );
};

export default PrivacyPolicy;
