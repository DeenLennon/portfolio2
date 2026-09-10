
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/TermsOfService.css";

const sections = [
    {
        number: "01",
        title: "Cybersecurity Content",
        content: (
            <>
                <p>
                    Some projects displayed on this portfolio may demonstrate
                    cybersecurity concepts, vulnerabilities, penetration-testing
                    techniques, network analysis, malware analysis, digital
                    forensics, security tools, scripts, or laboratory
                    environments.
                </p>

                <p>
                    Such content is provided for educational, defensive-security,
                    research, and authorized-testing purposes.
                </p>

                <div className="legal-warning">
                    <div className="warning-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M10.3 3.9 2.1 18a2 2 0 0 0 1.7 3h16.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                    </div>

                    <div>
                        <strong>Important</strong>
                        <p>
                            A demonstration of a cybersecurity technique does
                            not constitute authorization to use that technique
                            against a system.
                        </p>
                    </div>
                </div>

                <p>
                    You are responsible for ensuring that you have appropriate
                    authorization before performing security testing,
                    vulnerability assessment, scanning, exploitation, malware
                    analysis, or forensic examination.
                </p>
            </>
        ),
    },

    {
        number: "02",
        title: "Digital Forensics Disclaimer",
        content: (
            <>
                <p>
                    Digital-forensics information presented on this website is
                    intended for educational and professional demonstration
                    purposes.
                </p>

                <p>
                    Examples, screenshots, tools, commands, forensic artifacts,
                    timelines, hashes, logs, or investigative techniques should
                    not automatically be interpreted as conclusions about a real
                    investigation.
                </p>

                <p>
                    Digital evidence should be handled according to applicable
                    legal, organizational, and forensic procedures.
                </p>
            </>
        ),
    },

    {
        number: "03",
        title: "Digital Electronics Disclaimer",
        content: (
            <>
                <p>
                    Electronics projects may involve circuits, microcontrollers,
                    sensors, motors, batteries, power supplies, PCBs, and
                    embedded systems.
                </p>

                <p>
                    Such projects may involve electrical, mechanical, thermal,
                    or other hazards.
                </p>

                <p>
                    You are responsible for following appropriate safety
                    procedures, manufacturer specifications, electrical
                    standards, and applicable regulations.
                </p>

                <div className="legal-warning safety-warning">
                    <div className="warning-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                            <path d="M12 8v4" />
                            <path d="M12 16h.01" />
                        </svg>
                    </div>

                    <div>
                        <strong>Safety Notice</strong>
                        <p>
                            Do not reproduce or modify a hardware project unless
                            you understand the associated electrical and physical
                            risks.
                        </p>
                    </div>
                </div>
            </>
        ),
    },

    {
        number: "04",
        title: "Intellectual Property",
        content: (
            <>
                <p>
                    Unless otherwise stated, the design, branding, text,
                    graphics, photographs, source code, software, diagrams,
                    documentation, and original project materials on this
                    website belong to or are licensed to{" "}
                    <strong>Tech With Deen</strong>.
                </p>

                <p>
                    These materials may be protected by applicable
                    intellectual-property laws.
                </p>

                <p>
                    Nothing in these Terms transfers ownership of intellectual
                    property to you.
                </p>
            </>
        ),
    },

    {
        number: "05",
        title: "Portfolio Projects",
        content: (
            <>
                <p>Projects displayed on this portfolio may have been:</p>

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
                    A project appearing in this portfolio does not necessarily
                    mean that every component of that project is owned by me.
                </p>
            </>
        ),
    },

    {
        number: "06",
        title: "Source Code",
        content: (
            <>
                <p>
                    Where source code is publicly available, its use is governed
                    by the license associated with that code.
                </p>

                <p>
                    If no license is provided, you should not assume that the
                    code is available for unrestricted commercial redistribution
                    or modification.
                </p>
            </>
        ),
    },

    {
        number: "07",
        title: "Third-Party Services",
        content: (
            <>
                <p>
                    This website may use or link to third-party services,
                    including hosting platforms, APIs, analytics services,
                    authentication providers, open-source packages, software
                    repositories, and social-media platforms.
                </p>

                <p>
                    Third-party services may have their own terms, licenses,
                    privacy policies, and limitations.
                </p>

                <p>
                    I am not responsible for the availability, security,
                    functionality, or policies of third-party services.
                </p>
            </>
        ),
    },

    {
        number: "08",
        title: "User Submissions",
        content: (
            <>
                <p>
                    If you submit information, messages, files, feedback,
                    project descriptions, or other materials, you represent
                    that:
                </p>

                <ul>
                    <li>You have the right to submit the material.</li>
                    <li>
                        The material does not knowingly violate applicable law.
                    </li>
                    <li>
                        The material does not infringe another person's
                        intellectual-property rights.
                    </li>
                    <li>
                        You are not intentionally submitting malicious code.
                    </li>
                </ul>
            </>
        ),
    },

    {
        number: "09",
        title: "Confidential Information",
        content: (
            <>
                <p>
                    General website contact forms should not be considered
                    secure channels for highly confidential information unless
                    explicitly stated otherwise.
                </p>

                <p>Do not submit:</p>

                <ul>
                    <li>Passwords</li>
                    <li>Private encryption keys</li>
                    <li>Authentication tokens</li>
                    <li>Secret API keys</li>
                    <li>Banking credentials</li>
                    <li>Confidential client information</li>
                    <li>Sensitive security credentials</li>
                </ul>
            </>
        ),
    },

    {
        number: "10",
        title: "Professional Services",
        content: (
            <>
                <p>
                    Information presented on this portfolio does not
                    automatically create a professional-services agreement.
                </p>

                <p>
                    A professional relationship is established only when the
                    parties agree to the applicable scope, fees,
                    responsibilities, deliverables, timelines, and other
                    relevant terms.
                </p>

                <p>
                    Where professional services are provided, a separate
                    contract or statement of work may govern the engagement.
                </p>
            </>
        ),
    },

    {
        number: "11",
        title: "Disclaimer of Warranties",
        content: (
            <p>
                To the maximum extent permitted by applicable law, this website
                and its content are provided on an <strong>"as is"</strong> and{" "}
                <strong>"as available"</strong> basis.
            </p>
        ),
    },

    {
        number: "12",
        title: "Security Reporting",
        content: (
            <>
                <p>
                    If you discover a potential security vulnerability
                    affecting this website, please report it responsibly.
                </p>

                <div className="security-email">
                    <span>Security Email</span>

                    <a href="mailto:lennonabu21@yahoo.com">
                        lennonabu21@yahoo.com
                    </a>
                </div>

                <p>
                    Do not intentionally access, modify, delete, or disclose
                    information belonging to other users.
                </p>
            </>
        ),
    },

    {
        number: "13",
        title: "Privacy",
        content: (
            <p>
                Your use of this website is also governed by our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
            </p>
        ),
    },

    {
        number: "14",
        title: "Changes to These Terms",
        content: (
            <p>
                These Terms may be updated periodically to reflect changes to
                the website, services, technology, business practices, or
                applicable law.
            </p>
        ),
    },

    {
        number: "15",
        title: "Governing Law",
        content: (
            <p>
                These Terms shall be governed by and interpreted in accordance
                with the applicable laws of the Federal Republic of Nigeria,
                including relevant legislation such as the{" "}
                <strong>Cybercrimes Act 2015</strong>, where applicable.
            </p>
        ),
    },
];

const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const TermsOfService = () => {
    const navigate = useNavigate();

    return (
        <main className="legal-page">
            {/* Back Navigation */}
            <motion.nav
                className="project-nav"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={() => navigate("/#portfolio")}
                    className="back-link"
                    type="button"
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

                    <span>Back to Portfolio</span>
                </button>
            </motion.nav>

            {/* Hero */}
            <section className="legal-hero">
                <div className="legal-container">
                    <motion.div
                        className="legal-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="legal-eyebrow">
                            Legal Information
                        </span>

                        <h1>Terms of Service</h1>

                        <p className="legal-subtitle">
                            Please review these terms carefully before using
                            this website and its content.
                        </p>

                        <div className="legal-date">
                            <span>Last Updated</span>
                            <strong>September 2026</strong>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="legal-section">
                <div className="legal-container">
                    <div className="legal-layout">
                        {/* Intro */}
                        <motion.div
                            className="terms-intro"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="intro-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="8" y1="13" x2="16" y2="13" />
                                    <line x1="8" y1="17" x2="16" y2="17" />
                                    <line x1="8" y1="9" x2="10" y2="9" />
                                </svg>
                            </div>

                            <div>
                                <h2>Welcome</h2>

                                <p>
                                    This website showcases professional and
                                    personal work involving web design,
                                    full-stack development, cybersecurity,
                                    digital forensics, software development,
                                    networking, and digital electronics.
                                </p>

                                <p>
                                    By accessing or using this website, you
                                    acknowledge that you have read, understood,
                                    and agreed to these Terms of Service.
                                </p>
                            </div>
                        </motion.div>

                        {/* Terms */}
                        <article className="legal-content">
                            {sections.map((section) => (
                                <motion.section
                                    className="terms-section"
                                    key={section.number}
                                    variants={sectionVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                >
                                    <div className="section-number">
                                        {section.number}
                                    </div>

                                    <div className="section-body">
                                        <h2>{section.title}</h2>

                                        <div className="section-content">
                                            {section.content}
                                        </div>
                                    </div>
                                </motion.section>
                            ))}

                            {/* Contact */}
                            <motion.section
                                className="terms-contact"
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="contact-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
                                    </svg>
                                </div>

                                <div>
                                    <span className="contact-label">
                                        Questions?
                                    </span>

                                    <h2>Contact</h2>

                                    <p>
                                        If you have questions regarding these
                                        Terms, please contact:
                                    </p>

                                    <strong>Deen Lennon</strong>

                                    <a href="mailto:lennonabu21@yahoo.com">
                                        lennonabu21@yahoo.com
                                    </a>
                                </div>
                            </motion.section>

                            <motion.div
                                className="terms-end"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <span className="end-line" />

                                <p>
                                    Thank you for taking the time to review
                                    these Terms of Service.
                                </p>

                                <span className="end-line" />
                            </motion.div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsOfService;
