# burger

This is a simple burger ordering app built with node express, mysql, handlebars, and sequelize.

It follows the MVC pattern, with a model, views, and controller.

The model uses sequelize to get, add, and update data in the mysql database.

There are two tables, burgers and customers. Each burger can have one customer, and a customer must have a burger (1-1, with customer belonging to a burger).

There's basic validation for our data.

The app is uploaded to heroku:
[https://damp-dusk-76937.herokuapp.com/](https://damp-dusk-76937.herokuapp.com/).

Important to note that the styles are OK, and kind of responsive, but I decided to stop fiddling with the css.

We've got a group project to attend to, so this has got to be good enough!

