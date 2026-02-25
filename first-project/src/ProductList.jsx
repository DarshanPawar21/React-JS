import products from "./product"
const Show = () => {
    return (<>
        {
            products.map((product) =>
                <div>
                    <h1 className="h1">{product.title}</h1>
                    <p className="h2">{product.price}</p>
                </div>
            )
        }

    </>)
}
export default Show;