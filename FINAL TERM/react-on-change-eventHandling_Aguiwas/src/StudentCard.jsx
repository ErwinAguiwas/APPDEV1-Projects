export default function StudentCard({ students }) {
    return (
      <div className="student-card">
        <h2>Attendance List:</h2>
        {students.map((student, index) => (
          <div key={index} className="student-entry">
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
            <p>Date: {student.date}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
  