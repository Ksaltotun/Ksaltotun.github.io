import { IPost } from "../../service/PostService"


export const Post: React.FC<IPost> = (props:IPost) => {

    return (
        <div >{props.id}</div>
    )
}