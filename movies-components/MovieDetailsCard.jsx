export default function MovieDetailsCard({ detailsProps }) {

    const { image, name, director, abstract } = detailsProps;

    return (

        <>

            <div className="movie_card">

                <div className="card_image">

                    <img src={image} />

                </div>

                <div className="card_content">

                    <h2>{name}</h2>

                    <span>{director}</span>

                    <p>{abstract}</p>

                </div>

            </div>

        </>

    )

}