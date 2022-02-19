import { Model, DataTypes} from 'sequelize';
import {sequelize} from '../intances/mysql';

interface FalasInstance extends Model {
    id: number,
    date: Date
}

export const Falas = sequelize.define<FalasInstance>("Falas", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED
    },
    date: {
        type: DataTypes.DATE
    }

},{
    timestamps:false,
    tableName: 'falas'
}
)