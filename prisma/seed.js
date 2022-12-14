// const prisma = require("./prisma.ts");
const { PrismaClient }  = require("@prisma/client")
const prisma = new PrismaClient();
const categories = require("../libs/categories.json")
const users = require("../libs/users.json")
const news = require("../libs/neededNew.json")
// const bcrpyt = require("bcrypt");

// const users = require('./users.json')
// const blogs = require("./blogs.json")

// async function encryptPassword(word){
//           const has = await bcrpyt.hash(word,10);
//           return has
          
// }

async function createNewUsers(){
    const newUsers = await Promise.all(users.map(async (user) => user = {
            fullname:user.fullname,
            email:user.email,
            password: user.password,
            bio:user.bio,
            image:user.image
  }))
  await prisma.user.createMany({data:newUsers});
}

async function createNews(){
    const users = await prisma.user.findMany()
    const urandom = Math.floor(Math.random() * users.length);
    const categoriesN = await prisma.category.findMany();
    const crandom = Math.floor(Math.random() * categoriesN.length);
    const newNews = await Promise.all(news.map(async (content) => content = {
            title:content.title,
            content:content.content,
            imageUrl:content.imageUrl,
            region:content.region,
            language:content.language,
            publishedAt:content.publishedAt,
            updatedAt:content.updatedAt,
            tag:content.tag,
            readingTime:String(content.readingTime),
            authorEmail:users[urandom].email,
            categoryId:categoriesN[crandom].id

            

  }))
  await prisma.article.createMany({data:newNews});
}


async function main() {

    
    const users = await prisma.user.findMany()
    const urandom = Math.floor(Math.random() * users.length);
  
//   const newten = blogs.slice(0,2)
//   const newBlogs = await Promise.all(newten.map(async (blog) => blog = {
//             title:blog.title,
//             content:blog.content,
//             createdAt:blog.createdAt,
//             updatedAt:blog.updatedAt,
//             userId:users[50].id,
//             categoryId:categories[1].id
//   }))

//   await prisma.user.createMany({data:newUsers});
//   await prisma.blog.createMany({data:newBlogs});

const newCategories = await Promise.all(categories.map(async (cat) => cat ={
    title:cat.title,
    href:cat.href,
    ne:cat.ne
}))

    await prisma.category.createMany({data:newCategories})
    // await createNewUsers();
    // await createNews();

}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1)
    })
    .finally(async () =>{
        await prisma.$disconnect();
    });