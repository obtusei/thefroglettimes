import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  try{
    const specificArticle = await prisma.article.findUnique({
      where:{
        id:String(req.query.id)
      },
      include:{
        author:true,
        category:true
      }
    })

    res.json(specificArticle)
  }
  catch{
    res.status(404).send("ERROR")
  }
}
