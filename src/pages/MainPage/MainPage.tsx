

import './MainPage.scss'

export const MainPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <section className='MainPage'>
            <header className='headMenuBox'><h1>TOP MENU</h1></header>
            <aside className='leftMenuBox'>
               <div className="navButtons" onClick={(e)=>{navigate(props.routeTo ?? '/')}}>Админка</div>
               <div className="navButtons" onClick={(e)=>{navigate}}>Че-то там</div>
               <div className="navButtons" onClick={(e)=>{navigate}}>Подтянуть ченить</div> 
            </aside>
            <section className='contentBox'></section>
            <footer className='footerBox'></footer>
        </section>
    )
}

