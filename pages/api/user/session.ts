// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../../../prisma/prisma'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (session){
        const user = await prisma.user.findUnique({
            where:{
                email:String(session?.user?.email)
            },
            include:{
                Article:Boolean(req.query.article) || false
            }
        })
        res.json(user)
    }else{
        res.json({error:"Not logged in"})
    }
}
