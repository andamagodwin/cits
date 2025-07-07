import { useState } from 'react'
import MembershipModal from './components/MembershipModal'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 bg-slate-900/90 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  CITS <span className="text-yellow-400">A.I Research</span>
                </h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#activities" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Activities</a>
                <a href="#achievements" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Achievements</a>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95">
              <a href="#about" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#activities" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Activities</a>
              <a href="#achievements" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Achievements</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">CITS A.I Research Club</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A community of 25+ passionate students exploring the frontiers of Artificial Intelligence, Machine Learning, and Python programming
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openModal}
                className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-yellow-600 transition-all transform hover:scale-105"
              >
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About Our <span className="text-yellow-400">Research Club</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                CITS A.I Research Club is a vibrant community of 25+ dedicated students at our university who are passionate about artificial intelligence and machine learning. We believe in learning by doing, solving real-world problems, and pushing the boundaries of what&apos;s possible with AI.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our club serves as a platform for students to dive deep into Python programming, explore machine learning algorithms, and work on exciting projects that make a difference. We foster a collaborative environment where everyone can learn, grow, and contribute.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Python Programming</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">AI Research</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Problem Solving</span>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg blur opacity-75"></div>
              <img 
                src="/images/group.jpg" 
                alt="CITS A.I Research Club Group Photo" 
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="text-yellow-400">Do</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From learning fundamentals to tackling complex ML problems, our activities are designed to build expertise and foster innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4 animate-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Python Programming</h3>
              <p className="text-gray-300">
                Building strong foundations in Python programming, from basic syntax to advanced concepts essential for AI development.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4 animate-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300">
                Exploring ML algorithms starting with linear regression and progressing to more complex models and deep learning techniques.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4 animate-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Problem Solving</h3>
              <p className="text-gray-300">
                Tackling real-world challenges and cool ML problems that push our understanding and practical skills to new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-gray-300">Problems Solved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2+</div>
              <div className="text-gray-300">ML Models Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
              <div className="text-gray-300">Semesters Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-yellow-400">Journey</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From introduction to Python to mastering linear regression, here&apos;s what we&apos;ve accomplished together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">✅ Completed</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Introduction to Python Programming
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Linear Regression ML Models
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Data Manipulation with Pandas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Statistical Analysis Fundamentals
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">🚀 Coming Next Semester</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Advanced Machine Learning Algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Deep Learning Fundamentals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Neural Networks Implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Computer Vision Projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our <span className="text-yellow-400">Community</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to dive into the world of AI and ML? Connect with us and be part of our growing community of learners and innovators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={openModal}
              className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-yellow-600 transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="text-gray-400 text-sm">
            <p>CITS A.I Research Club • University Campus • Building a smarter tomorrow, one algorithm at a time</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 CITS A.I Research Club. Built with ❤️ and lots of ☕
          </p>
        </div>
      </footer>

      {/* Membership Modal */}
      <MembershipModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App