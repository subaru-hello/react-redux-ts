import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PostState {
    id: number;
    title: string;
    content: string
  }

const initialState: PostState[] = [
    {id: 1, title: 'Back in Time', content: 'hello world!'},
    {id: 2, title: 'Forward step', content: 'Move forward!'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
  })
  
  export default postsSlice.reducer