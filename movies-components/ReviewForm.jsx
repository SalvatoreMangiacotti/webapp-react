// Axios

import axios from "axios";


// Hooks

import { useState } from "react";


export default function ReviewForm({ movie_id, reloadReviews }) {

    // form initial values

    const initialValue = { name: "", text: "", vote: 1 };

    const [formData, setFormData] = useState(initialValue);


    const setUserInput = (e) => {

        const { value, name } = e.target;

        setFormData({ ...formData, [name]: value })

    }


    const submitReview = (e) => {

        e.preventDefault();

        axios.post(`http://localhost:3000/api/movies/${movie_id}/reviews`, formData, { headers: { 'Content-Type': 'application/json' } })

            .then(function () {

                setFormData(initialValue)
                reloadReviews()

            })

            .catch(function (error) {

                console.log(error);

            })

    }


    return (

        <div className="reviews_container">

            <form className="review_form"

                onSubmit={submitReview}

            >

                <label>Name</label>

                <input

                    type="text"

                    name="name"

                    className="form_input"

                    value={formData.name}

                    onChange={setUserInput}

                />

                <label>Review</label>

                <textarea

                    name="text"

                    className="form_input"

                    value={formData.text}

                    onChange={setUserInput}
                >
                </textarea>

                <label>Voto</label>

                <input

                    type="number"

                    className="form_input"

                    name="vote"

                    min="1" max="5"

                    value={formData.vote}

                    onChange={setUserInput}

                />

                <button type="submit" className="button">

                    Send

                </button>

            </form>

        </div>

    )

}