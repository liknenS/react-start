import React from 'react'

const Select = ({ options, name, value, onChange }) => (
  <select
    name={name}
    value={value}
    onChange={(e) => onChange({ name, value: e.target.value })}
  >
    {options.map(({ label, value = label }, i) => (
      <option key={i} value={value}>{label}</option>
    ))}
  </select>
)

export default Select

