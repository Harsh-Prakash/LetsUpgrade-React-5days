import React from 'react'
import ProductItem from './ProductItem'

let Product = () => {
    const products = [
        { title: "Samsung Galaxy S23 Ultra", description: "Meet the new Galaxy S23 Ultra, designed with the planet in mind and equipped with a built-in S Pen, Nightography camera and powerful chip for epic gaming.", image: "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg" },
        { title: "Iphone 15 Series", description: "iPhone 15 and iPhone 15 Plus represent a huge leap forward with exciting camera innovations that inspire creativity, the intuitive Dynamic Island, and features like Roadside Assistance via satellite that make a real difference in user's lives.", image: "https://i.insider.com/650219bc1afe8f0019e9ec80?width=1066&format=jpeg" },
        { title: "OnePlus 11", description: "OnePlus 11 5G, The Shape of Power. Equipped with Snapdragon® 8 Gen 2, up to 16GB RAM, hardware-assisted 3rd Gen Hasselblad Camera for Mobile, 100W SUPERVOOC Charger.", image: "https://www.cnet.com/a/img/resize/1ae96bf5b9cf9c87cbc907d8aef1e6a12545900b/hub/2023/02/05/9bd12b8d-db91-426d-9f44-22381f35232b/oneplus-11-review-cnet-lanxon-promo-33.jpg?auto=webp&width=1200" },
    ]
    return (
        <div className='row mx-2'>
            {products.map((product)=>{
                return(

                    <ProductItem title={product.title} description={product.description} image={product.image}></ProductItem>
                )
            })}
        </div>
    )
}

export default Product
