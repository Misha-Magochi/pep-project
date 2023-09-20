import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import imgNF from "../../img/imgFV.jpg";
import { DocType } from './interface';


const Top100: React.FC<{ genre: string }> = ({ genre }) => {
    const moviesData = useAppSelector((state) => state.homePageMovies.movies as DocType[]);
    const [genreMovies, setGenreMovies] = useState<any[]>([]);
  
    useEffect(() => {
      const filteredMovies = moviesData
        .find((category: DocType) => category._id === genre)?.doc || [];
      setGenreMovies(filteredMovies);
    }, [genre, moviesData]);
  
    return (
      <div>
        <span className='movie-head' >
            <div className='movie-head-title'> 
            Watch all top 100 {genre === 'films' ? 'films' : 'series'}
            </div>
            </span>
        <div className="movie-item-block">
          {genreMovies.map((movie: any) => (
            <div key={movie._id} className="movie-item">
                <img
                src={movie.Poster}
                alt={movie.Title}
                className="movie-image"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = imgNF;
                }} />
                <h3 className="movie-title" >{movie.Title}</h3>
                <div className="movie-rls" >
                    <span className="movie-gener" >{movie.Type}</span>
                    <div>{movie.Released}</div>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Top100;