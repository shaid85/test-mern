import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';




function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('https://test-mern-api-theta.vercel.app/api/jokes')
          .then((response) => {
            setJokes(response.data)
          })
          .catch((error) => {
            console.log(error);
          })
  }, [])
console.log(jokes);

  return (
    <>
      <h1>React Frontend</h1>
      <h2>Jokes: {jokes.length}</h2>

    </>
  )
}

export default App
