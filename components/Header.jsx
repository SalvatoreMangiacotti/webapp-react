import { Link } from "react-router-dom"


export default function Header() {

    return (

        <header>

            <nav>

                <ul>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/movies/create" className="link">Add Movie</Link>
                </ul>

            </nav>

        </header>

    )

}