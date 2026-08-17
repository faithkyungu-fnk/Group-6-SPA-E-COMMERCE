#  Brew Coffee

##  About the Project

Brew Coffee is a React-based coffee shop web application developed as a group project.

The application provides a simple and user-friendly platform for exploring different types of coffee. Users can browse the available coffee products, search dynamically through the menu, view individual coffee details, and add new coffee products.

The project demonstrates the use of React components, React Router, state management, custom hooks, API requests, and responsive CSS design.


##  Project Scenario

The project was developed as an administrator portal for an e-commerce website.

The application is designed to include:

- A landing page describing the website.
- A product/menu page displaying available products.
- A form for adding new products.
- A product details page.
- The ability to manage product information.
- Dynamic search functionality.
- Responsive design that works across different screen sizes.

For this project, the team chose to create a coffee shop called **Brew Coffee**, selling different types of coffee.


##  Features

###  Landing Page

The home page introduces Brew Coffee and provides users with information about the coffee shop.

It includes:

- A hero section.
- A short description of the coffee shop.
- A link to explore the coffee menu.

###  Coffee Menu

The menu page displays the available coffee products.

Each coffee product displays:

- Coffee name.
- Coffee image.
- Description.
- Price in Kenyan Shillings (Ksh).
- A link to view more details.

###  Dynamic Search

The menu includes a search bar that allows users to dynamically search for coffee.

Users can search by:

- Coffee name.
- Coffee description.

The coffee list updates as the user types.

###  Coffee Details

Users can select a coffee from the menu to view its individual details.

The details page displays:

- Coffee name.
- Coffee image.
- Description.
- Price.
- Delete option.

###  Add Coffee

The application includes a form that allows an administrator to add a new coffee product.

The form accepts:

- Coffee name.
- Price.
- Description.
- Image URL.

The new coffee is submitted to the JSON Server API and added to the coffee collection.

###  Delete Coffee

An administrator can delete an existing coffee product from the coffee details page.

###  Responsive Design

The application uses CSS to provide a responsive layout that adapts to different screen sizes, including desktop and mobile devices.

###  Navigation

React Router is used to navigate between the different pages without requiring a full page reload.


##  Technologies Used

The project was built using the following technologies:

- **React** — Frontend user interface.
- **JavaScript** — Application logic.
- **React Router DOM** — Client-side routing.
- **Vite** — Development and build tool.
- **JSON Server** — Mock REST API.
- **HTML** — Application structure.
- **CSS** — Styling and responsive design.
- **Git & GitHub** — Version control and collaboration.


##  Project Structure

Group-6-SPA-E-COMMERCE/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── CoffeeCard.jsx
│   │   ├── CoffeeForm.jsx
│   │   ├── CoffeeList.jsx
│   │   ├── NavBar.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── hooks/
│   │   └── useFetch.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── AddCoffee.jsx
│   │   └── CoffeeDetails.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── db.json
├── package.json
├── package-lock.json
└── README.md

## Components

The application is built using reusable React components, with each component responsible for a specific part of the application's functionality.

### CoffeeCard

The `CoffeeCard` component displays an individual coffee product.

It displays:

- Coffee image
- Coffee name
- Coffee description
- Coffee price
- A link to view the coffee details

The component receives the coffee information through props.

### CoffeeList

The `CoffeeList` component displays the collection of available coffee products.

It receives coffee data from the `Menu` page and maps through the coffee items to render individual `CoffeeCard` components.

It also works with the `SearchBar` component to filter coffee products based on the user's search input.

### SearchBar

The `SearchBar` component provides the search interface for the coffee menu.

It allows users to enter a search term and dynamically filter the available coffee products.

The component receives the current search term and the function used to update the search term through props.

### CoffeeForm

The `CoffeeForm` component provides the form used to collect information about a new coffee product.

The form allows the administrator to enter:

- Coffee name
- Price
- Description
- Image URL

When the form is submitted, the information is passed to the `AddCoffee` page for processing.

### NavBar

The `NavBar` component provides navigation throughout the application.

It contains links to:

- Home
- Menu
- Add Coffee

It also includes a mobile navigation menu for smaller screens.

### useFetch

The `useFetch` is a custom React hook used to fetch data from the JSON Server API.

It manages:

- `data` — stores the fetched data
- `loading` — tracks whether the request is still in progress
- `error` — stores an error message if the request fails

This allows pages such as the `Menu` page to handle data fetching, loading states, and errors without repeating the same fetching logic.


##  Pages

The application is divided into several pages, with each page handling a specific part of the user experience.

### Home

The `Home` page serves as the landing page for Brew Coffee.

It introduces the coffee shop and provides a link that directs users to the coffee menu.

### Menu

The `Menu` page displays the available coffee products.

It uses the `useFetch` custom hook to retrieve coffee data from the JSON Server API and passes the data to the `CoffeeList` component.

The page also includes a hero section introducing the coffee menu.

### AddCoffee

The `AddCoffee` page allows the administrator to add a new coffee product.

It uses the `CoffeeForm` component to collect coffee information and sends the data to the API using a `POST` request.

After successfully adding a coffee, the user is redirected back to the menu.

### CoffeeDetails

The `CoffeeDetails` page displays information about a specific coffee product.

The coffee is identified using the ID provided in the URL.

The page displays:

- Coffee name
- Coffee image
- Coffee description
- Coffee price

It also provides an option to delete the coffee product.


##  Application Routes

React Router is used to navigate between the different pages of the application.

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page for Brew Coffee |
| `/menu` | Menu | Displays available coffee products |
| `/add-coffee` | Add Coffee | Allows the administrator to add a new coffee |
| `/coffee/:coffeeId` | Coffee Details | Displays details of a specific coffee |


##  API

The application uses **JSON Server** to provide a local REST API for storing and managing coffee products.

The coffee data is stored in: db.json
The main API endpoint is:
http://localhost:3000/coffees

### API Operations
#### Get all coffees
- GET /coffees
Retrieves all coffee products from the database.

Get a single coffee
-GET /coffees/:id
Retrieves a specific coffee using its ID.

Add a coffee
POST /coffees
Adds a new coffee product to the database.

Delete a coffee
DELETE /coffees/:id
Removes a coffee product from the database.


## Getting Started
Follow these steps to run the project locally.

1. Clone the repository
git clone < https://github.com/faithkyungu-fnk/Group-6-SPA-E-COMMERCE >

2. Navigate into the project directory
cd Brew-Coffee

3. Install dependencies
npm install

4. Start the JSON Server
Run:
npm run server
The JSON Server will run on:
http://localhost:3000
Keep this terminal running.

5. Start the React development server
Open another terminal in the project directory and run:
npm run dev
Vite will provide a local development URL, usually:
http://localhost:5173
Open the URL in your browser to access the application.


## Team Contributions
This project was developed collaboratively by the team.
Team Member 1: Maureen Mutua
Responsibilities:
CoffeeCard component.
Home page.
App.jsx.

Team Member 2: Dorothy Koskei
Responsibilities:
CoffeeList component.
CoffeeDetails page.
Database (db.json).

Team Member 3: Levis Nelson
Responsibilities:
NavBar component.
Menu page.
useFetch custom hook.

Team Member 4: Faith Kyungu
Responsibilities:
CoffeeForm component.
AddCoffee page.

Team Member 5: Emmanuel Mwangi
Responsibilities:
SearchBar component.
Application styling and CSS.
README documentation.


## Learning Objectives
Through this project, the team practiced and demonstrated the following concepts:
--Building reusable React components.
--Passing data between components using props.
--Managing component state using useState.
--Handling side effects using useEffect.
--Creating and using custom React hooks.
--Fetching data from a REST API.
--Sending GET, POST, and DELETE requests.
--Handling forms in React.
--Implementing dynamic search functionality.
--Using React Router for client-side navigation.
--Creating responsive user interfaces with CSS.
--Organizing a React application into components, pages, and hooks.
--Using Git and GitHub for version control.
--Collaborating on a group software development project.


## Collaboration
The project was developed collaboratively using Git and GitHub.
Each team member worked on a specific feature using their own branch. Completed work was then shared with the team and merged into the main project.
The general workflow was:
Create Feature Branch
        ↓
Develop Feature
        ↓
Test Feature
        ↓
Commit Changes
        ↓
Push Branch to GitHub
        ↓
Review Changes
        ↓
Merge Into Main
This workflow allowed the team to work on different parts of the application simultaneously while keeping the main branch organized.


## Future Improvements
The application can be further improved by adding features such as:
-- Editing existing coffee products.
-- Shopping cart functionality.
-- Payment integration.
-- Administrator authentication.
-- Coffee categories.
-- Advanced filtering options.
-- Customer ratings and reviews.
-- Order management.
-- Improved loading and error handling.


## Contributors
 1. Faith Kyungu- <https://github.com/faithkyungu-fnk>
 2. Levis Nelson- <https://github.com/levisnelson54-wq>
 3. Maureen Mutua- <https://github.com/modidi>
 4. Dorothy Koskei- <https://github.com/dorothykoskei-spec>
 5. Emmanuel Mwangi- <https://github.com/EmmanuelMwangi021>

## License
This project was developed for educational purposes as part of a group software engineering project.
