import { useState } from 'react'
import PropTypes from 'prop-types'
import { submitMembershipApplication } from '../lib/supabase'

const MembershipModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    yearOfStudy: '',
    experienceLevel: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const result = await submitMembershipApplication(formData)
    
    if (result.success) {
      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        studentId: '',
        yearOfStudy: '',
        experienceLevel: '',
        message: ''
      })
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 2000)
    } else {
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto border border-blue-500/20">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">
            Join <span className="text-yellow-400">CITS A.I Research</span>
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@university.edu"
              />
            </div>

            {/* Student ID */}
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-300 mb-2">
                Student ID (Optional)
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="12345678"
              />
            </div>

            {/* Year of Study */}
            <div>
              <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-300 mb-2">
                Year of Study *
              </label>
              <select
                id="yearOfStudy"
                name="yearOfStudy"
                required
                value={formData.yearOfStudy}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-300 mb-2">
                Programming/AI Experience *
              </label>
              <select
                id="experienceLevel"
                name="experienceLevel"
                required
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your level</option>
                <option value="Beginner">Beginner (New to programming)</option>
                <option value="Intermediate">Intermediate (Some programming experience)</option>
                <option value="Advanced">Advanced (Experienced programmer)</option>
                <option value="Expert">Expert (Professional/Research experience)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Why do you want to join? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your interest in AI/ML and what you hope to achieve..."
              />
            </div>
          </div>

          {/* Submit Status */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-900/50 border border-green-500 rounded-md">
              <p className="text-green-400 text-sm">
                🎉 Application submitted successfully! We&apos;ll be in touch soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-md">
              <p className="text-red-400 text-sm">
                ❌ Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-yellow-500 text-white py-3 px-4 rounded-md font-semibold hover:from-blue-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>

          {/* Privacy Note */}
          <p className="mt-4 text-xs text-gray-400 text-center">
            Your information will only be used for club membership purposes and will not be shared with third parties.
          </p>
        </form>
      </div>
    </div>
  )
}

MembershipModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default MembershipModal
