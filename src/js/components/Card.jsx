export const Card = () => {
    return (
        <div className="col-md-6 col-lg-3 card p-0 my-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/12352497/pexels-photo-12352497.jpeg?_gl=1*1x1nkc9*_ga*MTE0NTU2MDE5LjE3NAxNzE2NzI.*_ga_8JE65Q40S6*czE3NTAxNzE2NzEkbzEkZzEkdDE3NTAxNzE2OTUkajM2JGwwJGgw" className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}