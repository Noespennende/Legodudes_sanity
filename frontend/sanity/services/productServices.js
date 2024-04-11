import { client } from "../client";

export async function fetchAllProducts(){
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        price,
        stock,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url,
        "slug": producturl.current
    }`)
    return (
        data
    )
}

export async function fetchProductBySlug(slug) {
    const data = await client.fetch(`*[_type == "products" && producturl.current == $slug]{}`, {slug})

    return data
}