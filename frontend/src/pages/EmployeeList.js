

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EmployeeList() {
	  const [employees, setEmployees] = useState([]);

	  useEffect(() => {
		      fetch("http://3.7.80.241:5000/employees")
		        .then((res) => res.json())
		        .then((data) => setEmployees(data))
		        .catch((err) => console.error("Error fetching employees:", err));
		    }, []);

	  return (
		      <div className="bg-white p-6 shadow-md rounded-lg max-w-5xl mx-auto mt-10">
		        <h2 className="text-3xl font-bold mb-6 text-center">Employee List</h2>
		        <table className="w-full border-collapse border border-gray-300 shadow-lg">
		          <thead>
		            <tr className="bg-blue-500 text-white">
		              <th className="border p-3">Name</th>
		              <th className="border p-3">Email</th>
		              <th className="border p-3">Position</th>
		              <th className="border p-3">Salary</th>
		              <th className="border p-3">Actions</th>
		            </tr>
		          </thead>
		          <tbody>
		            {employees.map((emp, index) => (
				                <tr key={index} className="text-center even:bg-gray-100 hover:bg-gray-200">
				                  <td className="border p-3">{emp.name}</td>
				                  <td className="border p-3">{emp.email}</td>
				                  <td className="border p-3">{emp.position}</td>
				                  <td className="border p-3">₹ {emp.salary}</td>
				                  <td className="border p-3">
				                    <Link to={`/edit/${emp._id}`} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
				                      Edit
				                    </Link>
				                  </td>
				                </tr>
				              ))}
		          </tbody>
		        </table>
		      </div>
		    );
}

