export default function MovieReview({ reviewProp }) {

    const { name, text, vote } = reviewProp

    return (

        <div className="movie_review_card">

            <div className="card_content">

                <h4>
                    By: {name}
                </h4>

                <strong>
                    Vote: {vote}
                </strong>

                <p>
                    {text}
                </p>

            </div>

        </div>

    )
}
