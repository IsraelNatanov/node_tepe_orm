"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const client_1 = require("./entities/client");
const banker_1 = require("./entities/banker");
const Transaction_1 = require("./entities/Transaction");
const create_client_1 = require("./routes/create_client");
const app = (0, express_1.default)();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbConnection = {
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "0585284770",
            database: "orm",
            entities: [client_1.Client, banker_1.Banker, Transaction_1.Transaction],
            synchronize: true,
        };
        const dataSourceConnection = new typeorm_1.DataSource(dbConnection);
        yield dataSourceConnection.initialize().then(connection => {
            console.log("Connected db Postgres");
            app.use(express_1.default.json());
            app.use(create_client_1.createClientRouter);
            app.listen(808, () => {
                console.log("Now running on port 8080");
            });
        });
    }
    catch (error) {
        console.log(error);
        throw new Error("Unable to connect to db");
    }
});
main();
//# sourceMappingURL=index.js.map