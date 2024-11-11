import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IPost {

    "userId": number,
    "id": number,
    "title": string,
    "body": string
}


export const postApi = createApi({
    reducerPath: '',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                },
                method: 'POST'
            })
        })
    })
})