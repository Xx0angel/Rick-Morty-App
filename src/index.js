import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './Navbar';
import { Episodes } from './Episodes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div>
      <Navbar />
      <Episodes />
    </div>
)
