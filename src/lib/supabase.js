import { createClient } from '@supabase/supabase-js'

// Supabase configuration - update these with your actual credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Function to submit membership application
export const submitMembershipApplication = async (formData) => {
  try {
    const { data, error } = await supabase
      .from('membership_applications')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          student_id: formData.studentId,
          year_of_study: formData.yearOfStudy,
          experience_level: formData.experienceLevel,
          message: formData.message,
          submitted_at: new Date().toISOString()
        }
      ])

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error submitting application:', error)
    return { success: false, error: error.message }
  }
}
