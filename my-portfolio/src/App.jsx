import "./App.css";
import {
  Github,
  Layout,
  Server,
  Database,
  Wrench,
  Mail,
  Phone,
  ChevronDown,
  ArrowRight,
  Clock,
  ShoppingBag,
  Mic2,
  Bus,
  LayoutGrid,
  Crosshair,
  Share2,
} from "lucide-react";

const GRID_PATTERN =
  "data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

function App() {
  return (
    <div className="min-h-full w-full relative overflow-auto bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob w-96 h-96 bg-[#00f5d4] opacity-20 top-0 left-0 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="blob w-80 h-80 bg-[#9b5de5] opacity-15 top-1/2 right-0 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="blob w-72 h-72 bg-[#00bbf9] opacity-15 bottom-0 left-1/3 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="mono text-lg font-medium">
            <span className="text-[#00f5d4]">&lt;</span>KD
            <span className="text-[#00f5d4]">/&gt;</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
              Contact
            </a>
          </div>
          <a
            href="https://github.com/dww155"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5d4]/30 hover:bg-[#00f5d4]/10 transition-all"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="mono text-[#00f5d4] text-sm mb-4 tracking-widest">
              HELLO WORLD, I'M
            </p>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Trần Đình Khánh Dư
          </h1>
          <h2
            className="text-2xl md:text-3xl text-gray-400 mb-8 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Web Developer
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Passionate full-stack developer with expertise in building modern web
            applications. I transform ideas into elegant, scalable solutions
            using cutting-edge technologies.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-[#00f5d4] to-[#00bbf9] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#00f5d4]/30 transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all"
            >
              Get In Touch
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mono text-[#00f5d4] text-sm mb-4 tracking-widest">
              WHAT I DO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & Technologies
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f5d4]/20 to-[#00bbf9]/20 flex items-center justify-center mb-4">
                <Layout className="w-6 h-6 text-[#00f5d4]" />
              </div>
              <h3 className="font-semibold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 bg-[#61dafb]/10 text-[#61dafb] rounded-full text-xs mono">
                  React
                </span>
                <span className="skill-tag px-3 py-1 bg-[#3178c6]/10 text-[#3178c6] rounded-full text-xs mono">
                  TypeScript
                </span>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9b5de5]/20 to-[#f15bb5]/20 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-[#9b5de5]" />
              </div>
              <h3 className="font-semibold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 bg-[#6db33f]/10 text-[#6db33f] rounded-full text-xs mono">
                  Spring Boot
                </span>
                <span className="skill-tag px-3 py-1 bg-[#512bd4]/10 text-[#a78bfa] rounded-full text-xs mono">
                  C#/.NET
                </span>
                <span className="skill-tag px-3 py-1 bg-[#3776ab]/10 text-[#3776ab] rounded-full text-xs mono">
                  Python
                </span>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00bbf9]/20 to-[#00f5d4]/20 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-[#00bbf9]" />
              </div>
              <h3 className="font-semibold mb-3">Database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 bg-[#4479a1]/10 text-[#4479a1] rounded-full text-xs mono">
                  MySQL
                </span>
                <span className="skill-tag px-3 py-1 bg-[#336791]/10 text-[#336791] rounded-full text-xs mono">
                  PostgreSQL
                </span>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f15bb5]/20 to-[#9b5de5]/20 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-[#f15bb5]" />
              </div>
              <h3 className="font-semibold mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag px-3 py-1 bg-[#f05032]/10 text-[#f05032] rounded-full text-xs mono">
                  Git
                </span>
                <span className="skill-tag px-3 py-1 bg-[#2496ed]/10 text-[#2496ed] rounded-full text-xs mono">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mono text-[#00f5d4] text-sm mb-4 tracking-widest">
              MY WORK
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pet Shop */}
            <div className="glass rounded-3xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-[#00f5d4]/30 via-[#00bbf9]/20 to-[#9b5de5]/30 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: `url('${GRID_PATTERN}')` }}
                />
                <ShoppingBag className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
                  <span className="text-xs text-gray-500 mono">E-Commerce</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Pet Shop</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  A comprehensive e-commerce platform for pet lovers with REST API
                  backend. Features include product catalog, shopping cart, user
                  authentication, and order management with real-time data
                  synchronization.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    Spring Boot
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    React
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    PostgreSQL
                  </span>
                </div>
                <a
                  href="https://github.com/nhieelam/pet-shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00f5d4] hover:gap-3 transition-all"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Vietnamese RAG */}
            <div className="glass rounded-3xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-[#9b5de5]/30 via-[#f15bb5]/20 to-[#00f5d4]/30 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: `url('${GRID_PATTERN}')` }}
                />
                <Mic2 className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#9b5de5] animate-pulse" />
                  <span className="text-xs text-gray-500 mono">AI / NLP</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Vietnamese RAG System</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  An intelligent Retrieval-Augmented Generation system optimized
                  for Vietnamese language. Combines vector databases with LLMs for
                  accurate question answering and document retrieval.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    LangChain
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    FastAPI
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    ChromaDB
                  </span>
                </div>
                <a
                  href="https://github.com/nhieelam/vietnamese_rag_system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9b5de5] hover:gap-3 transition-all"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Smart School Bus */}
            <div className="glass rounded-3xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-[#00bbf9]/30 via-[#00f5d4]/20 to-[#9b5de5]/30 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: `url('${GRID_PATTERN}')` }}
                />
                <Bus className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00bbf9] animate-pulse" />
                  <span className="text-xs text-gray-500 mono">IoT / Tracking</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Smart School Bus</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Real-time school bus tracking and management system with live
                  location updates. Enables parents to monitor routes and
                  administrators to manage fleet efficiently with REST APIs.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    Spring Boot
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    React
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    MySQL
                  </span>
                </div>
                <a
                  href="https://github.com/ducnhan123-co/DO_AN_CNPM_2025_SGU.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00bbf9] hover:gap-3 transition-all"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Minimarket */}
            <div className="glass rounded-3xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-[#f15bb5]/30 via-[#9b5de5]/20 to-[#00bbf9]/30 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: `url('${GRID_PATTERN}')` }}
                />
                <LayoutGrid className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#f15bb5] animate-pulse" />
                  <span className="text-xs text-gray-500 mono">Desktop App</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Minimarket Manage App</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Desktop application for managing minimarket operations including
                  inventory, sales tracking, and customer management with
                  user-friendly GUI interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    Java Swing
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    MySQL
                  </span>
                </div>
                <a
                  href="https://github.com/ducnhan123-co/DO_AN_JAVA.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f15bb5] hover:gap-3 transition-all"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Shooter Game */}
            <div className="glass rounded-3xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-[#00f5d4]/30 via-[#9b5de5]/20 to-[#f15bb5]/30 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: `url('${GRID_PATTERN}')` }}
                />
                <Crosshair className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
                  <span className="text-xs text-gray-500 mono">Game Dev</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Shooter Game</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Action-packed shooter game featuring smooth gameplay mechanics,
                  enemy AI, scoring system, and progressive difficulty levels for
                  engaging player experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    Pygame
                  </span>
                </div>
                <a
                  href="https://github.com/ducnhan123-co/DO_AN_PYTHON.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#00f5d4] hover:gap-3 transition-all"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass rounded-3xl overflow-hidden card-hover group">
              <div className="h-48 bg-gradient-to-br from-[#9b5de5]/30 via-[#00f5d4]/20 to-[#00bbf9]/30 flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundImage: `url('${GRID_PATTERN}')` }}
                />
                <Share2 className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#9b5de5] animate-pulse" />
                  <span className="text-xs text-gray-500 mono">In Progress</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Social Media Platform</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  Modern social networking application with real-time features
                  including user profiles, posts, comments, likes, messaging,
                  and friend system with push notifications.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    .NET Core
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    SignalR
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    SQL Server
                  </span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs mono text-gray-400">
                    Redis
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="mono text-[#00f5d4] text-sm mb-4 tracking-widest">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:trandinhkhanhdu2005@gmail.com"
              className="glass rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00f5d4]/20 to-[#00bbf9]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-[#00f5d4]" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm break-all">
                trandinhkhanhdu2005@gmail.com
              </p>
            </a>
            <a
              href="tel:0916114536"
              className="glass rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9b5de5]/20 to-[#f15bb5]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-[#9b5de5]" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">0916114536</p>
            </a>
            <a
              href="https://github.com/dww155"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 text-center card-hover group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00bbf9]/20 to-[#00f5d4]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-[#00bbf9]" />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">https://github.com/dww155</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mono text-sm text-gray-500">
            <span className="text-[#00f5d4]">&lt;</span> Built with passion{" "}
            <span className="text-[#00f5d4]">/&gt;</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Trần Đình Khánh Dư. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
