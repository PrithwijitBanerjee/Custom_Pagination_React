import React from 'react'

const Card = ({ id, title, smallImg}) => {
    return (
        <div className='col-md-4'>
            <div className="card" style={{ width: '18rem', margin: '10px' }}>
                <img src={smallImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} {id}</h5>
                    <a href="#!" className="btn btn-primary">view More</a>
                </div>
            </div>

        </div>
    )
}

export default Card