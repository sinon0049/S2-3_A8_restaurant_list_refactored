# Restaurant list

This is a restaurant list which you can use to find restaurants stored in the website.

## Features

Click the restaurants, and you can see...
  + Food categories
  + Addresses
  + Phone numbers
  + Introductions
  + Photos
  
Besides the details above, you can also...
  + Create restaurants you want and delete what you dislike
  + Use "排序(sort)" to sort rstaurants by the order you want

## Download, install and run
+ Use Terminal to download the repository
```
git clone https://github.com/sinon0049/S2-3_A8_restaurant_list_refactored.git
```
+ Download MongoDB and create a database called "restaurant-list"
+ Download Express and Handlebars in the folder ```S2-3_A8_restaurant_list_refactored```
```
npm i express
npm i express-handlebars
npm i body-parser
npm i mongoose
npm i method-override
```
or install them together
```
npm i express express-handlebars body-parser mongoose method-override
```
+ Use npm command to add seed data
```
npm run seed
```
or run the project directly
```
npm run dev
```
If succeeded, Terminal will show 
```
Restaurant list is running on http://localhost:3000
mongodb connected!
```
, and you can use it on your browser with the address http://localhost:3000/

## Environments and utilities
+ Node.js v10.15.0
+ Express 4.17.1
+ Handlebars 5.2.0
+ bootstrap 4.2.1
+ jquery 3.3.1
+ Font Awesome
+ MongoDB
+ Mongoose 5.10.14
+ Method-override 3.0.0