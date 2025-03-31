import './App.css'

function ListItem(props){
  return <li>{props.animal}</li>
}

function List(props){
  return (
    <ul>
      {props.animals.map((animal) =>  {
        return <ListItem key={animal} animal={animal} />
      })}
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
