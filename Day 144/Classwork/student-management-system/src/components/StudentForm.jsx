import React, {useState,useEffect} from "react";

const StudentForm =({currentStudent,onSubmit,clearCurrent}) => {
    const[student,setStudent] = useState({name:'',age:'',grade:''})
    
    useEffect(()=>{
        if(currentStudent){
            setStudent(currentStudent);
        } else{
            setStudent({name:'',age:'',grade:''});
        }
    },[currentStudent]);
    const handleChange =(e) =>{
        const{name,value} =e.target;
        setStudent({...student,[name]:value});

    };
    const handleSubmit =(e) =>{
        e.preventDefault();
        onSubmit(student);
        clearCurrent();
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Full name"
            value={student.name}
            onChange={handleChange}
            required
            ></input>
            <input
            type="number"
            name="age"
            placeholder="Age"
            value={student.age}
            onChange={handleChange}
            required
            ></input>
            <input
            type="number"
            name="grade"
            placeholder="Grade"
            value={student.grade}
            onChange={handleChange}
            required
            ></input>
            <button type="submit">{currentStudent ? 'Update Student' : 'Add Student'}</button>
            {currentStudent && <button type="button" onClick={clearCurrent}>Cancel</button>}
        </form>

    );
};


export default StudentForm;