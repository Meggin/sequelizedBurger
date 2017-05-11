module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // Giving the Customer model a name of type STRING
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that a customer must belong to a burger.
      classMethods: {
        associate: function(models) {
          // A burger is required or else a customer can't be made.
          Customer.belongsTo(models.Burger, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Customer;
};