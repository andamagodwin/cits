# CITS A.I Research Club Website

A modern, responsive landing page for the CITS A.I Research Club built with React, Vite, and Tailwind CSS.

## 🚀 Features

- Beautiful, modern UI with blue and yellow branding
- Responsive design that works on all devices
- Smooth animations and hover effects
- Membership application modal with Supabase integration
- Contact form for potential new members

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Supabase Setup

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and anon key

#### Create the Database Table
Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE membership_applications (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  student_id TEXT,
  year_of_study TEXT NOT NULL,
  experience_level TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts for anyone
CREATE POLICY "Anyone can submit applications" ON membership_applications
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows admins to read all applications
CREATE POLICY "Admins can read applications" ON membership_applications
  FOR SELECT USING (auth.role() = 'authenticated');
```

#### Configure Environment Variables
Update `src/lib/supabase.js` with your actual Supabase credentials:

```javascript
const supabaseUrl = 'https://your-project-id.supabase.co'
const supabaseKey = 'your-anon-key'
```

### 3. Run the Development Server
```bash
npm run dev
```

## 📝 Database Schema

The membership applications are stored with the following fields:
- `id`: Auto-generated primary key
- `name`: Full name of the applicant
- `email`: Email address
- `student_id`: Student ID (optional)
- `year_of_study`: Academic year level
- `experience_level`: Programming/AI experience level
- `message`: Why they want to join
- `submitted_at`: Timestamp of submission

## 🎨 Customization

### Brand Colors
The website uses a blue and yellow color scheme defined in `tailwind.config.js`:
- Blue: `#3b82f6` (primary)
- Yellow: `#fbbf24` (accent)

### Content Updates
Update the club information in `src/App.jsx`:
- Member count
- Statistics
- Activities description
- Contact information

## 🔧 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a service for database
- **GSAP** - Animation library (already installed)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

## 📊 Viewing Applications

To view submitted applications, you can:
1. Use the Supabase dashboard
2. Build an admin panel (future enhancement)
3. Query the database directly

## 🎯 Future Enhancements

- Admin dashboard for viewing applications
- Email notifications for new applications
- Integration with calendar for meeting schedules
- Member portal with login functionality
- Project showcase section

## 📧 Contact

For questions about the website or club membership, contact the CITS A.I Research Club.

---

Built with ❤️ and lots of ☕ by the CITS A.I Research Club
