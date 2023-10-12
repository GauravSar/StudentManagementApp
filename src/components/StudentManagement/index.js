import './index.css';
import React, { Component } from 'react';


class StudentManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [], 
      newStudent: {
        studentName: '',
        fatherName: '',
        motherName: '',
        age: '',
        homeAddress: '',
        registrationDate: '',
      },
      selectedStudentIndex: null,
    };
  }

  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newStudent: {
        ...prevState.newStudent,
        [name]: value,
      },
    }));
  };

  
  addStudent = () => {
    const { students, newStudent } = this.state;
    this.setState({
      students: [...students, newStudent],
      newStudent: {
        studentName: '',
        fatherName: '',
        motherName: '',
        age: '',
        homeAddress: '',
        registrationDate: '',
      },
    });
  };

  
  updateStudent = () => {
    const { students, newStudent, selectedStudentIndex } = this.state;
    if (selectedStudentIndex !== null) {
      students[selectedStudentIndex] = newStudent;
      this.setState({
        students,
        selectedStudentIndex: null,
        newStudent: {
          studentName: '',
          fatherName: '',
          motherName: '',
          age: '',
          homeAddress: '',
          registrationDate: '',
        },
      });
    }
  };

  
  deleteStudent = (index) => {
    const { students } = this.state;
    students.splice(index, 1);
    this.setState({ students });
  };

  
  selectStudent = (index) => {
    const { students } = this.state;
    const selectedStudent = students[index];
    this.setState({
      selectedStudentIndex: index,
      newStudent: { ...selectedStudent },
    });
  };

  render() {
    const { students, newStudent, selectedStudentIndex } = this.state;

    return (
      <div className='bg-container'>
        <h1 className='app-heading'>Student Management</h1>

        
        <form>
          <input 
            className='search-input'
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={newStudent.studentName}
            onChange={this.handleInputChange}
          />
          <input
            className='search-input'
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            value={newStudent.fatherName}
            onChange={this.handleInputChange}
          />
          <input
             className='search-input'
            type="text"
            name="motherName"
            placeholder="Mother's Name"
            value={newStudent.motherName}
            onChange={this.handleInputChange}
          />
          <input
             className='search-input'
            type="number"
            name="age"
            placeholder="Age"
            value={newStudent.age}
            onChange={this.handleInputChange}
          />
          <input
             className='search-input'
            type="text"
            name="homeAddress"
            placeholder="Home Address"
            value={newStudent.homeAddress}
            onChange={this.handleInputChange}
          />
          <input
             className='search-input'
            type="date"
            name="registrationDate"
            placeholder="Registration Date"
            value={newStudent.registrationDate}
            onChange={this.handleInputChange}
          />
          {selectedStudentIndex === null ? (
            <button className='button' type="button" onClick={this.addStudent}>
              Add Student
            </button>
          ) : (
            <button type="button" onClick={this.updateStudent}>
              Update Student
            </button>
          )}
        </form>

       
        <table className='table'>
          <thead>
            <tr className='table-row'>
              <th className='row-name'>Student Name</th>
              <th className='row-name'>Father's Name</th>
              <th className='row-name'>Mother's Name</th>
              <th className='row-name'>Age</th>
              <th className='row-name'>Home Address</th>
              <th className='row-name'>Registration Date</th>
              <th className='row-name'>Actions</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.studentName}</td>
                <td>{student.fatherName}</td>
                <td>{student.motherName}</td>
                <td>{student.age}</td>
                <td>{student.homeAddress}</td>
                <td>{student.registrationDate}</td>
                <td>
                  <button className='update-button' onClick={() => this.selectStudent(index)}>
                    Update
                  </button>
                  <button className='delete-button' onClick={() => this.deleteStudent(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentManagement;
