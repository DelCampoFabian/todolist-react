import React, { useState } from 'react'

const Tarea = (props) => {
    const {tarea, actualizarTarea,borrarTareas } = props

    const [editar, setEditar] = useState(false)//state para pasar de edicionActivado o Desactivado

    //Modo edicion me retorna 2 nuevos botones 
    //handleChange 
    function EdicionActivado ()  {
        const [valor, setValor] = useState(tarea.tarea)//state para almacenar el valor de la nueva tarea 
        function handleChange (e) {
            const text = e.target.value
            setValor(text)
        }

        function handleClick (e) {
            e.preventDefault()
            actualizarTarea({id: tarea.id,
                tarea: valor,
                })
            setEditar(false)
        }    

        return (
            <>
                <input onChange={handleChange} type="text" value={valor} />
                <button onClick={handleClick}>guardar</button>
                <button onClick={() => borrarTareas(tarea.id) }>borrar</button>
            </>
        )
    }
    function EdicionDesactivado () {
        return (
                <div style={{textAlign:"center"}}>
                    <p>{tarea.tarea} --- {tarea.fecha}</p>
                    <button onClick={()=> setEditar(true)}>editar</button>
                    <button onClick={() => borrarTareas(tarea.id) }>eliminar</button>
                </div>
        )
    }


  return (
    <>
    <div className='contenedor' id={tarea.id} style={{textAlign:"center"}}>       
        {
        editar 
        ? <EdicionActivado />
        : <EdicionDesactivado/>
      }
    
     </div>
    </>
    )
}

export default Tarea