# Online Shopping Application

This is a simple web application that allows users to order items online. It includes features like viewing a list of items, adding items to a cart, viewing cart details, and completing orders. The application also includes an order history feature that allows users to view past orders.

## Features

- View a list of items for sale
- View details of an individual item
- Add items to the cart
- View the cart with item details and total cost
- Increment and decrement item quantities in the cart
- Remove items from the cart
- Complete an order and store it in order history
- View order history and details of past orders
- Reorder items from past orders

## Technologies Used

- React
- React Router DOM
- React Toastify
- Tailwind CSS
- Vite

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:[username]/online-shopping-app.git
   cd online-shopping-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

## Project Structure

- **components**: Contains all the React components used in the application

  - **Cart.jsx**: Component to view and manage items in the cart
  - **Home.jsx**: Component to view the list of items for sale
  - **ItemDetail.jsx**: Component to view details of an individual item
  - **OrderHistory.jsx**: Component to view the list of past orders
  - **OrderHistoryDetail.jsx**: Component to view details of a specific order from the order history
  - **OrderSummary.jsx**: Component to view the summary of the current order before completion

- **context**: Contains the context and reducer for managing the cart and order history state

- **data**: Contains the JSON file with the initial list of items
