import { InMemoryCache, Reference, makeVar } from '@apollo/client';

// Initializes to true if localStorage includes a 'token' key,
// false otherwise
export const isLoggedInVar = makeVar(!!localStorage.getItem('token'));
export const loggedInUserId = makeVar();

// Initializes to an empty array
export const strategiesList = makeVar([]);
export const assignedStrategiesList = makeVar([]);
export const assignedBadgesList = makeVar([]);