import React from 'react'

const RadioGroup = ({ options, name, value, onChange }) => (
  <div>
    {options.map((a, i) => (
      <div key={i}>
        <input
          checked={value === a.label}
          name={name}
          type='radio'
          onChange={() => onChange({ name, value: a.label })}
        />
        <label>{i}: {a.label}</label>
      </div>
    ))}
  </div>
)

export default RadioGroup

