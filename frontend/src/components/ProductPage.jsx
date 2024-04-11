import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchProductBySlug } from "../../sanity/services/productServices"

export default function ProductPage(){
    const {slug} = useParams()
    const [product, setProduct] = useState(null)


    const getProductBySlug = async (slug) =>{
        const data = await fetchProductBySlug(slug)
        console.log(data)
        setProduct(data[0])
    }

    useEffect(() => {
        getProductBySlug(slug)
    }, [slug])

    if (product) {
        return (
            <main id="productpage">
                <article>
                    <h2>{product?.productname}</h2>
                </article>
            </main>
        )
    } else {
        return (
            <main>
                <p>Laster produktinfo...</p>
            </main>
        )
    }
}