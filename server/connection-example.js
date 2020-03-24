import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("simpledb", "root", "MySQL6248082", {
    host: "localhost",
    dialect: "mysql"
});

const user = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name'
        },
        lastName: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });