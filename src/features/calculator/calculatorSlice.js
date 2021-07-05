import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchResult } from './calculatorAPI';

const initialState = {
  value: 0,
  status: 'idle'
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getCalculatorResult(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getCalculatorResult = createAsyncThunk(
  'calculator/fetchResult',
  async ({num1,num2,selectedOp}) => {
    const response = await fetchResult(num1,num2,selectedOp);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getCalculatorResult.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCalculatorResult.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.calculator.value)`
export const selectResult = (state) => state.calculator.value;

export default calculatorSlice.reducer;