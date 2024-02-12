import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { DownloadableProductSchema } from "@/lib/validators";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const session = await getAuthSession()

        //is user logged in?
        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }
        // is user an admin
        const isAdmin = await db.user.findFirst({
            where: {
                id: session.user.id,
                type: "Admin"
            }
        })

        if (!isAdmin) {
            return new Response('Unauthorized', { status: 401 })
        }

        // process request

        const body = await req.json()

        //validate upload content
        const { title, description, slug, featuredImageId } = DownloadableProductSchema.parse(body)

        console.log({
            title,
            description,
            slug,
            featuredImageId
        })

        //check if product already exists
        const productExists = await db.downloadableProduct.findFirst({
            where: {
                title,
            },
        })

        if (productExists) {
            return new Response('Product already exists', { status: 409 })
        }

        //check if featured image is unique

        const featuredImageExists = await db.downloadableProduct.findFirst({
            where: {
                featuredImageId,
            },
        })

        if (featuredImageExists) {
            return new Response('This image has already been used as a Featured Image', { status: 409 })
        }

        //create new product
        const newProduct = await db.downloadableProduct.create({
            data: {
                title,
                description,
                slug,
                featuredImageId
            },
        })

        //respond with the new product's id 
        return new Response(newProduct.slug)
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(error.message, { status: 422 })
        }
        console.log(error)
        return new Response('Could not create product', { status: 500 })
    }

}