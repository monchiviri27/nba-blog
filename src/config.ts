export const SITE = {
  title: 'NBA-Blog',
  description: 'Análisis profundos, historias y estadísticas del mundo de la NBA',
  url: 'https://courtside.example.com',
  author: 'Equipo CourtSide',
  twitter: '@courtsideblog'
};

export const NAVIGATION = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Artículos', href: '/blog' },
    { name: 'Equipos', href: '/teams' },
    { name: 'Estadísticas', href: '/stats' },
    { name: 'Acerca de', href: '/about' },
  ],
  // AÑADE ESTAS CATEGORÍAS:
  categories: [
    { name: 'Noticias', href: '/category/noticias', count: 12 },
    { name: 'Análisis', href: '/category/analisis', count: 8 },
    { name: 'Historia', href: '/category/historia', count: 6 },
    { name: 'Estadísticas', href: '/category/estadisticas', count: 9 },
    { name: 'Entrevistas', href: '/category/entrevistas', count: 4 }
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