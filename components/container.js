import React from 'react'

export default function Container({ children }) {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 0 1.25rem;
          
          width: 100%;
          max-width: 1024px;
        }
      `}</style>
    </div>
  )
}