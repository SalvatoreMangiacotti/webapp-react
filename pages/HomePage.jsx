// Axios

import axios from "axios"


// Hooks

import { useState, useEffect } from "react"


// Components

import MovieCard from "../movies-components/MovieCard"


export default function HomePage() {

    // component useState

    const [movies, setMovies] = useState([]);


    const fetchMovies = () => {

        axios.get("http://localhost:3000/api/movies")

            .then(function (response) {

                setMovies(response.data);

            })

            .catch(function (error) {

                console.log(error);

            })

    }


    useEffect(fetchMovies, []);


    // Render Movies function

    const renderMovies = () => {

        return movies.map(

            movie => {

                return (

                    <div>

                        <MovieCard movieProps={movie} key={movie.id} />

                    </div>

                )

            }

        )

    }

    return (

        <div className="movie-col">

            {renderMovies()}

        </div>

    )

}