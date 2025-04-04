import MeetingForm from "../../components/meetingForm"
import { useAuthContext } from "../../context/authContext"

export default function SchedulePage() {
    const {auth} = useAuthContext()


    return (
        <div>
            <h1>Schedule</h1>
            <MeetingForm user={auth.user} />
            
        </div>
    )
}