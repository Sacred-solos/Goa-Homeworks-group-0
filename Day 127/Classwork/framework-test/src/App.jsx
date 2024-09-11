import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data,setData] = useState(0)
const handleSubmit = (i) =>{
  console.log(name.value)
  i.preventDefault();

  const formData = {
    name: i.target.name.value,
    surname: i.target.surname.value,
    age: i.target.age.value,
    mail: i.target.mail.value,
    place: i.target.place.value,
  }
  setData((prevData)=>[...prevData,formData]);
};
  return (
    <>
      <div>
   <form onSubmit={handleSubmit} id="form">
    <input type='text' placeholder ='enter name' name='name' className="border p-2 w-full"/><br/>
    <input type='text' placeholder ='enter surname' name='surname' className="border p-2 w-full"/><br/>
    <input type='number' placeholder ='enter age' name='age' className="border p-2 w-full"/><br/>
    <input type='email' placeholder ='enter mail' name='mail' className="border p-2 w-full"/><br/>
    <input type='text' placeholder ='enter address' name='place' className="border p-2 w-full"/><br/>
    <button type="submit">submit</button>


   </form>
      </div>
    </>
  )
}

export default App
