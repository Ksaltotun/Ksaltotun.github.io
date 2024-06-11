
import './IntroPage.scss'

export const IntroPage: React.FC = () => {

    return (
        <section className='IntroPage'>
            <div className='ContentBox'>
                <div className='DescribeBlock'>
                    <div className='TitleBlock'>
                       Демо-версия
                    </div>
                    <div className='TextBlock'>
                        <span>
                            За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить
                        </span>
                    </div>
                    <div className='ButtonBlock'>
                        <div className='ButtonText'>
                            Попробовать бесплатно
                        </div>
                        <div className='ButtonPicture'>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="44" height="44" rx="22" fill="white" />
                                <rect x="4" y="4" width="36" height="36" rx="18" fill="white" />
                                <path d="M17 17H27V27" stroke="#1F4284" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17 27L27 17" stroke="#1F4284" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className='PicktureBlock'></div>
            </div>
        </section>
    )
}

