import React, { useState } from 'react'
import Form from './Form'
import Tarea from './Tarea'

const FormContainer = () => {
    const [tarea, setTarea] = useState("")
    const [fecha, setFecha] = useState("")
    const [listaTareas, setListaTareas] = useState([])//estado para almacenar todas las tareas

    //Submit que agrega la tarea
    function handleSubmit  (e)  {
        e.preventDefault()
        if(tarea === ""){
            alert("Ingrese una tarea")
            return
        }
        //creo la tarea
        const nuevaTarea = {
            id: Date.now(),
            tarea: tarea,
            fecha:fecha
        }
        //La "sobreescribo"
        const temp = [nuevaTarea, ...listaTareas]
        setListaTareas(temp)
        //Reinicio el valor del handleChange y handleDate
        setTarea("")
        setFecha("")
    }
    //Pongo el valor de mi estado tarea
    function handleChange(e){
        setTarea(e.target.value);
    }
    //Pongo el valor de mi estado fecha
    function handleDate (e) {
        setFecha(e.target.value);
    }

    //una vez agregada la tarea le mando estos metodos para editar o borrar la tarea ya agregada
    function actualizarTarea (editar) {
        const {id, tarea} = editar
        const temp = [...listaTareas]
        const elemento = temp.find(item => item.id === id)
        elemento.tarea = tarea 
        setListaTareas(temp)

    }
    function borrarTareas (id){
        const temp = listaTareas.filter(item => item.id !== id)
        setListaTareas(temp)

    }

    return (
        <>
            <Form handleSubmit={handleSubmit} handleChange={handleChange} handleDate={handleDate} tarea={tarea} fecha={fecha} /> 
            <h2 style={{textAlign:"center"}}>tareas</h2>
            {
                listaTareas.map((tarea) => {
                    return <Tarea key={tarea.id} tarea={tarea} actualizarTarea={actualizarTarea} borrarTareas={borrarTareas}/> 
                })
            }
           
        </>
        
    )
}

export default FormContainer