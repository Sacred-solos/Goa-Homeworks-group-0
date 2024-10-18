import React from "react";
import StudentItem from "./StudentItem";

const StudentList=({students,onEdit,onDelete}) =>{
    return(
        <div>
            <h2>Student list</h2>
            <ul>
                {students.map((student)=> (
                    <StudentItem
                    key={student.id}
                    student={student}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    );
};


export default StudentList;