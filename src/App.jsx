import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// --- Constants ---
const PROFILE_IMAGE_URL = '/pavan-img.jpg';

// --- Enhanced Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// --- Helper Section Component ---
function Section({ id, title, children }) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
        >
            <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-8 text-center text-white tracking-tight relative">
                {title}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-indigo-500 rounded-full"></span>
            </motion.h3>
            {children}
        </motion.section>
    );
}

// --- Main Portfolio Component ---
function Portfolio() {
    const form = useRef();
    const [formStatus, setFormStatus] = useState('Send Message');

    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus('Sending...');

        // --- UPDATED with your new Service ID ---
        emailjs.sendForm(
            'service_48qjaaw',    // Your new Service ID
            'template_vzp6e2h',   // Your Template ID
            form.current,
            'OVytPckOL804VhsgD'     // Your Public Key
        )
        .then((result) => {
            console.log(result.text);
            setFormStatus('Message Sent!');
            e.target.reset();
            setTimeout(() => setFormStatus('Send Message'), 4000);
        }, (error) => {
            console.log(error.text);
            setFormStatus('Failed. Try Again.');
            setTimeout(() => setFormStatus('Send Message'), 4000);
        });
    };

    const certifications = [
      { name: 'Hugging Face Agents Course', url: 'https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Pavangunnam/2025-05-07.png', img: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
      { name: 'Deloitte Data Analytics Simulation', url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_cfZ8y8qR3LaCb9hey_1746167363981_completion_certificate.pdf', img: 'https://placehold.co/100x100/86BC25/FFFFFF?text=Deloitte' },
      { name: 'NPTEL: Forest and Wildlife Management', url: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24BT23S75340036730624541', img: 'https://placehold.co/100x100/1A237E/FFFFFF?text=NPTEL' },
      { name: 'AWS Academy Cloud Architecting', url: 'https://www.credly.com/badges/648700bb-9189-4cb3-9dbf-0126f8e6b48f/linked_in_profile', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { name: 'AWS Academy Cloud Foundations', url: 'https://www.credly.com/badges/84c707ab-bd55-4ded-97e0-62d2cec7ecec/linked_in_profile', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { name: 'AWS Solutions Architect Internship', url: 'https://ethnus.com/certverify', img: 'https://placehold.co/100x100/232F3E/FFFFFF?text=Ethnus' },
      { name: 'AI Demystified: ML Essentials with Azure AI', url: '#', img: 'https://placehold.co/100x100/0078D4/FFFFFF?text=Azure' },
      { name: 'Digital Transformation with Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/6181430', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Innovating with Data and Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/6182102', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Infrastructure Modernization with Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/6182674', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Understanding Google Cloud Security', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/6183011', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Introduction to Large Language Models', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/6181310', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Introduction to Generative AI', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5387323', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Introduction to Responsible AI', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/6181215', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Get Started with TensorFlow on Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/6003380', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Getting Started with GKE', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5990918', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Manage Kubernetes in Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5755483', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Store, Process, and Manage Data on Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5990170', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Baseline: Data, ML, AI', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5498140', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Baseline: Infrastructure', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5495916', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Build and Secure Networks in Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5586003', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Create and Manage Cloud Resources', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5564976', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Data Catalog Fundamentals', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5893590', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Insights from Data with BigQuery', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5496706', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Mitigate Threats with Security Command Center', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5756972', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Perform Foundational Data, ML, AI Tasks', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5564232', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Perform Foundational Infrastructure Tasks', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5509009', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Google Cloud Essentials', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5265516', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Networking Fundamentals in Google Cloud', url: 'https://www.cloudskillsboost.google/public_profiles/6e7d2ea4-cb8c-45a1-847b-9c8cec506000/badges/5388396', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png' },
      { name: 'Python 3.4.3 Training', url: 'https://spoken-tutorial.org/software-training/test/verify-test-certificate/', img: 'https://placehold.co/100x100/3776AB/FFFFFF?text=Py' },
      { name: 'Advanced C++ Training', url: 'https://spoken-tutorial.org/software-training/test/verify-test-certificate/', img: 'https://placehold.co/100x100/00599C/FFFFFF?text=C%2B%2B' },
      { name: 'C Training', url: 'https://spoken-tutorial.org/software-training/test/verify-test-certificate/', img: 'https://placehold.co/100x100/A8B9CC/FFFFFF?text=C' },
    ];

    const resume = {
        fullName: 'GUNNAM PAVAN SRI RAM MANIKANTA',
        email: 'pavansriramgunnam@gmail.com',
        phone: '+91 7386887566',
        github: 'https://github.com/pavangunnam19',
        linkedin: 'https://www.linkedin.com/in/pavan-gunnam-5a790a235/',
        education: [
            { school: 'VIT Chennai', degree: 'B.Tech - CSE (AI & ML)', years: '2021 - 2025', gpa: '8.20' },
            { school: 'The Future Kids School', degree: 'ICSE XII', years: '2021', grade: '88.6%' },
            { school: 'The Future Kids School', degree: 'ICSE X', years: '2019', grade: '79.8%' }
        ],
        experience: [
            { role: 'Deepcrafts — RAG Development Intern', period: 'Jan 2025 - Jun 2025', bullets: ['Built a Retrieval-Augmented Generation agent with Gemini API.', 'Implemented context-aware retrieval, embedding indexing, and conversational UI.'] },
            { role: 'Deloitte Forage — Data Analytics Simulation', period: 'May 2025', bullets: ['Developed interactive dashboards with Tableau to visualize key business metrics.', 'Utilized Excel for complex data classification and analysis tasks.'] },
            { role: 'AWS Solutions Architect Intern — Ethnus', period: 'Aug 2023 - Nov 2023', bullets: ['Designed scalable, secure, and cost-effective cloud architectures on AWS.'] },
            { role: 'Google Cloud Foundations Program', period: 'Aug 2023 - Nov 2023', bullets: ['Earned 22 skill badges across AI/ML, Cloud Infrastructure, and Kubernetes.'] },
            { role: 'Marketing Intern — Corizo', period: 'Oct 2023 - Nov 2023', bullets: ['Created engaging social media content and contributed to campaign strategy.'] }
        ],
        projects: [
            { title: 'DocTalk - AI PDF Query Application', desc: 'A Streamlit-based application for querying PDF content. It leverages SentenceTransformer for text embeddings, NearestNeighbors for retrieval, and Google\'s Gemini API for precise answers.', url: 'https://github.com/pavangunnam19/DocTalk' },
            { title: 'Symptomap AI - Interactive 3D Anatomy Explorer', desc: 'An interactive, educational tool for learning human anatomy. Combines a procedurally generated 3D human model with a powerful AI to provide detailed information on demand.', url: 'https://github.com/pavangunnam19/Symptomap-AI' },
            { title: 'Codex Historica - RAG Research Assistant', desc: 'An industry-standard AI research assistant that allows you to upload and chat with historical documents using a sophisticated Retrieval-Augmented Generation (RAG) pipeline.', url: 'https://github.com/pavangunnam19/Codex-Historica' },
            { title: 'Project Prometheus - RL Maze Solver', desc: 'An interactive web app demonstrating Reinforcement Learning. Features an AI agent that learns to solve a randomly generated maze from scratch using the Q-learning algorithm in JavaScript.', url: 'https://github.com/pavangunnam19/Project-Prometheus-Maze-Solver-' },
            { title: 'Advanced Waste Classification System', desc: 'Engineered a high-accuracy CNN model for multi-class waste detection using transfer learning, data augmentation, and fine-tuning techniques.' },
            { title: 'JEE College Admission Predictor', desc: 'Developed a supervised machine learning model to predict college admission chances based on Joint Entrance Examination (JEE) performance data.' }
        ],
        skills: {
            programming: ['Python', 'SQL', 'Java', 'HTML', 'CSS', 'JavaScript'],
            tools: ['TensorFlow', 'PyTorch', 'GCP', 'AWS', 'Docker', 'Kubernetes', 'Tableau', 'Git'],
            extras: ['MS Office Suite', 'Project Management', 'Team Leadership', 'Creative Problem Solving', 'Negotiation']
        },
        extracurricular: ['Active member of the University Dramatics Club (Feb 2023 - Feb 2024), participating in multiple stage productions.'],
        tests: { GRE: 'V162 Q156 AWA 3.0/6.0', IELTS: 'Overall 6.5 (L7.0 R6.0 W6.5 S6.0)' }
    };

    return (
        <div className="relative min-h-screen font-sans overflow-x-hidden">
            {/* The main div no longer needs background colors as they are on the body now */}
            <motion.header
                className="max-w-7xl mx-auto p-4 sm:p-6 flex items-center justify-between sticky top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <div className="flex items-center gap-4">
                    <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-indigo-500 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src={PROFILE_IMAGE_URL} alt={resume.fullName} className="object-cover w-full h-full" />
                    </motion.div>
                    <div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{resume.fullName}</h1>
                        <p className="text-xs sm:text-sm text-indigo-400 font-medium">AI & Machine Learning Engineer</p>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-4 text-sm text-gray-300">
                    {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'].map(sec => (
                        <a key={sec} href={`#${sec.toLowerCase()}`} className="hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded-md">{sec}</a>
                    ))}
                    <motion.a
                        href="#"
                        className="shiny-button px-4 py-2 bg-indigo-600 rounded-md text-sm text-white font-semibold shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.a>
                </nav>
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
            </motion.header>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-28">
                <motion.section
                    className="grid md:grid-cols-5 gap-8 items-center text-center md:text-left"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <div className="md:col-span-3">
                        <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            <span className="block text-white">Building the Future with</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mt-2">Intelligent AI</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto md:mx-0 text-lg text-gray-300">
                            A passionate engineer specializing in building advanced AI systems. From Retrieval-Augmented Generation (RAG) and Computer Vision to deploying scalable machine learning models, my focus is on creating intelligent, real-world solutions.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="mt-8 flex gap-4 justify-center md:justify-start">
                            <motion.a href="#projects" className="shiny-button px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg shadow-indigo-600/40 hover:bg-indigo-500 transition-all duration-300" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                                View My Work
                            </motion.a>
                            <motion.a href="#contact" className="shiny-button-secondary px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                                Get In Touch
                            </motion.a>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeInUp} className="md:col-span-2 hidden md:block" whileHover={{ y: -10, scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 ring-1 ring-white/10">
                                <img src={PROFILE_IMAGE_URL} alt={resume.fullName} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                <Section id="about" title="About Me">
                    <motion.p variants={fadeInUp} className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
                        As a final-year Computer Science student at VIT Chennai with a specialization in AI & Machine Learning, I have a strong foundation in both theoretical concepts and practical application. My journey has taken me from building advanced deep learning models for computer vision to architecting robust cloud solutions. I am driven by a passion for solving complex problems and building production-ready, efficient, and scalable ML systems.
                    </motion.p>
                    <motion.div variants={staggerContainer} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div variants={fadeInUp} className="glass-card">
                            <h4 className="text-xl font-semibold text-white mb-4 text-center">Education</h4>
                            <ul className="space-y-4">
                                {resume.education.map((e, i) => (
                                    <li key={i} className="p-4 bg-white/5 rounded-lg border-l-4 border-indigo-500">
                                        <p className="font-semibold text-white">{e.school} — {e.degree}</p>
                                        <p className="text-sm text-gray-400">{e.years} • GPA/Grade: {e.gpa || e.grade}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="glass-card space-y-8">
                            <div>
                               <h4 className="text-xl font-semibold text-white mb-4 text-center">Standardized Tests</h4>
                                <div className="p-4 bg-white/5 rounded-lg">
                                  <p className="font-semibold text-white">GRE: <span className="text-gray-300 font-normal">{resume.tests.GRE}</span></p>
                                  <p className="font-semibold mt-2 text-white">IELTS: <span className="text-gray-300 font-normal">{resume.tests.IELTS}</span></p>
                                </div>
                            </div>
                             <div>
                                <h4 className="text-xl font-semibold text-white mb-4 text-center">Extracurricular</h4>
                                <div className="p-4 bg-white/5 rounded-lg">
                                  <p className="text-gray-300">{resume.extracurricular[0]}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </Section>

                <Section id="experience" title="Professional Experience">
                    <motion.div variants={staggerContainer} className="space-y-8">
                        {resume.experience.map((exp, i) => (
                            <motion.div variants={fadeInUp} key={i} className="glass-card p-6" whileHover={{ y: -5 }}>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <div className="text-sm text-gray-400 whitespace-nowrap mt-1 sm:mt-0">{exp.period}</div>
                                </div>
                                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
                                    {exp.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <Section id="projects" title="Featured Projects">
                    <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                        {resume.projects.map((p, i) => (
                            <motion.div variants={fadeInUp} key={i} className="glass-card p-6 flex flex-col group" whileHover={{ y: -5, scale: 1.02 }} transition={{type: 'spring', stiffness: 300}}>
                                <h4 className="text-xl font-bold text-white">{p.title}</h4>
                                <p className="mt-2 text-gray-300 flex-grow">{p.desc}</p>
                                {p.url && (
                                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="self-start mt-4 text-sm font-semibold text-indigo-400 hover:text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        View on GitHub &rarr;
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <Section id="skills" title="Technical Skills">
                    <motion.div variants={fadeInUp} className="glass-card p-8">
                        <h4 className="text-lg font-semibold text-white text-center mb-4">Programming & Tools</h4>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[...resume.skills.programming, ...resume.skills.tools].map((s, i) => (<motion.span whileHover={{y: -3, scale: 1.05, color: '#fff', backgroundColor: 'rgba(79, 70, 229, 0.4)'}} key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 shadow-sm cursor-pointer transition-colors">{s}</motion.span>))}
                        </div>
                    
                        <h4 className="text-lg font-semibold text-white text-center mb-4 mt-10">Soft Skills</h4>
                        <p className="mt-3 text-gray-400 text-center">{resume.skills.extras.join(' • ')}</p>
                    </motion.div>
                </Section>

                <Section id="certifications" title="Certifications & Badges">
                    <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((c, i) => (
                            <motion.a variants={fadeInUp} key={i} href={c.url} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4" whileHover={{ scale: 1.05, y: -5 }}>
                                {c.img && <img src={c.img} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/333/fff?text=Img'; }} alt={`${c.name} badge`} className="w-12 h-12 object-contain flex-shrink-0 rounded-md"/>}
                                <span className="font-medium text-white">{c.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </Section>

                <Section id="contact" title="Let's Connect">
                    <motion.p variants={fadeInUp} className="text-lg text-center max-w-3xl mx-auto">I'm currently seeking new opportunities and am open to freelance projects. Feel free to reach out via email or the form below.</motion.p>
                    <motion.div variants={fadeInUp} className="text-center my-6 flex justify-center items-center gap-4 flex-wrap">
                        <a href={`mailto:${resume.email}`} className="text-indigo-400 text-lg hover:underline">{resume.email}</a>
                        <span className="text-gray-500 hidden sm:inline">•</span>
                        <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-lg hover:underline">LinkedIn</a>
                        <span className="text-gray-500 hidden sm:inline">•</span>
                        <a href={resume.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-lg hover:underline">GitHub</a>
                    </motion.div>
                    <motion.form ref={form} onSubmit={sendEmail} variants={fadeInUp} className="glass-card mt-8 max-w-xl mx-auto p-8 grid grid-cols-1 gap-6">
                        <input name="user_name" placeholder="Your Name" required className="p-3 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                        <input name="user_email" type="email" placeholder="Your Email" required className="p-3 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                        <textarea name="message" placeholder="Your Message" required className="p-3 rounded-md bg-white/5 border border-white/10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" rows={5} />
                        <motion.button type="submit" className="shiny-button w-full px-4 py-3 bg-indigo-600 rounded-md text-white font-semibold hover:bg-indigo-500 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} disabled={formStatus !== 'Send Message'}>
                            {formStatus}
                        </motion.button>
                    </motion.form>
                </Section>
            </main>

            <footer className="relative z-10 mt-16 py-8 text-center text-gray-500 text-sm border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} {resume.fullName}. All Rights Reserved.</p>
                <p className="mt-2">Built with React, Vite & Tailwind CSS. Animated with Framer Motion.</p>
            </footer>
        </div>
    );
}

export default Portfolio;
