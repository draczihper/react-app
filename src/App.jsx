import './App.css'

function App() {
  const animals = ['lion', 'cheetah', 'lynx', 'leopard', 'tiger']
  return (
    <div>
      <h1>Animal:</h1>
      <ul>
        {
          animals.map((animal) => {
            return <li key={animal}>{animal}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
