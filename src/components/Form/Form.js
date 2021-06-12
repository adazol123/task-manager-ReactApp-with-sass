import React from 'react'
import { Button_default } from '../Button/Button'
import { check, clipboard, edit, layers, more_vertical, plus, plus_circle, search, remove, trash } from './form-assets'
import { Task } from './Task'

export const Form = () => {
    return (
        <div className='task-form'>
            <div className="flex-center pos-relative ">
                <form className="container-md bg-dark pos-relative">
                    <div className=" pos-absolute">
                    <div className="flex-between-row bg-dark py-16 form-head">
                        <h5 className='link-special' >List one <span>/ Active Task</span></h5>
                        <div className="flex-center">
                            <button><i>{search}</i></button>
                            <button><i>{more_vertical}</i></button>
                        </div>
                    </div>
                    <div className="flex-center-row py-16 bg-dark">
                        <Button_default variant='tag' className='button-tag-active'>All</Button_default> 
                        <Button_default variant='tag'>Active</Button_default> 
                        <Button_default variant='tag'>Completed</Button_default> 
                    </div>
                    </div>
                    <div className="px-4">
                    <Task>Take a bath</Task>
                    <Task isCompleted={true}>Clean the Car</Task>
                    <Task isCompleted={true}>Clean the Car</Task>
                    <Task >Clean the Car</Task>
                    <Task isCompleted={true}>Clean the Car</Task>
                    <Task >Clean the Car</Task>

                    </div>
                
                


                <div className="add-task">
                <button ><i>{plus_circle}</i></button>
                </div>
                 
                </form>
               
            </div>
            
        </div>
    )
}
