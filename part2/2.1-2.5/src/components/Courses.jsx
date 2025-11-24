const ExercisesSum = ({ courses }) => {
  let totalExercisesSum = 0;

  courses.forEach(course => {
    let courseExercisesSum = course.parts.reduce((accumulator, currentValue) =>{
      return accumulator + currentValue.exercises
    }, 0);
    totalExercisesSum += courseExercisesSum;
  })

  return (
    <p>Total number of exercises: {totalExercisesSum}</p>
  )
};

const CoursePart = ({ part }) => <li>{part.name} {part.exercises}</li>;

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map(course => 
        <div key={course.id}>
          <h2>{course.name}</h2>

          <ul>
            {course.parts.map(part =>
              <CoursePart key={part.id} part={part} />
            )}
          </ul>
        </div>
      )}

      <ExercisesSum courses={courses} />
    </div>
  )
};

export default Courses;
