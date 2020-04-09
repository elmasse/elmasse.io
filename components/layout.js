import React from 'react'

import Navigation from './navigation'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
      <style jsx>{`
        min-height: 100vh;
      `}</style>
    </div>
  )
}
