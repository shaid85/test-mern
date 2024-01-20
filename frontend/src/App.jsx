import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

  return (
    <>
      <h1>React Frontend</h1>
      <h2>Jokes: {jokes.length}</h2>
      {jokes.map((item) => (
        <div className="joke" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
