import '../weflex/card.css';
function Card({imgg, tittle}) {
    return (
        <div className="web">
            <img src={imgg} />

            <h3>{tittle}
            </h3>
            <p>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</p>

            <button className="readbtn">Read More</button>
        </div>
    )
}
export default Card;