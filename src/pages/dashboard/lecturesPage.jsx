import { useState } from "react";
import { useAuthContext } from "../../context/authContext"

export default function LecturesPage() {
    const [meetingLink, setMeetingLink] = useState('');
    const { auth,logout } = useAuthContext()

    const createmeetingspace = async () => {
        
        try {
            const response = await fetch('http://localhost:5000/api/meet/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: auth.user.id,
                })
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setMeetingLink(data.meetUrl)
        } catch (error) {
            console.error('Error creating meeting:', error) 
        }
    }
    return (
        <div>

            <button onClick={logout}>Logout</button>

            <h1>Lectures</h1>
            <button onClick={createmeetingspace} >Creat a meeting using the rest Api</button>
            {meetingLink && (
                <div>
                    <h2>Meeting Link:</h2>
                    <p>{meetingLink}</p>
                </div>
            )}
        </div>
    )
}