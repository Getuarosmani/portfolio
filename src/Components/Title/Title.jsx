import React from 'react'
import './Title.css'

export const Title = ({title, white = false}) => {
  return (
    <div className={`title ${white ? 'white' : ''}`}>
        <h2>{title}</h2>
    </div>
  )
}
