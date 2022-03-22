
import React from 'react';

const NewsItem=(props)=>{

    let {title ,description, imageUrl, newsUrl ,author, date ,source} = props;
    return <div className='my-3' >
       <div className="card"> 
            <img className="card-img-top" alt="description" src={!imageUrl ? "https://i.gadgets360cdn.com/large/james_webb_orbit_nasa_1643095872274.jpg" : imageUrl} width="100" height="200" />
            <span className="badge rounded-pill bg-info text-dark">{source}</span>
            <div className="card-body">            
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>               
                <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>;

}

export default NewsItem;
