import React from 'react'

export default function Container({ className = '', children }) {
  return (
    <div className={`container ${className}`}>
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
