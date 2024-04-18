import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "g60l74a8",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})


export const writeClient = createClient({
    projectId: "g60l74a8",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skNgNKgaiAQF4y35C9mrDEPuQ8NHxirFX6gxubRbtEE00rK8zWOPatylyzVY0UEfUpfD5WAX4Pjl3iN24PwZyyh5ag6LuFZ4YjXqPeyCNphf7MUQhu4gGliUVnL1tdzf0ul6VdSjacYEqATlvsZdlpcZXjAXCdOGieKicXAMSKcrl1UlHQRk"

})