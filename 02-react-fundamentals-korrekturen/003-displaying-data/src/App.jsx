import Student from './components/Student.jsx';

const studentData = {
  id: 1,
  vorname: 'Testy',
  lastName: 'McTest',
  age: 42,
  course: 'Web Development',
  city: 'Berlin',
  picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

function App() {
  return (
    // <Student
    //   firstName={studentData.firstName}
    //   lastName={studentData.lastName}
    //   age={studentData.age}
    //   course={studentData.course}
    //   city={studentData.city}
    //   picture={studentData.picture}
    // />
    // <Student {...studentData} />
    <Student person={studentData} />
  );
}

export default App;
