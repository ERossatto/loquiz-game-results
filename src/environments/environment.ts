export const environment = {
  production: false,
  loquizApi: {
    baseUrl: 'https://api.loquiz.com/v3',
    gamesRoute: '/games',
    gameIdParam: (id: string): string => `/${id}`,
    resultsIdParam: (id: string): string => `/results/${id}/teams`,
    GAME_ID_DEFAULT: 'FK5TS3QAB',
    API_KEY: 'ApiKey-v1 d64642249a14413ac83fdf40b57192b7be1bfb715a3e74519e279b3ee5eaf426',
  },
};
