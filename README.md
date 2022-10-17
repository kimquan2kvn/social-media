# Social Media 

## Mục lục

- [Giới thiệu](#giới thiệu)
- [Demo](#demo)
- [Chạy ứng dụng](#chạy ứng dụng)
- [Technology](#technology)
- [Features](#features)
- [Database Models](#database)

## Giới thiệu

Social Media website sử dụng MongoDB, Expressjs, Reactjs và Nodejs

## Demo

- User Page
  ![screenshot](/public/images/demo%20web.png)
- Admin Page
  ![screenshot](/public/images/demo%20admin.png)

The application is deployed to Heroku and can be accessed through the following link:

[LoveBook on Heroku](https://lovebook206.herokuapp.com/)

- Test User Credentials
  - Email: `gblhiep@gmail.com`
  - Password: `test1234`
- Test Admin Credentials
  - Email: `admin@gmail.com`
  - Password: `test1234`
- Test Stripe Card Details
  - Card Number: `4242 4242 4242 4242`
  - Expiry: `Any Future Month`
  - CVV: `Any three Digit Number`

## Chạy ứng dụng

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGO_URI: this is the connection string of your MongoDB Atlas database.

- JWT_KEY: a secret jsonwebtoken

- STRIPE_SECRET_KEY: the stripe package is used to process payment in the checkout route. To get this, you should set up a stripe account and put your private API key here.

- USER_EMAIL, USER_PASSWORD: the email and password to login to home page

- ADMIN_EMAIL, ADMIN_PASSWORD: the email and password used to log into the admin panel using
  Now you can run "npm run start" in the terminal and the application should work.

## Technology

The application is built with:

- Node.js
- MongoDB
- Express
- EJS
- Bootstrap
- FontAwesome
- Stripe API
- Multer: used to upload file
- Jsonwebtoken: used for authentication
- Validator: used for form validation
- nodemailer: used for send email
- And many other package

## Features

The application displays a virtual bags store that contains virtual products and contact information.

Users can do the following:

- Create an account, login or logout
- Browse available products added by the admin
- Add products to the shopping cart
- Delete products from the shopping cart
- Display the shopping cart
- To checkout
- Checkout information is processed using stripe and the payment is send to the admin
- The profile contains all the orders a user has made
  -upload image profile
  Admins can do the following:
- Send email to reset password
- Login or logout to the admin panel
- View all the information stored in the database. They can view/add/edit/delete orders, users, products . The cart model cannot be modified by an admin because a cart is either modified by the logged in user before the purchase or deleted after the purchase.

## Database

All the models can be found in the models directory created using mongoose.

### User Schema:

- name (String)
- email (String)
- password (String)
- passwordConfirm(String)
- photo(String)
- createdAt (Date)

### Book Schema:

- id (String)
- book (ObjectId - a reference to the Review schema)
- name (String)
- author (String)
- price (String)
- description (String)
- percentSale
- img (String)
- priceafterSale (Number)
- category (String)
- slug (String)
- rating (Boolean)
- createdAt (Date)

### Review Schema:

- book (ObjectId - a reference to the Book schema)
- pushlishDate (String)
- sizeWidth (Number)
- sizeHeight (Number)
- chapter (Number)
- coverImage (String)
- pageNumber (Number)
- weight(Number)
- introduction: String,
- createdAt (Date)

### Cart Schema:

- book (ObjectId - a reference to the Book schema)
- user (ObjectId - a reference to the User schema)
- createdAt (Date)

### Order Schema:

- user (ObjectId - a reference to the user schema)
- book (ObjectId - a reference to the book schema)
- createdAt (Date)
- paid (Boolean)
