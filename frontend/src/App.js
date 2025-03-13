import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import EmployeeForm from "./pages/EmployeeForm";

function App() {
	  return (
		      <Router>
		        <nav className="bg-blue-500 p-6 text-white flex justify-between items-center">
		          <h1 className="text-2xl font-bold">Employee Management</h1>
		          <div className="space-x-6">
		            <Link to="/" className="hover:text-gray-300">Employees</Link>
		            <Link to="/add" className="hover:text-gray-300">Add Employee</Link>
		          </div>
		        </nav>
		        
		        <div className="p-4">
		          <Routes>
		            <Route path="/" element={<EmployeeList />} />
		            <Route path="/add" element={<EmployeeForm />} />
		            <Route path="/edit/:id" element={<EmployeeForm />} />
		          </Routes>
		        </div>
		      </Router>
		    );
}

export default App;

