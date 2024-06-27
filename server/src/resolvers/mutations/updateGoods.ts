import { MutationUpdateGoodsArgs, ResolverTypeWrapper } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import fs from 'fs';
import { finished } from 'stream/promises';

export const updateGoods = async(_, params: MutationUpdateGoodsArgs, context): Promise<ResolverTypeWrapper<string>> => {
    
    console.log(params)

    const prisma = context.prisma as ContextPrisma

    
    if (params.img){ 
        const { createReadStream } = await params.img.file;
        const stream = createReadStream();

        console.log(stream)
        
        const uniqueFilename = params.data.name_En.replace(/[^\s\w\-().]/g, '').replace(/\s/g, '_') 
        const path = `./goodsImages/${uniqueFilename + '.png'}`;
        const out = fs.createWriteStream(path);
        stream.pipe(out);
        await finished(out);
    }
    
    const {id, category, ...data} = params.data

    let result: string | PromiseLike<string>

    if (data) {
        console.log('data')
        await prisma.goods.update({
            where: {
                id
            },
            data: {
                ...data,
                category: category ? {
                    connect: {id: category}   //update category if "category" field exist
                }
                : undefined
            }
        })
        .then(()=>{
            result = '200'
        })
        .catch((e)=>{
            result = e
        })
    }

    if (params.chars) {
        console.log('chars')
        prisma.$transaction(async(prisma) => {

            for (let char of params.chars) {

                const {id, ...data} = char

                await prisma.goodsCharacteristic.update({
                    where: {
                        id: id
                    },
                    data: data
                })

            }     

       })
       .then(()=>{
            result = '200'
        })
        .catch((e)=>{
            result = e
        })
    }

    return result
}
