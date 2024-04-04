
Lab: Full Stack Chirper
# Objective

In this lab, you will develop a simple Twitter/X/Social Media-like application named "Chirper" using React, Express, and MySQL. This application will allow users to post messages ("chirps"), view all chirps, and edit or delete their own chirps. You'll integrate front-end routing, back-end services, and a MySQL database to create a full-stack CRUD application.

# Prerequisites

- Knowledge in React, including components, state, hooks, and routing.
- Familiarity with Express for creating RESTful APIs.
- Understanding of MySQL and basic SQL operations.
- Experience with CRUD operations and relational database design.
- Bootstrap for styling.

# Instructions

## Database Setup

  - Note: You should already have the schema created and populated from a previous lab in the Database module! Feel free to simply use that one and skip to cloning, using, and connecting to it from the ESBuild boilerplate. Otherwise re-write a new one for practice, which never hurts!
    
    - Create Database Schema: Create or confirm tables for users, chirps, and mentions.
        - Users table: id, handle, email, created_at

            - create table users(
                id int primary key auto_increment,
                handle varchar(50) not null,
                email varchar(50) not null unique,
                create_at timestamp,
                primary key (id)
            );

        - Chirps table: id, user_id, body, location, created_at
            Hint: one foreign key in this table.
            
            - create table chirps(
                id int primary key auto_increment,
                user_id int,
                body varchar(150) not null,
                location varchar(50),
                created_at datetime default current_timestamp,
                foreign key (user_id) references users (id),
                CONSTRAINT fk_users foreign key (user_id) references users (id) ON DELETE CASCADE
            );

        - Mentions table: user_id, chirp_id
            Hint: two foreign keys in this table.

            - create table mentions (
            chirp_id int,
            user_id int,
            primary key (chirps_id,users_id),
            foreign key (chirp_id) references chirps (id),
            foreign key (user_id) references users (id),
            CONSTRAINT fk_user foreign key (user_id) references users (id) ON DELETE CASCADE,
            CONSTRAINT fk_chirp foreign key (chirp_id) references chirps  (id) ON DELETE CASCADE
            
        );

        - Insert Sample Data: Populate tables with initial data.
    
    - Clone and Setup the Boilerplate: Start by cloning the provided esbuild  React/Express boilerplate (https://github.com/covalence-io/ts-react-express-esbuild.git).
    
    imoport Add MySQL: Integrate MySQL into your project.
        DB Connection and Query Utilities

    * db_connection:
        - import mysql from "mysql2/promise";

        - const pool = mysql.createPool({
            host: "localhost",
            user: "sample_user",
            password:"pswd_sample",
            database: "full_chirpr"
            });

        - pool.query("select * from mentions;")
            .then(res => console.log(res))
            .catch(e=>console.log(e));

        - pool.query("select * from users;")
            .then(res => console.log(res))
            .catch(e=>console.log(e));

        - pool.query("select * from chirps;")
            .then(res => console.log(res))
            .catch(e=>console.log(e));

        - export default pool;
    
    *  queryutil:
       - import pool from "./db_connections";
      
       - import { ResultSetHeader } from "mysql2";
      
       - export async function selctQuery<T>(queryString: string, params?: any): Promise<Partial<T>[]> {
         const [results] = await pool.execute(queryString, params);
         return results as T[];
         }

       - export async function modifyQuery<T>(queryString: string, params?: any): Promise<ResultSetHeader> {
         const [results] = await pool.execute(queryString, params);
         return results as ResultSetHeader;
         }

## Backend Development

    Write SQL Queries: Implement the necessary SQL queries to handle CRUD operations for your chirps.
    Setup Express Routes: Create routes in Express to handle requests for getting all chirps, a single chirp, creating a chirp, updating, and deleting.
    Test with Postman: Ensure your API works correctly by testing each endpoint with Postman.
        Minimum Required Queries/Endpoints
        All CRUD operations for chirps.
            Hardcode an user_id e.g. 1 for who writes each chirp. This will change later when you learn authentication and authorization.
        Logic to get all chirps where a specific user_id is mentioned
        Logic to add and delete mentions.
            Note and Hint: This is not an automated process, you will have to manually add the pair of id's via an endpoint and query.

## Frontend Development

React Routing: Utilize react-router-dom to handle client-side routing for your application.
    
Home Page: Develop a home page that displays previews of all chirps. Each chirp preview should be clickable, leading to a detailed view of the chirp.
    
Chirp Details Page: Implement a view to display a single chirp in full-screen or detailed format. This page should show the chirp's text, author, and creation date.
    
    Compose Chirp View: Create a form view allowing users to post a new chirp. The form should include:
        A text input for the chirp message.
        A dropdown to select and mention a user in the chirp.
    
    Admin Panel: Develop an admin panel where all chirps are listed with options to edit or delete them.
        Include buttons or links for editing and deleting each chirp.
        Clicking the edit option should navigate the user to an edit form with pre-populated chirp data.
    
    User Mentions View: Implement a feature allowing users to select a user from a dropdown and view all chirps that mention the selected user.
        This view should display chirps in a similar format to the home page.

 
# Submission

Upon completion, submit your project repository link. If you customize your schema beyond the requirements written above, e.g. new columns for new features, include a dump of your database! Add a .sql in the root of your project or a comment here in Gravity that includes your table structure and some data you would insert to demo the new features.

 
# Advanced Feature Ideas (Optional but Recommended)
## General Feature Ideas

    User Interaction: Allow users to click on a username and view all chirps mentioning that user and written by that user.
    Pagination: Implement pagination for chirp display on the home page.
    Search Functionality: Add a search bar to find chirps by content or user.
    Enhanced User Interface: Use Bootstrap or custom CSS for styling.
    Mention System: Parse chirp text for @username mentions and store them in the Mentions table.

## Visual and Interactive Enhancements

    Responsive Design: Ensure the blog is responsive and provides an optimal viewing experience across different devices and screen sizes.
    Interactive Elements: Add interactive elements like hover effects, animations, or modals for a more engaging user experience.
    Custom 404 Page: Create a custom 404 Not Found page that aligns with the theme of your blog.

## Security and Best Practices

    Input Validation: Ensure robust server-side validation for all user inputs to prevent SQL injection and other common security vulnerabilities.
    Code Quality: Strive for clean, well-documented code following industry best practices.

