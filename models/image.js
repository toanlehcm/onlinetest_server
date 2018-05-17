'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {img_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      imgurl: DataTypes.CHAR(255)
  }
  );
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};