export type InputProps = {
    type: 'text' | 'password',
    placeholder: string,
    changeFunction: Function
}

export type ButtonProps = {
    type: 'login' | 'signin',
    text: string,
    routeTo: 'intro' | '/' | null
}


