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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listen = exports.numericAction = exports.numeric = exports.main = void 0;
const Falas_1 = require("../models/Falas");
const main = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let list = yield Falas_1.Falas.findAll();
    res.render('main', { list, count: list.length });
});
exports.main = main;
const numeric = (req, res) => {
    let number = req.params.number;
    res.render('numeric', { number });
};
exports.numeric = numeric;
const numericAction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let counter = req.body.counter;
    let date = new Date();
    let { add, take } = req.body;
    if (add) {
        const newEnem = yield Falas_1.Falas.create({
            date
        });
    }
    else if (take) {
        let fala = yield Falas_1.Falas.findAll({
            order: [
                ['id', 'DESC']
            ],
            limit: 1
        });
        let destroy = fala[0];
        yield destroy.destroy();
    }
    res.redirect('/numeric/' + counter);
});
exports.numericAction = numericAction;
const listen = (req, res) => {
    res.render('listen');
};
exports.listen = listen;
