// Axios

import axios from "axios"


// Hooks

import { useState, useEffect } from "react"


// Links

import { Link, useParams } from "react-router-dom"


// Components

import MovieDetailsCard from "../movies-components/MovieDetailsCard"


export default function MovieDetails() {

    const { id } = useParams();

    const [movie, setMovie] = useState({});


    const fetchMovie = () => {

        axios.get(`http://localhost:3000/api/movies/${id}`)

            .then(function (response) {

                setMovie(response.data);

            })

            .catch(function (error) {

                console.log(error);

            })

    }


    useEffect(fetchMovie, [])


    const renderDetails = () => {


        {
            return (movie.review?.map(review =>

                <MovieDetailsCard key={review.id} detailsProp={review} />


            ))
        }

    }


    return (

        <section className="movie_details" key={id}>

            <div className="card_image">

                <img src={movie.image} />

                <h4>{movie.director}</h4>

                <p>{movie.abstract}</p>

            </div>

            {renderDetails()}

        </section>

    )

}