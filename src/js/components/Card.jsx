export const Card = ({img,title}) => {
    return (
        <div className="col-md-6 col-lg-3 card p-0 my-3" style={{width: "18rem"}}>
            <img src={img} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}