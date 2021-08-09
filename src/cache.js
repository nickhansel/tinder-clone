/*
* This file contains data that can be cached and reused accross the application
* to add a new item it needs to be defined here and added to typeDefs in index.js
* to set data pass a data to cache loggedInUserId(data)
* when no data is passed the cache would be returned loggedInUserId()
*/
import { makeVar } from '@apollo/client';

// helper that can be used across the app to get the current user id
export const loggedInUserId = makeVar();
export const currentUser = makeVar({});