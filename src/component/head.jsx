import React, { useState, useEffect } from 'react'

export default function Head({ obj, user, onData, editObje }) {
  const [inputValue, setInputValue] = useState('')
  const [sexInput, newSexInput] = useState('')
  useEffect(() => {
    console.log('组件加载时')
  }, [])
  const handelInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const newHandelInputChange = (e) => {
    newSexInput(e.target.value)
  }
  const editInput = () => {
    onData(inputValue)
  }
  const editInputs = () => {
    editObje(sexInput)
  }

  return (
    <div>
      <div> {obj}</div>
      <div>id:{user.id}</div>
      <div>姓名:{user.name}</div>
      <div>年龄:{user.age}</div>
      <div>性别:{user.sex}</div>
      修改姓名:{' '}
      <input type="text" onChange={handelInputChange} value={inputValue} />
      <button onClick={editInput}>修改</button>
      <br />
      修改性别:{' '}
      <input type="text" onChange={newHandelInputChange} value={sexInput} />
      <button onClick={editInputs}>性别修改</button>
    </div>
  )
}
