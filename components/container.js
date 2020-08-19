import React from 'react'

export default function Container({ className = '', children }) {
  return (
    <div className={`container ${className}`}>
      {children}
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 0 calc(var(--spacing) * 3);
          
          width: 100%;
          max-width: calc(var(--spacing) * 128);
        }
      `}</style>
    </div>
  )
}
