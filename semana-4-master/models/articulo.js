const{
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Articulo extends Model{


    static associate(models){

    }
        
    };
    Articulo.init({
        codigo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        estado: DataTypes.INTEGER,
        categoriaId: DataTypes.INTEGER 
    },{
        sequelize,
        modelName: 'articulo',
    });
    return Articulo;
}