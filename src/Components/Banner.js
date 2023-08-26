import React from 'react'
import Button from './Buttons/Button'
import StartButton from './Buttons/StartButton'

const Banner = ({setIsStart, isStart}) => {
  return (
    <div>
      <h2>Quiz App</h2>
      <StartButton option={"Start Quiz"} onClick={() => setIsStart(!isStart)} />
    </div>
  )
}

export default Banner
