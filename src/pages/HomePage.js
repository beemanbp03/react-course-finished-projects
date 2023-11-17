import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <>
            <h1>Home Page</h1>
            <p>Go to <Link to="/products">the list of products</Link></p>
        </>
    )
}

export default HomePage;