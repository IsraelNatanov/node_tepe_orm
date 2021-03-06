"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionTypes = void 0;
const typeorm_1 = require("typeorm");
const client_1 = require("./client");
var TransactionTypes;
(function (TransactionTypes) {
    TransactionTypes["DEPOSIT"] = "desposit";
    TransactionTypes["WITHDRAW"] = "withdraw";
})(TransactionTypes = exports.TransactionTypes || (exports.TransactionTypes = {}));
let Transaction = class Transaction extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: TransactionTypes
    }),
    __metadata("design:type", String)
], Transaction.prototype, "typs", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric"
    }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_1.Client, client => client.transactions),
    (0, typeorm_1.JoinColumn)({
        name: 'client_id'
    }),
    __metadata("design:type", client_1.Client)
], Transaction.prototype, "client", void 0);
Transaction = __decorate([
    (0, typeorm_1.Entity)("transactions")
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map