import Student from './components/Student.jsx';
import students from './data/students.js';

function App() {
  return (
    <div className='container'>
      {students.map((student, index) => (
        <Student key={student.id} person={student} />
      ))}
    </div>
  );
}

export default App;
