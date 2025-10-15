import MovieCard from "../components/MovieCard"
import { useState } from "react";
function Home(){
    const[searchQuery,setsearchQuery]=useState("");
    const movies=[
        {id:1,title:"Inception",rating:8.8,genre:"Sci-Fi"},
        {id:2,title:"The Dark Knight",rating:9.0,genre:"Action"},
        {id:3,title:"Interstellar",rating:8.6,genre:"Sci-Fi"},
        {id:4,title:"Pulp Fiction",rating:8.9,genre:"Crime"},
        {id:5,title:"The Shawshank Redemption",rating:9.3,genre:"Drama"}
    ];
    const handleSearch= (e) =>{
    e.preventDefault();
    alert(searchQuery);
    };
    return(
         <div className="home">
            <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text"
             placeholder="Search For movies..." 
             className="search-form"
             value={searchQuery}
             onChange={(e) => setsearchQuery(e.target.value)}
             />
             <button type="submit" className="search-button">
                Search
             </button>
            </form>
            
        <div className="movie-list">
            {movies.map(
                (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery)&& (
                <MovieCard movie={movie} key={movie.id }/> 
            ))}   
            </div>
        </div>
        );
}
export default Home;