import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const cat:string = data.category != null ? data.category:"Politics";
  try{
    if(req.query.type === "breaking"){
      const news = await prisma.article.findMany()
      res.status(200).json(news)
    }
    else if(req.query.type === "headlines"){
      const news = await prisma.article.findMany()
      res.status(200).json(news)
    }
    else if(req.query.type === "updated"){
      const news = await prisma.article.findMany()
      res.status(200).json(news)
    }
    else if(req.query.type === "international"){
      const news = await prisma.article.findMany()
      res.status(200).json(news)
    }
    else if(req.query.type === "classified"){
      const news = await prisma.article.findMany()
      res.status(200).json(news)
    }else{
      const news = await prisma.article.findMany()
      res.status(200).json(news)
    }
  }
  catch{
    res.status(404).json({message:"ERROR"})
  }
}
