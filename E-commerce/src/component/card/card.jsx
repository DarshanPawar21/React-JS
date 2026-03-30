import { useEffect, useState } from "react";

const Card = () => {
    useEffect(() => {
        const [card, setcard] = useState([]);
        
    })
    return (<>
        <div className="container">
            {
                card.map((pro, i) => (
                    <h2 key={i}>{pro.title}</h2>
                ))
            }
        </div>
    </>)
}
export default Card;