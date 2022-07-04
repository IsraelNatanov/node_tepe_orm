import { DataSource, DataSourceOptions } from "typeorm";
import express from "express";
import { Client } from "./entities/client";
import { Banker } from "./entities/banker";
import { Transaction } from "./entities/Transaction";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactionRouter } from "./routes/create_teansaction";
import { createBankerToClientRouter } from "./routes/create_banker_to_client";
import { deletClientRouter } from "./routes/delete_client";
import { fatchClientRouter } from "./routes/fetch_clients";

const app = express();
export const main = async () => {
  try {
    const dbConnection: DataSourceOptions = {
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "0585284770",
      database: "orm",
      entities: [Client, Banker, Transaction],
      synchronize: true,
    };
    const dataSourceConnection =  new DataSource(dbConnection);
    await dataSourceConnection.initialize().then(connection =>{
        console.log("Connected db Postgres");
        app.use(express.json())
        app.use(createClientRouter)
        app.use(createBankerRouter)
        app.use(createTransactionRouter)
        app.use(createBankerToClientRouter)
        app.use(deletClientRouter)
        app.use(fatchClientRouter)

        app.listen(3000, () => {
          console.log("Now running on port 3000")
        })
    })
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to db");
  }
};

main();

