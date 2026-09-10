
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/PrivacyPolicy.css";

const sections = [
    {
        number: "01",
        title: "Contact Form",
        content: (
            <>
                <p>
                    Information submitted through the contact form will be used
                    to respond to your inquiry or discuss a potential project.
                </p>

                <p>
                    Contact information may be retained for a reasonable period
                    where necessary to maintain communication, provide services,
                    maintain records, or comply with legal obligations.
                </p>
            </>
        ),
    },

    {
        number: "02",
        title: "Professional and Project Information",
        content: (
            <>
                <p>
                    If you contact me regarding a software, web design,
                    cybersecurity, digital forensics, or electronics project,
                    you may voluntarily provide technical or business
                    information.
                </p>

                <p>
                    You should only provide information that you are legally
                    authorized to share.
                </p>

                <p>
                    I do not ask for confidential client information,
                    credentials, private keys, or sensitive security information
                    through ordinary website forms unless a secure communication
                    channel has specifically been provided.
                </p>

                <div className="privacy-notice">
                    <div className="notice-icon">
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
                        <strong>Protect sensitive information</strong>

                        <p>
                            Avoid sending passwords, private keys, API secrets,
                            authentication tokens, or confidential credentials
                            through ordinary website forms.
                        </p>
                    </div>
                </div>
            </>
        ),
    },

    {
        number: "03",
        title: "Cybersecurity and Digital Forensics",
        content: (
            <>
                <p>
                    All demonstrations and examples are provided for
                    educational, research, and authorized-testing purposes
                    only.
                </p>

                <p>
                    Any techniques, tools, or procedures shown should only be
                    used on systems, networks, applications, or data for which
                    proper authorization has been obtained.
                </p>

                <p>
                    I do not encourage or endorse unauthorized access,
                    exploitation, malicious use of the information, techniques,
                    or tools presented in this portfolio.
                </p>

                <div className="privacy-warning">
                    <div className="notice-icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                    </div>

                    <div>
                        <strong>Security responsibility</strong>

                        <p>
                            I am not responsible or liable for damage, loss,
                            disruption, unauthorized access, data loss, legal
                            consequences, or other harm resulting from misuse or
                            unauthorized application of the information
                            provided.
                        </p>
                    </div>
                </div>

                <p>
                    Users are solely responsible for ensuring that their
                    activities comply with applicable laws, regulations, and
                    permissions.
                </p>
            </>
        ),
    },

    {
        number: "04",
        title: "Digital Electronics Information",
        content: (
            <>
                <p>
                    If you contact me regarding electronics, robotics, or
                    embedded-system projects, you may provide information such
                    as:
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
                    information, and unnecessary personal information before
                    submitting technical materials.
                </p>
            </>
        ),
    },

    {
        number: "05",
        title: "Information You Choose to Provide",
        content: (
            <>
                <p>
                    You are generally free to browse this portfolio without
                    directly providing personal information.
                </p>

                <p>
                    Personal or project-related information may be provided
                    voluntarily when you choose to contact me, submit an
                    inquiry, or discuss a potential project.
                </p>

                <p>
                    Only information reasonably necessary for communication or
                    the relevant purpose should be submitted.
                </p>
            </>
        ),
    },

    {
        number: "06",
        title: "Use of Information",
        content: (
            <>
                <p>
                    Information you voluntarily provide may be used to:
                </p>

                <ul>
                    <li>Respond to your messages or inquiries.</li>
                    <li>Discuss potential projects or services.</li>
                    <li>Provide requested information.</li>
                    <li>Maintain relevant communication records.</li>
                    <li>Meet applicable legal or administrative obligations.</li>
                </ul>

                <p>
                    Information will not knowingly be used for purposes
                    unrelated to the reason it was provided without an
                    appropriate basis for doing so.
                </p>
            </>
        ),
    },

    {
        number: "07",
        title: "Data Security",
        content: (
            <>
                <p>
                    Reasonable measures may be used to protect information
                    submitted through this website and associated services.
                </p>

                <p>
                    However, no method of transmission or electronic storage
                    can be guaranteed to be completely secure.
                </p>

                <p>
                    You should therefore avoid submitting highly sensitive
                    information through ordinary website communication
                    channels.
                </p>
            </>
        ),
    },

    {
        number: "08",
        title: "Third-Party Services",
        content: (
            <>
                <p>
                    This website may use or link to third-party services such
                    as hosting providers, APIs, analytics platforms, software
                    repositories, authentication services, open-source
                    packages, or social-media platforms.
                </p>

                <p>
                    These services may collect or process information according
                    to their own privacy policies and terms.
                </p>

                <p>
                    You should review the privacy policies of third-party
                    services when interacting with them.
                </p>
            </>
        ),
    },

    {
        number: "09",
        title: "Cookies and Similar Technologies",
        content: (
            <>
                <p>
                    This website may use cookies or similar technologies where
                    necessary for functionality, security, preferences, or
                    analytics.
                </p>

                <p>
                    The specific technologies used may change as the website
                    evolves.
                </p>
            </>
        ),
    },

    {
        number: "10",
        title: "Data Retention",
        content: (
            <>
                <p>
                    Information may be retained only for as long as reasonably
                    necessary for communication, project-related purposes,
                    record keeping, legal obligations, or other legitimate
                    purposes.
                </p>

                <p>
                    Retention periods may vary depending on the nature of the
                    information and the reason it was collected.
                </p>
            </>
        ),
    },

    {
        number: "11",
        title: "Your Responsibilities",
        content: (
            <>
                <p>
                    When submitting information through this website, you are
                    responsible for ensuring that the information you provide
                    is lawful and that you have permission to share it.
                </p>

                <p>
                    Do not intentionally submit malicious code, stolen
                    credentials, confidential information belonging to another
                    party, or information you are not authorized to disclose.
                </p>
            </>
        ),
    },

    {
        number: "12",
        title: "Changes to This Privacy Policy",
        content: (
            <p>
                This Privacy Policy may be updated periodically to reflect
                changes to the website, technologies, services, business
                practices, or applicable legal requirements.
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

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <main id="privacy-policy" className="legal-page">
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
                            Privacy & Security
                        </span>

                        <h1>Privacy Policy</h1>

                        <p className="legal-subtitle">
                            Learn how information voluntarily provided through
                            this portfolio may be handled, protected, and used.
                        </p>

                        <div className="legal-date">
                            <span>Last Updated</span>
                            <strong>September 2026</strong>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="legal-section">
                <div className="legal-container">
                    <div className="legal-layout">
                        {/* Introduction */}
                        <motion.div
                            className="privacy-intro"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="intro-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>

                            <div>
                                <h2>Your Privacy Matters</h2>

                                <p>
                                    This Privacy Policy explains how information
                                    voluntarily provided through this portfolio
                                    may be handled when you contact me, discuss
                                    a project, or interact with website
                                    services.
                                </p>

                                <p>
                                    The goal is to be transparent about the
                                    types of information that may be provided
                                    and how that information may be used.
                                </p>
                            </div>
                        </motion.div>

                        {/* Policy Sections */}
                        <article className="legal-content">
                            {sections.map((section) => (
                                <motion.section
                                    className="privacy-section"
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
                                className="privacy-contact"
                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
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
                                        Privacy Questions?
                                    </span>

                                    <h2>Contact</h2>

                                    <p>
                                        If you have questions regarding this
                                        Privacy Policy or how information is
                                        handled, please contact:
                                    </p>

                                    <strong>Deen Lennon</strong>

                                    <a href="mailto:lennonabu21@yahoo.com">
                                        lennonabu21@yahoo.com
                                    </a>
                                </div>
                            </motion.section>

                            {/* Footer */}
                            <motion.div
                                className="privacy-end"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <span className="end-line" />

                                <p>
                                    Thank you for taking the time to review this
                                    Privacy Policy.
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

export default PrivacyPolicy;
