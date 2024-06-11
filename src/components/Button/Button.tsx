import { ButtonProps } from '../../utils/types'
import './Button.scss'

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    return (
        <div className='Button' onClick={props.action()} data-type={props.type}>
            <span>{props.text}</span>
        </div>
    )
}