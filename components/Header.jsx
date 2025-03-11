import { Link } from "react-router-dom"


export default function Header() {

    return (

        <header>

            <nav>

                <ul>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/details/1" className="link">Movie Details</Link>
                </ul>

            </nav>

        </header>

    )

}