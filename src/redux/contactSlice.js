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

// У елемент <ul id="test"></ul> потрібно додати три <li></li> елементи. Вибрати <ul> елемент за допомогою id = “test”. Створити кожен новий <li></li> елемент за допомогою методу createElement() та додати до списоку за допомогою методу appendChild().
