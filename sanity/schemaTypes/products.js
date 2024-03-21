export const products = {
    title: "Producter",
    name: "products",
    type: "document",
    fields: [
        {
            title: "Productnavn",
            name: "productname",
            type: "string"
        },
        {
            title: "Productlink",
            name: "producturl",
            type: "slug",
            options: {
                source: "productname",
                slugify: input => input.toLowerCase().replace(/\s+/g, '-')
            }
        },
        {
            title: "Pris",
            name: "price",
            type: "number"
        },
        {
            title: "Produktbilde",
            name: "productimage",
            type: "image"
        },
        {
            title: "Kategori",
            name: "category",
            type: "reference",
            to: [{type: "categories"}]
        },
        {
            title: "Lager",
            name: "stock",
            type: "number"
        }
    ]
}