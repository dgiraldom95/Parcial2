import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './App.css';
import localeEsMessages from './locales/es';
import localeEnMessages from './locales/en';
import { IntlProvider } from 'react-intl';

function App() {
  const [movies, setMovies] = useState([]);

  const spanishUrl =
    'https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json';
  const englishUrl =
    'https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json';

  useEffect(() => {
    const url = navigator.language === 'en-US' ? englishUrl : spanishUrl;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setMovies(res);
          localStorage.setItem('movies', res);
        });
    } catch (e) {
      const movies = localStorage.setItem('movies');
      setMovies(movies || []);
    }
  });

  return (
    <IntlProvider
      locale={navigator.language || navigator.browserLanguage}
      messages={navigator.language === 'en-US' ? localeEnMessages : localeEsMessages}
    >
      <MovieList movies={movies}></MovieList>
    </IntlProvider>
  );
}

export default App;
