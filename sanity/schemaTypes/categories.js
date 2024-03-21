export const categories = {
        title: "kategorier",
        name: "categories",
        type: "document",
        fields: [
            {
                title: "kategoritittel",
                name: "categorytitle",
                type: "string"

            },
            {
                title: "Kategorilink",
                name: "categoryurl",
                type: "slug",
                options: {
                    source: "categorytitle",
                    slugify: input => input.toLowerCase().replace(/\s+/g, '-')
                }
            }
        ]

}
