import { useSelector } from 'react-redux';

export function useContacts() {
  const contacts = useSelector(state => state.contacts);
  return contacts;
}

export function useFilter() {
  const filter = useSelector(state => state.filter);
  return filter;
}
