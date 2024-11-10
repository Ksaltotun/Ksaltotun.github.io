import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser"

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    flag: boolean;
    num: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    flag: false,
    num: 0
}


export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment (state, action: PayloadAction<number>){
            state.num = action.payload
        },
        usersFetching (state){
            state.isLoading = true
        },
        userSuccess (state, action: PayloadAction<IUser[]>) {
            state.isLoading = false
            state.error = ''
            state.users = [...action.payload]
        },
        userError (state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default usersSlice.reducer; 