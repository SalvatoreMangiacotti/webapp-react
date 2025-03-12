export default function MovieDetailsCard({ detailsProps }) {

    const { image, name, author, vote } = detailsProps;

    return (

        <>

            <div className="movie_card">

                <div className="card_image">

                    <img src={image} />

                </div>

                <div className="card_content">

                    <h2>{name}</h2>
                    <span>{author}</span>
                    <p>{vote}</p>

                </div>

            </div>

        </>

    )

}