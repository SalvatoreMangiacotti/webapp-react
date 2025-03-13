export default function MovieReview({ reviewProp }) {

    const { name, text, vote } = reviewProp

    return (
        <div className="movie_review_card">

            <div className="card_content">

                <p>
                    {text}
                </p>

                <strong>
                    Vote: {vote}
                </strong>

                <span>
                    By: {name}
                </span>

            </div>
        </div>
    )
}
