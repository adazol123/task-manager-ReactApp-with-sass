import React from 'react'
import { Button_default as Button } from '../components/Button/Button'

const Buttons = () => {
    const themes = document.querySelector('html')
    let dark_mode = localStorage.getItem("theme-ui-mode")
    themes.setAttribute('data-scheme', dark_mode)
    function addDark() {
      dark_mode = localStorage.getItem("theme-ui-mode")
      const theme = document.querySelector('html')
      theme.setAttribute('data-scheme', 'dark')
      document.body.setAttribute("data-theme", 'dark-mode')
      localStorage.setItem('theme-ui-mode', 'dark')
      themes.setAttribute('data-scheme', dark_mode)
  
    }
    function addLight() {
      dark_mode = localStorage.getItem("theme-ui-mode")
      const theme = document.querySelector('html')
      document.body.setAttribute("data-theme", 'light-mode')
      localStorage.setItem('theme-ui-mode', 'light')
      themes.setAttribute('data-scheme', dark_mode)
  
    }
    return (
      <div className="flex-center-column bg-dark p-16 container-sm">
      <p className='text-head'>Lorem ipsum dolor sit amet.</p>
  
      <Button variant='solid' onClick={addLight}> Solid Long Text </Button>
      <Button variant='default' > Default </Button>
      <Button variant='outline' onClick={addDark}> Outline </Button>
      <Button variant='link' >link</Button>
      <Button variant='ghost'> Ghost </Button>
  
    </div>
    )
}

export default Buttons
