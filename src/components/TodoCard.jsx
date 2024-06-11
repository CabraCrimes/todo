import React from 'react'

export default function TodoCard() {
  let todos = [
    'Go to gym',
    'Buy milk',
    'Meeting tomorrow'
  ]

  return (
    <li className='todoItem'>
      <div className='actionsContainer'>

      </div>
    
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-solid fa-trash"></i>
  </li>
  )
}
