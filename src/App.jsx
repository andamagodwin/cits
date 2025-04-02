import { Link,Outlet } from "react-router-dom";

const App = () => {
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