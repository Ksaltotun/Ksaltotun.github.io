import { InputProps } from '../../utils/types'
import './Input.scss'

export const Input: React.FC<InputProps> = (props: InputProps) => {

    return (
        <input className='Input' type={props.type} name={props.type} placeholder={props.placeholder}
         onChange={(e)=>{props.changeFunction(e.target.value)}}/>
    )
}