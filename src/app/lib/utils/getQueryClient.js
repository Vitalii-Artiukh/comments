import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          // За замовчуванням запити не будуть перезавантажуватися при фокусі вікна
          refetchOnWindowFocus: false,

          // Час, протягом якого дані вважаються свіжими
          staleTime: 60 * 1000,

          // Кешування даних
          cacheTime: 5 * 60 * 1000,

          // Повторні спроби при помилці
          retry: 1,
        },
      },
    })
);

export default getQueryClient;
