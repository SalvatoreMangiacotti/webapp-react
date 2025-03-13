// Axios

import axios from "axios"


// Hooks

import { useState, useEffect } from "react"


// Links

import { Link, useParams } from "react-router-dom"


// Components

import MovieReview from "../movies-components/MovieReviews";
import ReviewForm from "../movies-components/ReviewForm";



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


    const renderMovieReview = () => {

        {
            return (movie.reviews?.map(review =>

                <MovieReview key={review.id} reviewProp={review} />

            ))
        }

    }

    return (
        <>

            <section className="movie_details" key={id}>

                <div className="card_image">

                    <img src={movie.image} />

                </div>

                <h4>{movie.director}</h4>

                <p>{movie.abstract}</p>

            </section>


            <section className="reviews">

                <h4>Our community reviews</h4>

                {renderMovieReview()}

            </section>

            <section>
                <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />
            </section>

        </>
    )

}