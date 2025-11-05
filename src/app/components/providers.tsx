'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DictionaryTypes } from '@/app/lib/types/types';

// Створюємо контекст для словника
const DictionaryContext = createContext<DictionaryTypes | null>(null);

// Хук для використання словника
export const useDictionary = () => {
  const dictionary = useContext(DictionaryContext);
  if (!dictionary) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }
  return dictionary;
};

interface ProvidersProps {
  children: React.ReactNode;
  dictionary: DictionaryTypes;
}

const Providers = ({ children, dictionary }: ProvidersProps) => {
  const client = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={client}>
      <DictionaryContext.Provider value={dictionary}>
        {children}
        <ReactQueryDevtools />
      </DictionaryContext.Provider>
    </QueryClientProvider>
  );
};

export default Providers;
