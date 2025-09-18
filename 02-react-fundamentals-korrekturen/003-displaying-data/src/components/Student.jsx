export default function Student({ person }) {
  const { vorname, lastName, age, course, city, picture } = person;
  return (
    <article className='card'>
      <img className='card-image' src={picture} alt='' />
      <div className='card-body'>
        <h2>
          {vorname} {lastName}
        </h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Course: {course}</p>
      </div>
    </article>
  );
}
