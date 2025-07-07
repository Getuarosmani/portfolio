import React from 'react'
import './Title.scss'

export const Title = ({title, white = false}) => {
  return (
    <div className={`title ${white ? 'white' : ''}`}>
        <h2>{title}</h2>
    </div>
  )
}
