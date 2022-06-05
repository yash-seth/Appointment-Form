import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [appointmentDetails, setAppointmentDetails] = useState({
    "name":"",
    "email":"",
    "phoneNum":"",
    "date":"dd-mm-yyyy"
  })
  const handleChange = e => {
    const { name, value } = e.target;
    setAppointmentDetails(prevState => ({
        ...prevState,
        [name]: value
        }));
      };

      const submitAppointmentDetais = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/add-appointment',appointmentDetails).then(res => console.log(res))
        setAppointmentDetails({
          "name":"",
          "email":"",
          "phoneNum":"",
          "date":""
        })
      }

      const clearFields = (e) =>{
        e.preventDefault();
        setAppointmentDetails({
          "name":"",
          "email":"",
          "phoneNum":"",
          "date":""
        })
      }
  return (
    <div className="App">
      <h1>Appointment Form</h1>
      <form className='form-group form-inline'>
        <label htmlFor='name'>Enter your name: </label>
        <input type="text" name="name" value={appointmentDetails.name} onChange={handleChange}/>
        <br/><br/>
        <label htmlFor='email'>Enter your email: </label>
        <input type="text" name="email" value={appointmentDetails.email} onChange={handleChange}/>
        <br/><br/>
        <label htmlFor='phoneNum'>Enter your phone number: </label>
        <input type="text" name="phoneNum" value={appointmentDetails.phoneNum} onChange={handleChange}/>
        <br/><br/>
        <label htmlFor='date'>Select the date: </label>
        <input type="date" name="date" value={appointmentDetails.date} onChange={handleChange}/>
        <br/><br/>
        <div className="btn-group">
          <button type="submit" onClick={submitAppointmentDetais} class="btn btn-primary mb-3">Submit</button>
          <button type='clear' onClick={clearFields} class="btn btn-danger mb-3">Clear</button>
        </div>
      </form>
    </div>
  );
}

export default App;
