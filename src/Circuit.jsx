
import React from 'react'

const one=["apple","mango"]
const two=["grapes","orange"]
const three=["pinapple","banana"]
const fruits=[...one,...two,...three]

console.log(fruits)

const Circuit = () => {
  return (
    <div>
      fruits
    </div>
  )
}

export default Circuit
