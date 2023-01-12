import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from "typeorm";
import session from "express-session";
import connectRedis from "connect-redis";
import { redis } from "./redis";
import cors from "cors";



const main = async () => {

  //Ormconfig.json u kullanarak baglantiyi saglar TYPEORM
  await createConnection();

  const schema = await buildSchema({
    //ONCEKI HALI
    // resolvers: [
    //   MeResolver,
    //   RegisterResolver,
    //   LoginResolver,
    //   ConfirmUserResolver,
    //   ForgotPasswordResolver
    // ],
    resolvers: [__dirname + '/modules/**/*.ts'],
    authChecker: ({ context: {req} }, roles) => {
      return !!req.session.userID
    }
  })

  const apolloServer = new ApolloServer({
    schema,
    context: ({req, res}: any) => ({ req, res}) //session req yani request objemizin icinde oldugu icin cotextden ona erismek icin requesti buraya birakiyoruz.
  });

  const app = Express();

  const RedisStore = connectRedis(session);
  //Sessiondaki amac localstroage de tutmak yerine sessionda tutacagiz.

  app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
  }));

  app.use(
    session({
      store: new RedisStore ({
        client: redis as any
      }),
      name: 'qid', //Cookie icin name daha sonra bunu yakalayacagiz check ederken
      secret: "SESSION_SECRET",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 //7years
      },
    })
  )

  apolloServer.applyMiddleware({app});

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000');
  });
}

main();