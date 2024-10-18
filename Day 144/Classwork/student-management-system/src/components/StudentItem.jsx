import React from "react";

const StudentItem = ({student, onEdit, onDelete}) => {
return(
<li>
    <h3>{student.name}</h3>
    <p>Age: {student.age}</p>
    <p>Grade: {student.grade}</p>
    <button onClick={() =>onEdit(student.id)}>Edit</button>
    <button onClick={() =>onDelete(student.id)}>Delete</button>

</li>
)
};

export default StudentItem;