import { Link } from "react-router-dom"

export default function MovieCard({ movieProps }) {

    const { id, title, director, abstract, image } = movieProps;

    return (

        <div className="movie_card" key={id}>

            <div className="card_image">

                <img src={image} alt={title} />

            </div>

            <div className="card_content">

                <h3>{title}</h3>

                <span>{director}</span>

                <p>{abstract}</p>

                <Link to={`details/${id}`} className="button">

                    See more

                </Link>

            </div>

        </div>

    )

}