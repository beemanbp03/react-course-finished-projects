import { Link } from 'react-router-dom';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        title: 'Product 1',
    },
    {
        id: 'p2',
        title: 'Product 2',
    },
    {
        id: 'p3',
        title: 'Product 3',
    },
]

const ProductsPage = () => {
    return (
        <>
            <h1>Products</h1>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                <li key={product.id}>
                    <Link to={product.id}>{product.title}</Link>
                </li>
                ))}
            </ul>
        </>
    )
}

export default ProductsPage;