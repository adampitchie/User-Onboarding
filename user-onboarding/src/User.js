import React from 'react'

export default function User(props) {
  const { info } = props

  return (
    <div>
      <p>User: {info.name}</p>
      <p>Email: {info.email}</p>
      <p>Password: {info.password}</p>
    </div>
  )
}