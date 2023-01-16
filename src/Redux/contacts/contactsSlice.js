import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.isFetching=true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = { items: [], isLoading: false, isFetching: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { filterContact } = filterSlice.actions;

export const contactReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63b72d1f4f17e3a931cd3219.mockapi.io/',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//       providesTags: ['Contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: contactId => ({
//         url: `/contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     addContact: builder.mutation({
//       query: contactContent => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: contactContent,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation,
// } = contactsApi;
