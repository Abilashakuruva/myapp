
import React from 'react'
import { useState } from 'react'
import FirstComp from './propcontainer/FirstComp'
import ClickEvent from './ClickEvent'
import Resize from './Resize'
import FormExample from './FormExample'
import './App.css'
import SampleArray from './SampleArray'
import TempLit from './TempLit'
import Userpage from './Userpage'
import Employee from './Employee'
import Circuit from './Circuit'
import MultiState from './MultiState'

const App = () => {
  const [sampleCondition,setSamplecondition]=useState(false)
  
  return (
    <div>
      <h1>Welcome to React</h1>
      <MultiState/>
         
    </div>
  )
}

export default App
