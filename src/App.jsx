import React from 'react'
import AppRouter from './router/AppRouter'
import Layout from './layout/Layout'
import Footer from './layout/base/Footer/Footer'

function App() {
  return (
    <div>
       <Layout>
          <AppRouter/>
       </Layout>
    </div>
  )
}

export default App
