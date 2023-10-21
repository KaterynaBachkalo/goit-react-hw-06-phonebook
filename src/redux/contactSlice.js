import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilters(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact, setFilters } = contactsSlice.actions;
// Редюсер слайсу
export const contactReducer = contactsSlice.reducer;
