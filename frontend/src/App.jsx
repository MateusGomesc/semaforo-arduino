import { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from 'axios'

function App() {
  const [corAtual, setCorAtual] = useState('red')

  useEffect(() => {
    axios.get("http://localhost:3000")
    const intervalId = setInterval(() => {
      setCorAtual((corAtual) => {
        switch (corAtual) {
          case 'red':
            return 'yellow'
          case 'yellow':
            return 'green'
          case 'green':
          default:
            return 'red'
        }
      });
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const Container = styled.div`
    width: 200px;
    height: 400px;
    background-color: white;
    border: 1px solid black;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0;
  `

  const Led = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: ${props => props.BackgroundColor};
    box-shadow: 2px 2px 10px ${props => props.BackgroundColor},
              -2px -2px 10px ${props => props.BackgroundColor};
  `

  const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    cursor: pointer;
  `

  const obterCor = (cor) => {
    if (cor === 'red') {
      return corAtual === 'red' ? 'red' : 'darkred'
    } else if (cor === 'yellow') {
      return corAtual === 'yellow' ? 'yellow' : 'darkgoldenrod'
    } else if (cor === 'green') {
      return corAtual === 'green' ? 'green' : 'darkgreen'
    }
  };

  const handleOnClick = () => {
    window.location.reload()
  }

  return (
    <>
      <Container>
        <Led BackgroundColor={obterCor('red')}/>
        <Led BackgroundColor={obterCor('yellow')}/>
        <Led BackgroundColor={obterCor('green')}/>
      </Container>
      <Button onClick={handleOnClick}>Resetar semafóro</Button>
    </>
  )
}

export default App
