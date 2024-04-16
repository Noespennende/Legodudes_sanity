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
    token: "sknU6vIvQkUQplxvIW4vTxWqbxhWPE6ukOTEVJrZZITrGS3kZyqHgjLN48hdKUaJYSJEBKawEk8QGI1gxN86pVuwul3JqVXZ7QmTXdvj2ykoc285GNz6OX21X78VwxmMMPdLTNFcYpnOBXA3qT5z9tMHKPhw6TUkW4YjgDPgiUMol8353i7f"

})