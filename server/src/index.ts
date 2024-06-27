import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import graphqlUploadExpress  from 'graphql-upload/graphqlUploadExpress.mjs';
import { readFileSync } from 'fs'
import { resolvers } from './resolvers/index.js';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { createContext } from './context.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

// async function startServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     csrfPrevention: true,
//     cache: 'bounded',
//     plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
//     context: createContext
//   });

//   const app = express();

//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(__filename);

//   // app.use(express.static(path.join(__dirname, 'goodsImages')))
//   app.use("/goodsImages", express.static("goodsImages"));
//   app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  
//   await server.start();
  
//   server.applyMiddleware({ app });

  // await new Promise<void>((r) => app.listen({ port: 4000 }, r));

    // console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// }



const startServer = async () => {
  const app = express()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    context: createContext
  });
  await server.start();
  server.applyMiddleware({ app });
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  app.use(express.static(path.join(__dirname, '../../client/', 'build')))
  app.use(express.static('public'))
  app.use(express.static(path.join(__dirname, 'goodsImages')))
  app.use("/goodsImages", express.static("goodsImages"));
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  app.get('/rest', (req, res)=>{
    res.json({'data': 'rest works'})
  })

  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../../client/', "build", 'index.html'))
  })

  await new Promise<void>((r) => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000`);
}


startServer();
