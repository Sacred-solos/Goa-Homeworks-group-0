import React, { useState } from 'react';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [group, setGroup] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateStudent = () => {
    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = { name, surname, age, group };
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      const newStudent = { name, surname, age, group };
      setStudents([...students, newStudent]);
    }
    setName('');
    setSurname('');
    setAge('');
    setGroup('');
  };

  const editStudent = (index) => {
    const student = students[index];
    setName(student.name);
    setSurname(student.surname);
    setAge(student.age);
    setGroup(student.group);
    setEditIndex(index);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    if (editIndex === index) {
      setName('');
      setSurname('');
      setAge('');
      setGroup('');
      setEditIndex(null);
    }
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <h3>{editIndex !== null ? 'Edit Student' : 'Add Student'}</h3>
      <form onSubmit={(e) => { e.preventDefault(); addOrUpdateStudent(); }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} placeholder="Group" required />
        <button type="submit">{editIndex !== null ? 'Update Student' : 'Add Student'}</button>
      </form>

      <h3>Student List</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} {student.surname}, Age: {student.age}, Group: {student.group}
            <button onClick={() => editStudent(index)}>Change</button>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;