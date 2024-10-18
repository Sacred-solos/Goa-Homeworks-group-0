import React, {useState} from "react";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
const AdminDashboard =() =>{
    const[students,setStudents] = useState([
        {id:1, name:'Nikolozi popkhadze', age:15,grade:'10'},
        {id:1, name:'Luka chumbashvili', age:15,grade:'2'},
        {id:1, name:'popkhadze nikolozi', age:250,grade:'1'},
    ]);

    const[currentStudent,setCurrentStudent]= useState(null);
    const handleEdit=(id) =>{
        const studentToEdit = students.find(student=>student.id ===id);
        setCurrentStudent(studentToEdit);
    };
    const handleDelete=(id) =>{
        setStudents(students.filter(student=> student.id !==id));
    };
    const handleSubmit =(studentData)=>{
        if(currentStudent){
            setStudents(students.map(student =>(student.id === currentStudent.id ? {...student,...studentData} : student)));

        } else{
            const newStudent ={id:Date.now(),...studentData};
            setStudents([...students,newStudent]);
        }
    };

    const clearCurrent=() =>{
        setCurrentStudent(null);
    };


    return(
        <div>
            <h2>Admin Dashboard</h2>
            <p>Welcome to admin dashboard</p>
            <StudentForm currentStudent={currentStudent} onSubmit={handleSubmit} clearCurrent={clearCurrent}/>
            <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete}/>
        </div>
    );
};

export default AdminDashboard;