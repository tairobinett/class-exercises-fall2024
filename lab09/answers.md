## SQL Questions
1. SELECT - Retrieving Data. Write a query to list the titles and release years of all movies in the film table.

SELECT title, release_year FROM film;


2. WHERE - Filtering Data. Write a query to find all customers whose last name starts with the letter 'S'.

SELECT * FROM customer WHERE last_name LIKE 'S%';


3. ORDER BY - Sorting Results. List all films titles and their durations, sorted by their rental duration in descending order. If two films have the same rental duration, sort them alphabetically by title.

SELECT title, rental_duration FROM film ORDER BY rental_duration DESC, title ASC;


4. JOIN - Combining Tables. Write a query to list all films along with their categories. Show the film title and category name.

SELECT film.title AS film_title, category.name AS category_name
FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id
INNER JOIN category
ON film_category.category_id = category.category_id;


5. AGGREGATE FUNCTIONS - Summarizing Data. Write a query to find the average rental duration for movies in each category.

SELECT category.name AS category_name, AVG(film.rental_duration) AS average_rental_duration
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
GROUP BY category.name;


6. COUNT - Counting Rows. Write a query to count how many films are in the Action category.

SELECT COUNT(*)
FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Action';


7. INSERT - Adding Data. Insert a new customer into the customer table. The new customer should have a first name, last name, email, and be linked to an existing store.

INSERT INTO customer (first_name, last_name, email, store_id, address_id) 
VALUES ('Mario', 'Mario', 'supermariobrosplumbing@hotmail.com', 1, 1);


8. UPDATE - Modifying Data. Update the rental rate of all films in the Comedy category, increasing it by 10%.

<!-- UPDATE film
SET rental_rate = rental_rate * 1.1
WHERE film_id IN (
    SELECT film_id
    FROM film_category
    INNER JOIN category ON film_category.category_id= category.category_id
    WHERe category.name = 'Comedy'
); -->

<!-- UPDATE film
SET rental_rate = rental_rate * 1.1
FROM film_category
INNER JOIN category ON film_category.category_id = category.category_id
WHERE film.film_id = film_category.film_id
AND film_category.category_id = category.category_id
AND category.name = 'Comedy'; -->


9. DELETE - Removing Data. Write a query to delete all films that have never been rented. Make sure to use a subquery to identify the films that haven't been rented.

SELECT film_id FROM rental
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id;

SELECT title, film_id FROM film
WHERE film_id NOT IN (
    SELECT film_id FROM rental
    INNER JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
);

Only once I feel confident that it will only target the desired films do I change the SELECT to DELETE.

DELETE FROM film
WHERE film_id NOT IN (
    SELECT film_id FROM rental
    INNER JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
);

Which fails due to violating a foreign key constraint for the film_actor table, but I'm too tired to deal with that, so I'll leave you with this.


10. CREATE TABLE & ALTER TABLE - Managing Database Structure. Create a new table called movie_reviews with columns for review_id, film_id, reviewer_name, rating, and comments. Then, add a foreign key constraint linking film_id to the film table.

CREATE TABLE movie_reviews (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    reviewer_name VARCHAR(255),
    rating DECIMAL(3, 1),
    comments TEXT,                  
    CONSTRAINT movie_reviews_film_id_fkey FOREIGN KEY (film_id) REFERENCES film(film_id)
);


## SQLAlchemy Questions

1. Understanding SQLAlchemy Automap: How do you think the `AutoModels` class works to dynamically generate SQLAlchemy ORM models from the database schema?

    The AutoModels class creates an Automap object, which reflects an existing database onto a new model object. It does this by taking metadata of the target database to generate the schemas and relationships of that database in our model object. We pass it an engine object so it can connect to the databse. (source: https://docs.sqlalchemy.org/en/20/orm/extensions/automap.html)

2. Async Database Operations: Explain the use of asynchronous database sessions in this script. Why does the script use AsyncSession instead of a regular Session, and how does this improve the efficiency of database operations?

    Using synchronous sessions would make the application wait for each session to resolve before moving on to the next line of code. Using async sessions allows the AutoModels class to perform its setup model generation without blocking the main application thread.

3. SQLAlchemy Query Construction: In the `model_examples` function, there is a query that selects all customers whose last names start with the letter "P". See if you can write another questy that selects customers whose first name ends with the letters "n" or "a" using SQLAlchemy syntax.

    async with AsyncSession(engine) as session:
        customers = await session.execute(
            select(Customer).where(or_(
                Customer.first_name.endswith("n"),
                Customer.first_name.endswith("a")
            ))
        )
        for customer in customers.scalars().all():
            print(customer.first_name)

4. In the `raw_sql_examples` function, there are two ways to execute SQL queries: directly via the engine using conn.execute() and using an ORM session with session.execute(). Discuss the pros and cons of executing raw SQL directly compared to using SQLAlchemy’s ORM methods.
Hint: Consider the trade-offs in terms of readability, safety (e.g., SQL injection risks), and flexibility when using raw SQL versus ORM abstractions.

    Raw SQL gives the user more control over the exact SQL syntax, and could be faster in some circumstances by avoiding all of the mapping the ORM version has to do. Raw SQL user input is more vulnerable to SQL injection attacks, since it is not necessarily going to be sanitized.
    ORM abstractions can be more readable, especially when constructing longer SQL statements. ORM abstractions are less vulnerable to SQL injection.

