import { MutationAddGoodsArgs, ResolverTypeWrapper } from "../../../resolvers-types";
import { ContextPrisma } from "../../models";
import fs from 'fs';
import { finished } from 'stream/promises';
import webp from 'webp-converter';

export const addGoods = async(_, params: MutationAddGoodsArgs, context): Promise<ResolverTypeWrapper<string>> => {
    
    
    const prisma = context.prisma as ContextPrisma
    const { createReadStream } = await params.img.file;
    const stream = createReadStream();

    console.log(stream)
    
    const uniqueFilename = params.data.name_En.replace(/[^\s\w\-().]/g, '').replace(/\s/g, '_').replace(/[`'']/g, "'") 
    const path = `./goodsImages/${uniqueFilename + '.png'}`;
    const out = fs.createWriteStream(path);
    stream.pipe(out);
    await finished(out);
    
    // // Шлях до вихідного зображення в форматі WebP
    // const outputImagePath = path.slice(0, -4) + '.webp';
    
    // // Конвертуємо зображення
    // webp.cwebp(path, outputImagePath, "-q 80", function(status) {
    //     if (status === '100') {
    //         console.log('Конвертація завершена успішно!');
    //     } else {
    //         console.log('Сталася помилка при конвертації:', status);
    //     }
    // });




    const goods = await prisma.goods.create({
        data: {
            ...params.data,
            photo: path.substring(2),
            goodsUrlName:uniqueFilename.replace("_", ''),
            category: {
                connect: {id : params.data.category}
            }
        }
    })

    if (params.chars.length) {
        await prisma.goodsCharacteristic.createMany({
            data: params.chars.map(char => {return {...char, goodsId: goods.id}})
        })
    }

    const result = await prisma.goods.update({
        where:{
            id: goods.id
        },
        data: {
            goodsUrlName: goods.goodsUrlName + "_" + String(goods.id)
        }
    })
    .then(()=>{
        return "200"
    }).catch((e)=>{
        return e
    })

    return result
}
