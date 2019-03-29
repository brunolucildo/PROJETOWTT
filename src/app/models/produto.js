module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preço: DataTypes.STRING
    });

    return Produto;
}