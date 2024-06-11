import { Button } from '../../components/Button/Button'
import { CheckBox } from '../../components/CheckBox/CheckBox'
import { Input } from '../../components/Input/Input'
import { XButton } from '../../components/XButton/XButton'
import './LoginForm.scss'

export const LoginForm: React.FC = () => {

    return (
        <form className='LoginForm'>
            <div className='XbuttonBlock'>
                <XButton/>
            </div>
            <div className='DataBlock'>
                <div className='TitleBlock'>
                    <span>
                    Войти в систему
                    </span>
                </div>
                <div className='InputBlock'>
                    <Input type='text' placeholder='Email/Телефон'/>
                    <Input type='password' placeholder='Пароль'/>
                </div>
                <div className='RememberBlock'>
                    <CheckBox/>
                    <span>Запомнить пароль</span>

                </div>
                <div className='RestoreBlock'>
                    <span>Восстановить</span>
                </div>
                <div className='ButtonBlock'>
                    <Button type='login' text={'Войти'} action={()=>{}} />
                    <Button type='signin' text={'Зарегистрироваться'} action={()=>{}} />
                </div>
            </div>
        </form>
    )
}

