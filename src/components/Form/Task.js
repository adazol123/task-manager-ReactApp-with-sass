import React, { useState } from 'react'
import { Button_default } from '../Button/Button'
import { check, clipboard, edit, layers, more_vertical, plus, plus_circle, search, remove, trash } from './form-assets'
export const Task = ({ children, isCompleted}) => {
    
    return (

        <div className={isCompleted? 'container-sm form-task-completed' : 'container-sm form-task-active'}>
            <div className='flex-between-row p-sm'>
            <div className="flex-center">
                {isCompleted?  <i className='task-icon'>{check}</i> :<i>{clipboard}</i> }
                <p>{children}</p>
            </div>
            <div className="flex-center">
                <Button_default><i className='task-icon'>{edit}</i></Button_default>
                <Button_default><a className='trash' >{trash}</a></Button_default>
            </div>
        </div>
        </div>
    )
}
