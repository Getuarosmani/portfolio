import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
     <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Getuar Osmani. All rights reserved.</p>
    </footer>
  )
}
