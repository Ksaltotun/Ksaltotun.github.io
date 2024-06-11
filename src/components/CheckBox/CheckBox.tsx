import { useState } from 'react'
import { InputProps } from '../../utils/types'
import './CheckBox.scss'

export const CheckBox: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false)
    return (
        <div className='CheckBox' data-active={checked} onClick={()=>{
            setChecked(!checked)
        }}>

        </div>
    )
}