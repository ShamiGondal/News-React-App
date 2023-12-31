import React from 'react';



 const newsItems =(props)=> {


        let { title, desc, imageUrl, newsUrl, author, date, source } = props;
        return <div >
            <div className="card" >
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" >
                    {source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{desc}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-sm  btn-primary" target='_blank' rel="noreferrer">Read More</a>
                </div>
            </div>
        </div>;
    
}

export default newsItems;

