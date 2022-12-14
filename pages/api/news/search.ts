import { Language } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
      const news = await prisma.article.findMany({
        where:{
          OR:[
            {
              title:{
                  contains:String(req.query.q)
              },
            },
            {
              content:{
                contains:String(req.query.q)
              }
            },
          ]
        },
        
      })
      res.status(200).json(news)
    
  }
  catch{
    res.status(404).json({message:"ERROR"})
  }
}
