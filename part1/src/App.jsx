function Header (properties) {
  return (
    <h1>{properties.name}</h1>
  )
};

function Part (properties) {
  return (
    <p>{properties.name} {properties.exercises}</p>
  )
};

function Content (properties) {
  return (
    <div>
      <Part name={properties.part1Name} exercises={properties.part1Exercises} />
      <Part name={properties.part2Name} exercises={properties.part2Exercises} />
      <Part name={properties.part3Name} exercises={properties.part3Exercises} />
    </div>
  )
};

function Total (properties) {
  return (
    <p>Number of exercises {properties.total}</p>
  )
};


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content part1Name={part1} part2Name={part2} part3Name={part3}
               part1Exercises={exercises1} part2Exercises={exercises2} part3Exercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
};

export default App