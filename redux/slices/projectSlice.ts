import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
import { Project, ProjectStatus, Task } from '../../models/Project';


  function createData(
    id: number,
    title: string,
    description: string,
    status: ProjectStatus,
   // tasks?: Task[],
  //  image: string,
  ): Project {
  //  const density = population / size;
    return { id, title, description, status, };
    // id: number;
    // title: string;
    // description: string;
    // status: ProjectStatus;
    // tasks?: Task[];
    // image: string;
  }
  
  const rows = [
  
    createData(0o0001, 'co-up 프로젝트', 'co-up', ProjectStatus.Active, ),
    createData(0o0002, '다른 프로젝트', '다른거', ProjectStatus.Completed, ),
    createData(0o0003, '또다른 프로젝트', '또다른거', ProjectStatus.Inactive, ),
   
  ];
// make Post thunk
export const fetchProjects = createAsyncThunk('post/fetchProjects', async () => {
    // make 2 seconds delay
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = rows;
    console.log("rows : " +  rows);
   // const data = await response.json();
    return data as Project[]; 
});

export interface PostState {
    projects: Project[];
    loading: boolean;
    error: string | undefined;
}

const initialState: PostState = {
    projects: [],
    loading: false,
    error: undefined,
};

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        getProjects: (state) => {
            state.loading = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            state.projects = action.payload;
            state.loading = false;
            state.error = undefined;
           // enqueueSnackbar('성공.', { variant: 'success' });
        });
        builder.addCase(fetchProjects.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
           // enqueueSnackbar(state.error, { variant: 'error' });
        });
        builder.addCase(fetchProjects.pending, (state) => {
            state.loading = true;
        });
    },
});

export const { getProjects } = projectSlice.actions;
export default projectSlice.reducer;


