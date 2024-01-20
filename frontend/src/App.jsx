import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';




function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
          .then((response) => {
            setJokes(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
  }, [])


  return (
    <>
      <h1>React Frontend</h1>
      <h2>Jokes: {jokes.length}</h2>

    </>
  )
}

export default App
