import { useState } from 'react';
import './App.css';

function App() {
  const[input,setInput] = useState({FName: "",LName: "",Email: "",StreetAdd: "",City: "",State: "",PostalCode: ""});
  console.log(input);
  function changeHandler(event){
      setInput( prevState =>{
        return{
          ...prevState,
          [event.target.name] : event.target.value
        }
      })
  }
  return (
    <div className="App">
      <div className='commonSection'>
        <br />  <br />

        <label htmlFor='f_name'>First Name</label>
        <input id='f_name' placeholder='Raju' type='text' value={input.FName} name='FName' onChange={changeHandler}></input>

        <br />  <br />

        <label htmlFor='l_name'>Last Name</label>
        <input id='l_name' placeholder='chomu' type='text' value={input.LName} name='LName' onChange={changeHandler}></input>

        <br /><br />

        <label htmlFor='Email'>Email Address</label>
        <input id='Email' type='email' placeholder='abc@gmail.com' value={input.Email} name='Email' onChange={changeHandler}></input>

        <br /><br />
{/* fdjfhj */}
        <label htmlFor='country'>Country</label>
      <select id='country'>
        <option>India</option>
        <option>US</option>
        <option>Canada</option>
        <option>Maxico</option>
      </select>

        <br />  <br />

        <label htmlFor='StreetAdd'>Street Address</label>
        <input id='StreetAdd' type='text' value={input.StreetAdd} name='StreetAdd' placeholder='B-25C' onChange={changeHandler}></input>

        <br /><br />

        <label htmlFor='city'>City</label>
        <input id='city' type = 'text' placeholder='Kota' value={input.City} name='City' onChange={changeHandler}></input>

        <br />  <br />

        <label htmlFor='state'>State / Province</label>
        <input id='state' type='text' name='State' value={input.State} placeholder='Rajasthan' onChange={changeHandler}></input>

        <br />  <br />

        <label htmlFor='Postal'>Postal Code</label>
        <input id='Postal' type='number' value={input.PostalCode} name='PostalCode' placeholder='110077' onChange={changeHandler}></input>

      </div>
    </div>
  );
}

export default App;
