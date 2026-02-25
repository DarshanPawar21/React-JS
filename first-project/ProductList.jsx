import products from "./src/product"
const Show = () => {
    return(<>
    {
        products.map((product)=>{
            <h1>{product.title}</h1>
        })
    }
    
    </>)
}
export default Show;