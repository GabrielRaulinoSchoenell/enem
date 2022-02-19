"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const enem_1 = __importDefault(require("./routes/enem"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const server = (0, express_1.default)();
dotenv_1.default.config();
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(express_1.default.urlencoded({ extended: true }));
server.use(enem_1.default);
server.use((req, res) => {
    res.status(404);
    res.send('pagina nao encontrada');
});
server.listen(process.env.PORT);
