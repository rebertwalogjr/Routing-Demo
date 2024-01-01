export default function ProductDetails({params}: {
    params: {productId: string}
}){
    return <h1>Product Details About {params.productId}</h1>
}