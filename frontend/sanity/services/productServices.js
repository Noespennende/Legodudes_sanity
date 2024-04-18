import { client, writeClient } from "../client";
//Les mer om GROQ (Sanitys spørrespråk): https://www.sanity.io/docs/how-queries-work

//Funksjon som henter alt innhold av type products fra Sanity
export async function fetchAllProducts() {
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        "slug": producturl.current,
        price,
        stock,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url
    }`)
    return data
}

//Funksjon som henter et produkt basert på en slug:
export async function fetchProductBySlug(slug) {
    const data = await client.fetch(`*[_type == "products" && producturl.current == $slug]{
        _id,
        productname,
        description,
        "categoryname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url,
        price,
        stock,
        reviews
    }`, {slug})
    return data
}

//funksjon som tar imot informasjon og oppdatrer reviews-arrayen i et product
export async function updateReview(productid, reviewer, comment, rating){
    const result = await writeClient
    .patch(productid).setIfMissing({reviews: []})
    .append("reviews", [{reviewer: reviewer, comment: comment, rating: rating}])
    .commit({autoGenerateArrayKeys: true})
    .then(() => {return "Sucess"})
    .catch((error) => {return "Error: " + error.message})
    return result
}