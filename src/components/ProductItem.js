import React from 'react'

const ProductItem = (props) => {
    const { title, description, image } = props
    return (
        <div className='col-md-4'>
            <div class="card my-3" >
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
