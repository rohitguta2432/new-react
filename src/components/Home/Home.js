import React from 'react'
import Header from '../Headers/Header'
import AllProduct from '../Products/AllProducts'

function Home() {
    return (
        <>
        <section className="productsItems py-5">
            <div className="container">
                <div className="row">
                    <AllProduct />
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Home
