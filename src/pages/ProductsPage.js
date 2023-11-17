import { Link } from 'react-router-dom';

const ProductsPage = () => {
    return (
        <>
            <h1>Products</h1>
            <p>Go <Link to="/">Home</Link></p>
        </>
    )
}

export default ProductsPage;