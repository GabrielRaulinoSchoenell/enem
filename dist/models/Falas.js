"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Falas = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../intances/mysql");
exports.Falas = mysql_1.sequelize.define("Falas", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    date: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    timestamps: false,
    tableName: 'falas'
});
