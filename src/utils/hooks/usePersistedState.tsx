import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Dispatch, SetStateAction, useState } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];
export function usePersistedState<T>(
  localStorageKey: string,
  initialState: T,
): Response<Promise<T>> {
  const [state, setState] = useState<Promise<T>>(() => {
    async function getPersistedState() {
      const storageValue = await AsyncStorage.getItem(localStorageKey);

      if (!storageValue) {
        return initialState;
      }
      return JSON.parse(storageValue) as T;
    }
    return getPersistedState();
  });

  return [state, setState];
}
