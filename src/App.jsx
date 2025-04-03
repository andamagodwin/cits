import { Link,Outlet } from "react-router-dom";
import { useAuthContext } from "./context/authContext";
import { useNavigate } from "react-router-dom";

// import useAuth from "./hooks/useAuth";

const App = () => {
  const navigate = useNavigate();
  const {auth,isLoading} = useAuthContext();

  if(isLoading){
    return <div>Loading...</div>
  }

  if(!auth){
    navigate("/login");
  }




  console.log("auth",auth);

  


 






  return (
    <div className="flex w-full h-screen bg-green-500">
      <div className="w-1/4 bg-blue-500">
        <h1>sidebar</h1>
        <ul>
          <li><Link>Dashboard</Link></li>
          <li> <Link to="/lectures">Lectures</Link> </li>
          <li> <Link to="/schedule">Schedule</Link></li>
          <li>Students</li>
        </ul>
      </div>
      <div>
        <h1>Main content</h1>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )

}


export default App;