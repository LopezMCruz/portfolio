// App.js
import React, { useState } from 'react';
import { User, Briefcase, Mail, Menu, X } from 'lucide-react';

// Mock Projects Data
const projects = [
  {
    title: 'Homeroom Classics',
    description: 'A full-featured e-commerce platform with a custom CMS, and integrated payment gateway. Built with the MERN stack.',
    tags: ['Django', 'Tailwind CSS', 'sqlite', 'HTMX',],
    liveUrl: '#',
    sourceUrl: '#',
    imageUrl: 'https://placehold.co/600x400/334155/ffffff?text=Homeroom Classics'
  },
  {
    title: 'Multiplayer Wordsearch Game',
    description: 'A collaborative project management tool with real-time updates, task tracking, and team communication features.',
    tags: ['PHP', 'Javascript', 'CSS', 'HTMX', 'MySQL'],
    liveUrl: '#',
    sourceUrl: '#',
    imageUrl: 'https://placehold.co/600x400/334155/ffffff?text=Project+Mgmt'
  },
];

// Header Component
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = (
        <>
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </>
    );

    return (
        <header className="bg-slate-900/80 backdrop-blur-sm text-white sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-sky-400">Your Name</a>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks}
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-slate-800">
                    <div className="px-6 pb-4 flex flex-col space-y-4">
                       {navLinks}
                    </div>
                </div>
            )}
        </header>
    );
};


// Hero Section
const Hero = () => (
    <section id="hero" className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hi, I'm a <span className="text-sky-400">Software Developer</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                I specialize in building exceptional, high-quality websites and applications for the web.
            </p>
            <a href="#projects" className="mt-8 inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
                View My Work
            </a>
        </div>
    </section>
);

// About Section
const About = () => (
    <section id="about" className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                <User className="inline-block mr-2 text-sky-400" /> About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 text-center">
                    <img
                        src="https://placehold.co/400x400/1e293b/ffffff?text=You"
                        alt="Your Name"
                        className="rounded-full w-64 h-64 mx-auto border-4 border-sky-500 shadow-lg"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="text-slate-300 mb-4">
                        Hello! I'm a passionate software developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in front-end and back-end technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                    </p>
                    <p className="text-slate-300 mb-6">
                        My journey in web development started with a deep curiosity for how things work on the internet, which has since grown into a career where I can build meaningful products. I'm proficient in the MERN stack, and I'm always eager to learn new technologies and improve my craft.
                    </p>
                    <h3 className="text-xl font-semibold text-sky-400 mb-4">My Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML5 & CSS3', 'Tailwind CSS', 'Docker', 'Git & GitHub'].map(skill => (
                            <span key={skill} className="bg-slate-700 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Projects Section
const Projects = () => (
    <section id="projects" className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                <Briefcase className="inline-block mr-2 text-sky-400" /> My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-slate-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-slate-700 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <div className="flex items-center space-x-4 mt-auto">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">Live Demo</a>
                                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="border border-slate-500 hover:bg-slate-700 text-slate-300 font-semibold py-2 px-4 rounded-lg transition-colors">Source Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Contact Section
const Contact = () => (
    <section id="contact" className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                <Mail className="inline-block mr-2 text-sky-400" /> Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
                <p className="text-center text-slate-300 mb-8">
                    I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hi, feel free to reach out!
                </p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:ring-sky-500 focus:border-sky-500 transition" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:ring-sky-500 focus:border-sky-500 transition" placeholder="your.email@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:ring-sky-500 focus:border-sky-500 transition" placeholder="Your message..."></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-6">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </div>
    </footer>
);


export default function App() {
  return (
    <div className="bg-slate-900">
        <Header />
        <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}
