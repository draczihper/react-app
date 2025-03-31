import './App.css'

function List(props){
  return (
    <ul>
      {props.animals.map((animal) =>  {
        return animal.startsWith('l') ? <li key={animal}>{animal}</li> : null})}
    </ul>
  )
}


function App() {
  const animals = ['lion', 'cheetah', 'lynx', 'leopard', 'tiger']
  return (
    <div>
      <h1>Animal:</h1>
      <List animals={animals} />
    </div>
  )
}

export default App
