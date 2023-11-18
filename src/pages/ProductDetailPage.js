import { useParams, Link } from 'react-router-dom';

const ProductDetailPage = () => {
    const params = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>{params.id}</p>
            <p>{params.title}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </>
    )
}

export default ProductDetailPage;