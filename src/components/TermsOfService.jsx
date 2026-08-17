
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/TermsOfService.css";

const TermsOfService = () => {

    const navigate = useNavigate();

    return (
        <main className="legal-page">

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


            <section className="legal-hero">
                <div className="legal-container">

                    <h1>Terms of Service</h1>
                  
                    <p className="legal-date">
                        Last Updated: August 2026
                    </p>

                </div>
            </section>


            <section className="legal-section">
                <div className="legal-container">

                    <article className="legal-content">

                        <section>
                         
                            <p>
                                The website showcases my professional and personal work
                                involving web design, full-stack development,
                                cybersecurity, digital forensics, software
                                development, networking, and digital electronics.
                            </p>
                        
                        </section>                    

                        <section>
                            <h2>Cybersecurity Content</h2>

                            <p>
                                Some projects displayed on this portfolio may
                                demonstrate cybersecurity concepts, vulnerabilities,
                                penetration-testing techniques, network analysis,
                                malware analysis, digital forensics, security tools,
                                scripts, or laboratory environments.
                            </p>

                            <p>
                                Such content is provided for educational,
                                defensive-security, research, and authorized-testing
                                purposes.
                            </p>

                            <div className="legal-warning">

                                <strong>Important:</strong>

                                <p>
                                    A demonstration of a cybersecurity technique does
                                    not constitute authorization to use that technique
                                    against a system.
                                </p>

                            </div>

                            <p>
                                You are responsible for ensuring that you have
                                appropriate authorization before performing security
                                testing, vulnerability assessment, scanning,
                                exploitation, malware analysis, or forensic
                                examination.
                            </p>
                        </section>


                        <section>
                            <h2>Digital Forensics Disclaimer</h2>

                            <p>
                                Digital-forensics information presented on this
                                website is intended for educational and professional
                                demonstration purposes.
                            </p>

                            <p>
                                Examples, screenshots, tools, commands, forensic
                                artifacts, timelines, hashes, logs, or investigative
                                techniques should not automatically be interpreted as
                                conclusions about a real investigation.
                            </p>

                            <p>
                                Digital evidence should be handled according to
                                applicable legal, organizational, and forensic
                                procedures.
                            </p>
                        </section>

                        <section>
                            <h2>Digital Electronics Disclaimer</h2>

                            <p>
                                Electronics projects may involve circuits,
                                microcontrollers, sensors, motors, batteries, power
                                supplies, PCBs, and embedded systems.
                            </p>

                            <p>
                                Such projects may involve electrical, mechanical,
                                thermal, or other hazards.
                            </p>

                            <p>
                                You are responsible for following appropriate safety
                                procedures, manufacturer specifications, electrical
                                standards, and applicable regulations.
                            </p>

                            <div className="legal-warning">

                                <strong>Safety Notice</strong>

                                <p>
                                    Do not reproduce or modify a hardware project unless
                                    you understand the associated electrical and
                                    physical risks.
                                </p>

                            </div>
                        </section>

                        <section>
                            <h2>Intellectual Property</h2>

                            <p>
                                Unless otherwise stated, the design, branding, text,
                                graphics, photographs, source code, software, diagrams,
                                documentation, and original project materials on this
                                website belong to or are licensed to
                                <strong>Tech With Deen</strong>.
                            </p>

                            <p>
                                These materials may be protected by applicable
                                intellectual-property laws.
                            </p>

                            <p>
                                Nothing in these Terms transfers ownership of
                                intellectual property to you.
                            </p>
                        </section>


                        <section>
                            <h2>Portfolio Projects</h2>

                            <p>
                                Projects displayed on this portfolio may have been:
                            </p>

                            <ul>
                                <li>Independently developed.</li>
                                <li>Developed for clients.</li>
                                <li>Developed as academic projects.</li>
                                <li>Developed as educational demonstrations.</li>
                                <li>Developed collaboratively.</li>
                                <li>Open-source projects.</li>
                                <li>Experimental projects.</li>
                            </ul>

                            <p>
                                A project appearing in this portfolio does not
                                necessarily mean that every component of that project
                                is owned by me.
                            </p>
                        </section>

                        <section>
                            <h2>Source Code</h2>

                            <p>
                                Where source code is publicly available, its use is
                                governed by the license associated with that code.
                            </p>

                            <p>
                                If no license is provided, you should not assume that
                                the code is available for unrestricted commercial
                                redistribution or modification.
                            </p>
                        </section>


                        <section>
                            <h2>hird-Party Services</h2>

                            <p>
                                This website may use or link to third-party services,
                                including hosting platforms, APIs, analytics services,
                                authentication providers, open-source packages,
                                software repositories, and social-media platforms.
                            </p>

                            <p>
                                Third-party services may have their own terms,
                                licenses, privacy policies, and limitations.
                            </p>

                            <p>
                                I am not responsible for the availability, security,
                                functionality, or policies of third-party services.
                            </p>
                        </section>


                        <section>
                            <h2>User Submissions</h2>

                            <p>
                                If you submit information, messages, files, feedback,
                                project descriptions, or other materials, you
                                represent that:
                            </p>

                            <ul>
                                <li>
                                    You have the right to submit the material.
                                </li>

                                <li>
                                    The material does not knowingly violate applicable
                                    law.
                                </li>

                                <li>
                                    The material does not infringe another person's
                                    intellectual-property rights.
                                </li>

                                <li>
                                    You are not intentionally submitting malicious code.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>Confidential Information</h2>

                            <p>
                                General website contact forms should not be considered
                                secure channels for highly confidential information
                                unless explicitly stated otherwise.
                            </p>

                            <p>
                                Do not submit:
                            </p>

                            <ul>
                                <li>Passwords</li>
                                <li>Private encryption keys</li>
                                <li>Authentication tokens</li>
                                <li>Secret API keys</li>
                                <li>Banking credentials</li>
                                <li>Confidential client information</li>
                                <li>Sensitive security credentials</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Professional Services</h2>

                            <p>
                                Information presented on this portfolio does not
                                automatically create a professional-services agreement.
                            </p>

                            <p>
                                A professional relationship is established only when
                                the parties agree to the applicable scope, fees,
                                responsibilities, deliverables, timelines, and other
                                relevant terms.
                            </p>

                            <p>
                                Where professional services are provided, a separate
                                contract or statement of work may govern the
                                engagement.
                            </p>
                        </section>

                        <section>
                            <h2>Disclaimer of Warranties</h2>

                            <p>
                                To the maximum extent permitted by applicable law,
                                this website and its content are provided on an
                                "as is" and "as available" basis.
                            </p>

                        </section>

                        <section>
                            <h2>Security Reporting</h2>

                            <p>
                                If you discover a potential security vulnerability
                                affecting this website, please report it responsibly.
                            </p>

                            <p>
                                <strong>Security Email:</strong>{" "}
                                <a href="mailto:lennonabu21@yahoo.com">
                                    lennonabu21@yahoo.com
                                </a>
                            </p>

                            <p>
                                Do not intentionally access, modify, delete, or
                                disclose information belonging to other users.
                            </p>
                        </section>

                        <section>
                            <h2>Privacy</h2>

                            <p>
                                Your use of this website is also governed by our
                                Privacy Policy.
                            </p>
                        </section>


                        <section>
                            <h2>Changes to These Terms</h2>

                            <p>
                                These Terms may be updated periodically to reflect
                                changes to the website, services, technology,
                                business practices, or applicable law.
                            </p>

                        </section>

                        <section>
                            <h2>Governing Law</h2>

                            <p>
                                These Terms shall be governed by and interpreted
                                according to the laws of
                                <strong>Nigerian Cybercrimes Act 2015</strong>, subject to
                                applicable law.
                            </p>
                        </section>

                        <section>
                            <h2>ontact</h2>

                            <p>
                                If you have questions regarding these Terms, please
                                contact:
                            </p>

                            <p>
                                <strong>Deen Lennon</strong>
                            </p>

                            <p>
                                Email:{" "}
                                <a href="mailto:lennonabu21@yahoo.com">
                                    lennonabu21@yahoo.com
                                </a>
                            </p>
                        </section>

                    </article>

                </div>
            </section>

        </main>
    );
};

export default TermsOfService;
