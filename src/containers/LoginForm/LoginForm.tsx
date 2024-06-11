import { Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { CheckBox } from '../../components/CheckBox/CheckBox'
import { Input } from '../../components/Input/Input'
import { XButton } from '../../components/XButton/XButton'
import './LoginForm.scss'
import { useState } from 'react'

export const LoginForm: React.FC = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

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
                    <Input type='text' placeholder='Email/Телефон' changeFunction={setUserName}/>
                    <Input type='password' placeholder='Пароль' changeFunction={setPassword}/>
                </div>
                <div className='RememberBlock'>
                    <CheckBox/>
                    <span>Запомнить пароль</span>
                </div>
                <div className='RestoreBlock'>
                    <span>Восстановить</span>
                </div>
                <div className='ButtonBlock'>
                    <Button type='login' text={'Войти'} routeTo={password === 'password' ? 'intro' : null}/>
                    <Button type='signin' text={'Зарегистрироваться'} routeTo={null}/>
                </div>
            </div>
        </form>
    )
}

