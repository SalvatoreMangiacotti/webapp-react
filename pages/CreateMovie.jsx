// Axios

import axios from "axios"


// Hooks

import { useState } from "react"


// Links

import { Link, useNavigate } from "react-router-dom"


const initialData = {

    title: "",

    director: "",

    image: null,

    abstract: ""

};


export default function CreateMovie() {


    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialData);


    const setUserInput = (e) => {

        const { value, name, files } = e.target;

        if (name === "image") setFormData({ ...formData, image: files[0] });

        else setFormData({ ...formData, [name]: value });

    }


    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(`http://localhost:3000/api/movies`, formData,

            { headers: { "Content-Type": "multipart/form-data" } })

            .then(() => {

                navigate("/")

            })

            .catch((err) => {

                console.log(err);

            });

    }


    return (

        <form className="review_form" onSubmit={handleSubmit}>

            <label>Title:</label>
            <input

                name="title"

                type="text"

                className="form_input"

                value={formData.title}

                onChange={setUserInput}

                required

            />

            <label>Director:</label>
            <input

                name="director"

                type="text"

                className="form_input"

                value={formData.director}

                onChange={setUserInput}

                required

            />

            <label>Image:</label>
            <input

                name="image"

                type="file"

                className="form_input"

                onChange={setUserInput}

                required

            />

            <label>Abstract:</label>
            <textarea

                name="abstract"

                value={formData.abstract}

                className="form_input"

                onChange={setUserInput}

                required

            ></textarea>

            <button type="submit" className="button">
                Add a movie
            </button>

        </form>

    )

}


