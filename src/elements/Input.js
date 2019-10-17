import React from 'react'


const Input = ({ name, onChange = () => null, value = '', ...respProps }) => (
  <input
    value={value}
    name={name}
    onChange={(e) => onChange({ name, value: e.target.value })}
    {...respProps}
  />
)
export default Input
