# ProShop eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

This is the course project for my [MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce) course

![screenshot](https://github.com/bradtraversy/proshop_mern/blob/master/uploads/Screen%20Shot%202020-09-29%20at%205.50.52%20PM.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### VS Code Extension

- ES7 React/Redux Toolkit
- Bracket Pair Colorizer
- Auto Rename Tag
- Javascript (ES6) Snippet
- Prettier

* To set automatically Save from settings

## Starting The front End

### Create React App

- npx create-react-app frontend
- change the title and meta content in the index.html file
- remove the git repository from the frontend folder (rm -rf .git)
- move the .gitignore from frontend to the root folder
- (node_modules/ :- which is not include in the node_module from both front end and server)

### React Bootstrap , Header and Footer set up

- add react bootstrap.min.css in the src/ file .
- import it into the index.js file

```
import  './bootstrap.min.css'

```

- Footer.js

```
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>copy right &copy; proshop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

```

- index.css

```
main {
  min-height: 80vh;
}
``

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id

```

### Install Dependencies (frontend & backend)

```

npm install
cd frontend
npm install

```

### Run

```

# Run frontend (:3000) & backend (:5000)

npm run dev

# Run backend only

npm run server

```

## Build & Deploy

```

# Create frontend prod build

cd frontend
npm run build

```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```

# Import data

npm run data:import

# Destroy data

npm run data:destroy

```

```

Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456

```

```
