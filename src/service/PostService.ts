import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IPost {

    "userId": number,
    "id": number,
    "title": string,
    "body": string
}


export const postApi = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({ baseUrl: 'httP://localhost:5000' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: () => ({
                url: '/posts',
                method: 'GET'
            })
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                body: post,
                method: 'POST'
            })
        })
    })
})