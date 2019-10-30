import React from 'react'

class Input extends React.PureComponent {
  onChange = (e) => {
    const { name, onChange } = this.props
    onChange({ name, value: e.target.value }, e)
  }

  render() {
    const { name, onChange = () => null, value = '', ...respProps } = this.props
    return (
      <input
        value={value}
        name={name}
        onChange={this.onChange}
        {...respProps}
      />
    )
  }
}
export default Input
