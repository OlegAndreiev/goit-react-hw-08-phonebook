import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectIsPending = state => state.contacts.isPending;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, items) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
