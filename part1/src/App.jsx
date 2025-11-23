function Header (properties) {
  const { name, parts } = properties.course;

  return (
    <h1>{name}</h1>
  );
};

function Part (properties) {
  return (
    <p>{properties.name} {properties.exercises}</p>
  );
};

function Content (properties) {
  let part_names = [];
  let part_exercises = [];

  const { name, parts } = properties.course;

  parts.forEach(part => {
    part_names.push(part.name)
    part_exercises.push(part.exercises)
  });

  return (
    <div>
      <Part name={part_names[0]} exercises={part_exercises[0]} />
      <Part name={part_names[1]} exercises={part_exercises[1]} />
      <Part name={part_names[2]} exercises={part_exercises[2]} />
    </div>
  );
};

function Total (properties) {
  let total_exercises = 0;

  const { name, parts } = properties.course;

  parts.forEach(part => {
    total_exercises = total_exercises + part.exercises
  });

  return (
    <p>Number of exercises {total_exercises}</p>
  );
};


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
};

export default App;
