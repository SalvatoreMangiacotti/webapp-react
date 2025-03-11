// Components

import MovieCard from "../movies-components/MovieCard"


export default function HomePage() {

    return (

        <>

            <h2>Movies</h2>

            <div className="movies_container">

                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />

            </div>

        </>

    )

}