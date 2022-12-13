import { title } from 'process';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/prisma'

const slugify = (str:string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const cat:string = data.category != null ? data.category:"Politics";
  try{
    const category = await prisma.category.findUnique({
      where:{
        title:cat
      }
    });
    const slug = slugify(data.title)
    const article = await prisma.article.create({
      data:{
        title:data.title,
        content:data.content,
        slug:slug,
        imageUrl:data.imageUrl,
        language:data.language,
        region:data.region,
        category: {
            connect:{
              id: category?.id
            }
          },
        author:{
          connect:{
            email:"abhishekbhatta02@gmail.com"
          }
        }
      },
    })
    
    res.status(200).json(article)
  }
  catch{
    res.status(404).json({message:"ERROR"})
  }
}
