import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EmployeeForm() {
	  const [employee, setEmployee] = useState({ name: "", email: "", position: "", salary: "" });
	  const navigate = useNavigate();
	  const { id } = useParams();

	  useEffect(() => {
		      if (id) {
			            fetch(`http://3.7.80.241:5000/employees/${id}`)
			              .then((res) => res.json())
			              .then((data) => setEmployee(data))
			              .catch((err) => console.error("Error fetching employee:", err));
			          }
		    }, [id]);

	  const handleSubmit = async (e) => {
		      e.preventDefault();
		      const method = id ? "PUT" : "POST";
		      const url = id ? `http://3.7.80.241:5000/employees/${id}` : "http://3.7.80.241:5000/employees";

		      await fetch(url, {
			            method: method,
			            headers: { "Content-Type": "application/json" },
			            body: JSON.stringify(employee),
			          });

		      navigate("/");
		    };

	  return (
		      <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto mt-10">
		        <h2 className="text-3xl font-bold mb-6 text-center">{id ? "Edit Employee" : "Add Employee"}</h2>
		        <form onSubmit={handleSubmit} className="space-y-6">
		          <input type="text" placeholder="Name" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} className="w-full p-3 border rounded" required />
		          <input type="email" placeholder="Email" value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} className="w-full p-3 border rounded" required />
		          <input type="text" placeholder="Position" value={employee.position} onChange={(e) => setEmployee({ ...employee, position: e.target.value })} className="w-full p-3 border rounded" required />
		          <input type="number" placeholder="Salary" value={employee.salary} onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} className="w-full p-3 border rounded" required />
		          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">{id ? "Update Employee" : "Add Employee"}</button>
		        </form>
		      </div>
		    );
}

