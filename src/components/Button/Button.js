import React, { useEffect, useState } from 'react'

export const Button_default = (props) => {
    const [variants, setVariants] = useState('button')
    useEffect(() => {
        document.body.setAttribute("data-theme", 'dark-mode')
        if(props.variant === undefined) return
        setVariants('button-'.concat(props.variant))
    }, [props.variant]);

    return (
        
        <button className={variants} {...props}>
            {props.children}
        </button>
    )
}
