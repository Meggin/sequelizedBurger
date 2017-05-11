module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  }, 
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our burger to have one customer.
      classMethods: {
        associate: function(models) {
          // Associating Burger with Customer.
          // When a Burger is deleted, also delete any associated Posts
          Burger.hasOne(models.Customer, {
            onDelete: "set null"
          });
        }
      }
  });
  return Burger;
};