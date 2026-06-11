import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// 1. Thunk lấy danh sách Post (GET)
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(API_URL);
  // fake API trả về 100 posts, ta chỉ lấy 10 cái đầu để dễ nhìn giao diện
  return response.data.slice(0, 10); 
});

// 2. Thunk thêm mới Post (POST)
export const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
  const response = await axios.post(API_URL, newPost);
  return response.data;
});

// 3. Thunk chỉnh sửa Post (PUT)
export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, updatedData }) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add Post
      .addCase(addPost.fulfilled, (state, action) => {
        // jsonplaceholder luôn trả về id: 101, ta đổi id để tránh trùng lặp key local
        const postWithUniqueId = { ...action.payload, id: Date.now() };
        state.list.unshift(postWithUniqueId); // Đẩy lên đầu danh sách
      })
      // Update Post
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.list.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        } else {
          // Phòng trường hợp id mới tạo (Date.now()) không tìm thấy trên fake server cũ,
          // Ta cập nhật theo logic tìm kiếm linh hoạt hơn dựa trên tiêu đề hoặc vị trí chỉnh sửa
          state.list = state.list.map(post => 
            post.id === action.meta.arg.id ? { ...post, ...action.payload } : post
          );
        }
      });
  },
});

export default postSlice.reducer;