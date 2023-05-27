import React, { useState } from 'react';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
function App() {
  const [movies, setMovies] = useState([
    {
      title: 'One Piece',
      description:
        'The series focuses on Monkey D. Luffy—a young man made of rubber after unintentionally eating a Devil Fruit—who sets off on a journey from the East Blue Sea to find the deceased King of the Pirates Gol D. Roger s ultimate treasure known as the "One Piece", and takeover his prior title.',
      posterURL:
        'https://th.bing.com/th/id/R.e6cfd54fded28a252b6a95ccb9278d61?rik=UE17SJwLhfoviA&pid=ImgRaw&r=0',
      rating: 9.3,
      trailerLink: '../asset/Video.mp4' 
    },
    
    {
      title: 'The Godfather',
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: 9.2,
      trailerLink: '../asset/Video2.mp4' 
    },
    {
      title: 'Dragon Ball Super',
      description:
        "Dragon Ball is about fighters with superpowers saving the world against very mean monsters with superpowers too. All of them can fly, throw ki blasts (kinda like fireballs), and find their enemies by sensing their spirit. But some have their own techniques.",
      posterURL:
        'https://play-lh.googleusercontent.com/TPziSUeq-Vmc3sWzPqJKlcQPm4tXy--BLemCgtmni0xYSf0K9MnDb6ObfhoXP1egTQUAEbk-1cfzHGAvNus',
      rating: 9.2,
      trailerLink: '../asset/Video3.mp4' 
    },
  ]);

  return (
    <Router>
      <div className="App" style={{ textAlign: 'center', padding: '20px', backgroundColor: 'Black' }}>
        <Switch>
          <Route exact path="/" render={() => <MovieList movies={movies} setMovies={setMovies} />} />
          <Route path="/movie/:title" render={(props) => <MovieDetails {...props} movies={movies} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
