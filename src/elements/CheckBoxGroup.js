import React from 'react'

const CheckBoxGroup = ({ options, name, value = [], onChange  }) => (
  <div>
    {options.map((a, i) => (
      <div key={i}>
        <input
          name={name}
          checked={value.includes(a.label)}
          type='checkbox'
          onChange={(e) => {
            let newValue = value.filter(l => l !== a.label)
            if (e.target.checked) {
              newValue.push(a.label)
            }
            onChange({ name, value: newValue })
          }}
        />
        <label>{i}: {a.label}</label>
      </div>
    ))}
  </div>
)

export default CheckBoxGroup
