import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext"

export default function SchedulePage() {
    const [meetingLink, setMeetingLink] = useState('');
    const [meetings, setMeetings] = useState([]);
    const {auth} = useAuthContext()


    //fetch the prevous meetings for the user from the backend
    useEffect(() => {
        const fetchMeetings = async () => {
          try {
            const response = await fetch(`http://localhost:5000/api/callendar/get-meetings/${auth.user.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMeetings(data);
          } catch (error) {
            console.error('Error fetching meetings:', error);
          }
        };
        fetchMeetings();
    })
    

    const requestGoogleCalendarAccess = () => {
        // Redirect user to your BACKEND endpoint (not directly to Google)
        window.location.href = 'http://localhost:5000/api/auth/callendar';
      };

    const createMeeting = async () => {
        // Step 3: Create a meeting (after calendar access granted)
        try {
          const response = await fetch('http://localhost:5000/api/callendar/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId: auth.user.id,
              title: 'Team Sync',
              startTime: '2025-04-15T09:00:00',
              endTime: '2025-04-15T10:00:00',
              attendees: ['andamagodwinezra@gmail.com']
            })
          })
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          const data = await response.json()
          setMeetingLink(data.meetLink)

        } catch (error) {
          console.error('Error creating meeting:', error)
        }

      


        // try {
        //   const response = await fetch('http://localhost:5000/api/callendar/create', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       userId: auth.user.id, // assuming user object has id
        //     }),
        //   });
        //   const data = await response.json();
        //   setMeetingLink(data.meetingUri);
        // } catch (error) {
        //   console.error('Error creating meeting:', error);
        // }
      };


    return (
        <div>
            <h1>Schedule</h1>

            
            <h1>Authorize your google account</h1>

             {/* Step 2: Request calendar access (after sign-in) */}
            {auth.user && (
              <button onClick={requestGoogleCalendarAccess}>
                Grant Calendar Access
              </button>
            )}

            <button onClick={createMeeting}>Create Meeting</button>

            {meetingLink && (
                <div>
                    <h2>Meeting Link:</h2>
                    <p>{meetingLink}</p>
                </div>
            )}

            <div>
              <h1>My previous Meetings</h1>

              {meetings.map((meeting) => (
                <div key={meeting.id}>
                  <h2>{meeting.title}</h2>
                  <p>Start Time: {meeting.startTime}</p>
                  <p>End Time: {meeting.endTime}</p>
                </div>
              ))}

            </div>

            
        </div>
    )
}