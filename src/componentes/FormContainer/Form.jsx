import React from 'react'

const Form = (props) => {
    const {handleSubmit, handleChange, handleDate,tarea,fecha} = props

  return (
   <div onSubmit={handleSubmit} className='formulario'>
        <h1>Form</h1>
        <form>
            <input onChange={handleChange} type="text" value={tarea}/>
            <input onChange={handleDate} type="date" value={fecha} />
            <input onClick={handleSubmit} type="submit" value="Agregar"/>
        </form>
   </div>
  )
}

export default Form