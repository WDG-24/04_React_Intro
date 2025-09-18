import Student from './components/Student.jsx';

const studentData = {
  id: 1,
  vorname: 'Test',
  lastName: 'McTest',
  age: 1,
  course: 'Web Development',
  city: 'Berlin',
  gpa: 95,
  graduate: false,
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

function App() {
  // if (studentData.vorname !== 'Ruby') return null;

  if (studentData.age === 42) {
    return <p>Don't panic</p>;
  }

  return (
    <>
      <Student person={studentData} />
      {studentData.age > 18 ? <p>Is wahr</p> : <details>Ist falsch</details>}
      {studentData.vorname === 'Test' && <h2>Hallo, Test!</h2>}
    </>
  );
}

export default App;
