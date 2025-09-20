export const SITE = {
  title: 'NBA-Blog',
  description: 'Análisis profundos, historias y estadísticas del mundo de la NBA',
  url: 'https://courtside.example.com',
  author: 'Equipo CourtSide',
  twitter: '@courtsideblog'
};

export const NAVIGATION = {
  main: [
    { name: 'Inicio', href: '/nba-blog/' },
    { name: 'Artículos', href: '/nba-blog/blog' },
    { name: 'Equipos', href: '/nba-blog/teams' },
    { name: 'Estadísticas', href: '/nba-blog/stats' },
    { name: 'Acerca de', href: '/nba-blog/about' },
  ],
  categories: [
    { name: 'Noticias', href: '/nba-blog/category/noticias', count: 12 },
    { name: 'Análisis', href: '/nba-blog/category/analisis', count: 8 },
    { name: 'Historia', href: '/nba-blog/category/historia', count: 6 },
    { name: 'Estadísticas', href: '/nba-blog/category/estadisticas', count: 9 },
    { name: 'Entrevistas', href: '/nba-blog/category/entrevistas', count: 4 }
  ]
};

export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = {}) => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  return new Intl.DateTimeFormat('es-ES', { ...defaultOptions, ...options }).format(date);
};