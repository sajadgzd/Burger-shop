module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {

        burger_name: {
            type: DataTypes.STRING,
            allowNull: {
                args: false,
                msg: 'Name is required.'
            },
            validate: {
                len: [1, 255]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Burger;
}