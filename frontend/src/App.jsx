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

  if(jokes.length > 0){
    
  }else{
    jokes = []
  }

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
