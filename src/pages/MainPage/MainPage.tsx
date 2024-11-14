

import { useEffect } from 'react'
import { IPost, postApi } from '../../service/PostService'
import './MainPage.scss'
import { useAppDispatch } from '../../hooks/redux'
import { fetchUsers } from '../../redux/reducers/ActionCreators'
import { Post } from '../../components/Post/Post'

export const MainPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(10)


const [createPost, {}] = postApi.useCreatePostMutation()
    
const handdleCreate = async () => {
    const title = prompt('vvedite')
    await createPost({title, body: title} as IPost)
} 

    return (
        <section className='MainPage'>
            <header className='headMenuBox'><h1>TOP MENU</h1></header>
            <aside className='leftMenuBox'>
               <div className="navButtons">Админка</div>
               <div className="navButtons">Че-то там</div>
               <div className="navButtons">Подтянуть ченить</div> 
            </aside>
            <section className='contentBox' >
                <button onClick={handdleCreate}>
                    Click!
                </button>

                {isLoading && <h1>LOADING</h1> }
                {error && <h1>ERROR</h1> }
               { posts && posts.map(p=><Post {...p}/> ) }
            </section>
            <footer className='footerBox'></footer>
        </section>
    )
}

