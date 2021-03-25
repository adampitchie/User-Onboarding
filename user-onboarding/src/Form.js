import React from 'react'

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return(
    <div>
      <form onSubmit={onSubmit}>
        <div className='inputs'>
          <label>
            User
            <input
              value={values.name}
              onChange={onChange}
              name='name'
              type='text'
            />
          </label>

          <label>
            Email
            <input
              value={values.email}
              onChange={onChange}
              name='email'
              type='text'
            />
          </label>

          <label>
            Password
            <input
              value={values.password}
              onChange={onChange}
              name='password'
              type='text'
            />
          </label>

          <label>
            Terms of Service
            <input
              value={values.tos}
              onChange={onChange}
              name='tos'
              type='checkbox'
            />
          </label>

          <button id="submitBtn">Submit</button>
        </div>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </form>
    </div>
  )

}