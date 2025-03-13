// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb://mongo:27017/employeedb'; // Docker network ke andar connect hoga
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

// Employee Schema & Model
const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    position: String,
    salary: Number
});
const Employee = mongoose.model('Employee', EmployeeSchema);

// Routes
app.get('/employees', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

app.post('/employees', async (req, res) => {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.json(newEmployee);
});

app.put('/employees/:id', async (req, res) => {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEmployee);
});

app.delete('/employees/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

