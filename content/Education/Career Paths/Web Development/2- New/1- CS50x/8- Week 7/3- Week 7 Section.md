# Week 7 Section: SQL

## Introduction

Yuliia Zhukovets, a preceptor at Harvard, introduces Week 7's section on SQL. She helps run both the college class and online components of CS50. SQL (Structured Query Language) is a language for managing databases that is widely used across industry. It's essential for this week's problem set and the upcoming finance problem set in a few weeks. SQL is also valuable for final projects when managing vast amounts of data.

## Agenda Overview

Today's section covers:
1. Database design principles
2. How to design databases well and identify important attributes
3. Diving into the songs problem set for practical query writing experience
4. Accessing information from databases effectively

## Database Design Principles

### Principle 1: Single Entity Tables

**Each table should be a collection of a single entity.**

Different tables should store different kinds of information for better separation and easier access. Rather than congregating all information in one table, separate them by entity type.

#### Example Database Structure:

**employees table:**
- name
- role

**employee_relationships table:**
- manager
- employee

This separation avoids:
- Multiple rows repeating information
- Multiple columns repeating information
- Inefficient data storage

Example entries:
```
employees:
- Alice | IT Staff
- Laura | General Manager

employee_relationships:
- Laura | Alice (showing Laura manages Alice)
```

### Principle 2: Single Location Storage with ID References

**Each piece of data should be stored in a single location and referred to by its ID (primary key).**

#### The Problem with Names:
Using names like "Laura" and "Alice" in relationship tables creates issues:
- What if there's another Laura with a different last name?
- What if there's another Alice?
- Name clashes become problematic

#### The Solution - Unique IDs:
Assign everyone a unique ID so both humans and computers know there's only one person with that specific ID.

**Improved structure:**
```
employees:
id | name  | role
1  | Alice | IT Staff
2  | Laura | General Manager

employee_relationships:
manager_id | employee_id
2          | 1
```

This ensures no ambiguity about which Laura or Alice is being referenced.

## Creating a Database - Hands-On Practice

Yuliia invites viewers to follow along in CS50.dev or watch and practice later.

### Step 1: Create the Database

```sql
sqlite3 friends.db
```

This command creates a new database called `friends.db` and enters the SQL environment.

### Step 2: Design Table Requirements

Before creating tables, think ahead about:
- What information to store
- Column structure needed
- Data types for each column
- Constraints and requirements

Example requirements for a friends table:
- ID column (primary key)
- First name
- Last name
- Additional friend attributes as needed

### SQL Syntax Introduction

SQL is different from C and Python:
- **Not a top-to-bottom program structure**
- **Query-based language**
- **Like LEGO blocks** - putting building blocks together and combining them

Convention:
- **CAPITALIZE** SQL keywords (CREATE TABLE, PRIMARY KEY)
- **lowercase** for column names and values

## Creating Tables

### Basic Table Creation

```sql
CREATE TABLE friend (
    id,
    first_name,
    last_name,
    PRIMARY KEY(id)
);
```

### Primary Key Functions:
1. Ensures IDs are unique for every row
2. Auto-creates IDs if not specified when inserting
3. Auto-increments by 1 for new entries

### Improved Table Creation with Types

Yuliia asks what's missing from the basic creation and explains we need **types**:

```sql
CREATE TABLE friend (
    id INTEGER,
    first_name TEXT,
    last_name TEXT,
    PRIMARY KEY(id)
);
```

Types specify:
- ID should be a number (INTEGER)
- Names are strings (TEXT in SQL)

### Complete Table Creation with Constraints

```sql
CREATE TABLE friend (
    id INTEGER NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    PRIMARY KEY(id)
);
```

**NOT NULL constraint:**
- Ensures required fields aren't empty
- "I don't want friends whose last name I don't know"
- "I don't want friends whose first name I don't know"
- These attributes are specified when creating the table initially

### Viewing Table Structure

Use the `schema` command to see table structure:

```sql
.schema
```

This shows the complete structure of created tables.

**Note:** The actual SQL shows `CREATE TABLE IF NOT EXISTS` - a keyword ensuring the table isn't created again if it already exists.

## Inserting Data

### INSERT Syntax Structure

```sql
INSERT INTO tablename (column1, column2)
VALUES (value1, value2);
```

**Important:** Values must correlate exactly with specified columns:
- If column 1 is first_name, value 1 must be the first name
- Order matters!

### Practical Insert Example

```sql
INSERT INTO friend (first_name, last_name)
VALUES ('Carter', 'Zenke');
```

### Viewing Inserted Data

```sql
SELECT * FROM friend;
```

### Auto-Increment Demonstration

When inserting without specifying ID:
1. First insert (Carter) gets ID 1 automatically
2. Second insert (David) gets ID 2 automatically
3. IDs increment by 1 each time

```sql
INSERT INTO friend (first_name, last_name)
VALUES ('David', 'Malan');
```

Result:
```
1 | Carter | Zenke
2 | David  | Malan
```

### Manual ID Specification

You can specify IDs manually:

```sql
INSERT INTO friend (id, first_name, last_name)
VALUES (5, 'John', 'Harvard');
```

Result:
```
1 | Carter | Zenke
2 | David  | Malan
5 | John   | Harvard
```

### ID Uniqueness Constraint

Testing duplicate IDs:

```sql
INSERT INTO friend (id, first_name, last_name)
VALUES (5, 'Brian', 'Yu');
```

**Result:** Error - ID must be unique!

### Auto-Increment After Manual IDs

After manually setting ID 6 for Brian, the next auto-increment continues from the highest existing ID:

```sql
INSERT INTO friend (first_name, last_name)
VALUES ('Alice', 'Smith');
```

Alice gets ID 7 (continuing from Brian's ID 6).

## The Songs Database

### Database Structure

**songs.db** contains two tables:

**songs table:**
- id (unique identifier)
- name (song title)
- tempo
- duration
- artist_id (links to artists table)
- Additional attributes: danceability, energy, valence

**artists table:**
- id (unique identifier)
- name (artist name)
- birthyear
- label

The database contains the top 100 songs from Spotify in 2018.

## SELECT Queries

### Basic SELECT Structure

```sql
SELECT columns
FROM table
WHERE condition
ORDER BY column
```

Every query follows a specific order - like LEGO building blocks.

### Column Selection

Specify exact columns needed:
```sql
SELECT name FROM songs;
```

Use `*` for all columns:
```sql
SELECT * FROM songs;
```

### WHERE Clauses

Filter results with conditions:

```sql
SELECT name 
FROM songs 
WHERE duration < 240;
```

This returns only songs shorter than 240 seconds.

### LIKE Operator with Wildcards

The `%` symbol indicates wildcard characters:

```sql
WHERE title LIKE '%Percy Jackson'    -- Ends with "Percy Jackson"
WHERE title LIKE 'Percy Jackson%'    -- Starts with "Percy Jackson"
WHERE title LIKE '%Percy Jackson%'   -- Contains "Percy Jackson" anywhere
```

## Problem Set Examples

### Query 1: List All Song Names

```sql
SELECT name FROM songs;
```

Simple selection of all song names from the database.

## Ordering Results

### ORDER BY Keyword

Equivalent to sort functionality in Google Sheets or Excel.

**Default:** Ascending order (lowest to highest)

```sql
SELECT * 
FROM songs 
WHERE tempo > 100 
ORDER BY tempo;
```

**Descending order:** Must specify DESC

```sql
SELECT * 
FROM songs 
WHERE tempo > 100 
ORDER BY tempo DESC;
```

Yuliia notes she always specifies ASC or DESC explicitly because she forgets the default.

### Query 2: Songs by Increasing Tempo

```sql
SELECT name 
FROM songs 
ORDER BY tempo;
```

Returns all songs ordered from slowest to fastest tempo.

### Practical Example with Multiple Columns

```sql
SELECT name, tempo 
FROM songs 
ORDER BY tempo DESC;
```

This shows both name and tempo, ordered from highest to lowest tempo.

## Limiting Results

### LIMIT Keyword

Controls how many rows are returned:

```sql
SELECT * 
FROM songs 
WHERE tempo > 100 
ORDER BY tempo ASC 
LIMIT 1;
```

Returns only the first result after filtering and ordering.

**Why use LIMIT?**
- Avoid scrolling through thousands of rows
- See specific subsets of data
- More manageable terminal output

### Query 3: Top 5 Longest Songs

```sql
SELECT name 
FROM songs 
ORDER BY duration_ms DESC 
LIMIT 5;
```

Lists the five longest songs in descending order of length.

## Query Layering Logic

Yuliia explains the sequence of operations:

1. **SELECT/FROM** - Initial data retrieval
2. **WHERE** - First subset, filtering rows by values
3. **ORDER BY** - Sorting the filtered data
4. **LIMIT** - Final step, grabbing specified number of rows

Think of it as top-to-bottom processing, even though SQL is query-based.

"Apply the same top to bottom principles that we learned in C and Python to make sure you're writing queries in a way that would produce the results you want."

## Multiple Conditions

### Query 4: Songs with High Danceability, Energy, and Valence

```sql
SELECT name 
FROM songs
WHERE danceability > 0.75 
AND energy > 0.75 
AND valence > 0.75;
```

**Important:** Must specify each column condition explicitly - no shortcuts!

### AND vs OR Operators

- **AND**: All conditions must be true
- **OR**: At least one condition must be true

Both can be chained after a single WHERE clause.

## Aggregate Functions

Functions that perform calculations on data sets:

### Available Functions:
- **COUNT()** - Counts number of rows
- **MIN()** - Finds minimum value
- **MAX()** - Finds maximum value
- **AVG()** - Calculates average
- **SUM()** - Adds up values

Note: Numerical functions only work on appropriate column types.

### COUNT Example

```sql
SELECT COUNT(*) 
FROM songs 
WHERE tempo > 100;
```

Returns a single value: the count of songs with tempo > 100.

### Column Aliasing

Rename output columns for clarity:

```sql
SELECT COUNT(*) AS n 
FROM songs 
WHERE tempo > 100;
```

Output shows "n" instead of "COUNT(*)".

### Query 5: Average Energy

```sql
SELECT AVG(energy) 
FROM songs;
```

Returns the average energy value across all songs.

## Working with Multiple Tables

Two approaches for connecting tables:
1. **Nested SELECTs** (Yuliia's personal favorite)
2. **JOINs**

### Understanding Table Relationships

Tables connect through shared columns:
- **songs.artist_id** links to **artists.id**
- This creates the relationship between tables

Visual process (as humans):
1. See song with artist_id = 23
2. Look in artists table for id = 23
3. Find Porter Robinson

Computers need explicit instructions for these connections.

## Nested SELECT Statements

### Working Inside-Out

Start with the innermost query:

```sql
SELECT id 
FROM artists 
WHERE name = 'Oh Wonder';
```

This returns: 45

Then use that result in the outer query:

```sql
SELECT * 
FROM songs 
WHERE artist_id = (
    SELECT id 
    FROM artists 
    WHERE name = 'Oh Wonder'
);
```

**Key point:** Not hard-coding the number 45 - using a query to find it dynamically.

### Query 6: Songs by Post Malone

```sql
SELECT name 
FROM songs 
WHERE artist_id = (
    SELECT id 
    FROM artists 
    WHERE name = 'Post Malone'
);
```

Process:
1. Inner query finds Post Malone's ID (54)
2. Outer query finds songs with that artist_id
3. Human never sees the ID number

### Building Queries Step-by-Step

Yuliia's advice:
1. Don't write entire nested queries at once
2. Start with innermost query
3. Test each layer
4. Build up gradually

Example progression:
```sql
-- Step 1: Find Drake's ID
SELECT id FROM artists WHERE name = 'Drake';
-- Returns: 23

-- Step 2: Use that ID
SELECT energy FROM songs WHERE artist_id = 23;

-- Step 3: Combine with nesting
SELECT AVG(energy) 
FROM songs 
WHERE artist_id = (
    SELECT id 
    FROM artists 
    WHERE name = 'Drake'
);
```

### Query 7: Average Energy of Drake's Songs

```sql
SELECT AVG(energy) 
FROM songs 
WHERE artist_id IN (
    SELECT id 
    FROM artists 
    WHERE name = 'Drake'
);
```

Note: Using `IN` instead of `=` works when the subquery might return multiple values.

## JOIN Operations

### How JOINs Work

JOINs create a temporary combined table:

```sql
SELECT * 
FROM songs 
JOIN artists 
ON songs.artist_id = artists.id;
```

This creates a table with all columns from both tables where the relationship matches.

### JOIN Result Structure

Combined table contains:
```
songs columns | artists columns
id | name | tempo | duration | artist_id | id | name | birthyear | label
```

### Filtering JOINed Data

```sql
SELECT * 
FROM songs 
JOIN artists 
ON songs.artist_id = artists.id 
WHERE artists.name = 'Oh Wonder';
```

### Dot Notation

Use `table.column` to specify exact columns:
- `songs.artist_id`
- `artists.id`
- `artists.name`

This disambiguates when tables have columns with same names.

## Nested SELECTs vs JOINs

### Considerations:

**Nested SELECTs:**
- More intuitive for some (like building blocks)
- Clear step-by-step logic

**JOINs:**
- Create temporary combined tables
- Can be memory-intensive with large tables
- Avoid over-joining to prevent performance issues

For CS50 problems, either approach works - choose based on personal preference.

### Important Note about JOINs:

The combined table from a JOIN:
- Is created temporarily for the query
- Is not stored permanently
- Exists only during query execution

## Working with Featured Artists

### Query 8: Songs with Featured Artists

Identifying pattern: Songs with featured artists contain "feat." in the title.

```sql
SELECT name 
FROM songs 
WHERE name LIKE '%feat.%';
```

The `%` wildcards on both sides catch any text before or after "feat."

### Discovery Process

Yuliia emphasizes:
1. Inspect your database first
2. Look for patterns in the data
3. Don't expect to know the exact query immediately
4. Similar to pseudocoding - write ideas, then build blocks

## Tips for Query Writing

### Whitespace Handling
- Use quotes for values containing spaces
- Reference lecture for handling quotes within strings

### Nested Conditions
- Can use parentheses to nest AND/OR conditions
- Allows complex logical combinations

### Schema Reference
- Always keep schema open side-by-side
- Reference exact column names
- Avoid typos in column names

### Building Complex Queries
1. Start simple
2. Test each component
3. Layer constraints gradually
4. Think about operation sequence

## Common Student Questions

### Column Uniqueness
**Q:** Does each column need unique values?
**A:** Only the primary key is unique by default. Use UNIQUE constraint for other columns if needed.

### Auto-Increment Behavior
**Q:** What happens to auto-increment after manual ID assignment?
**A:** Next auto-increment continues from the highest existing ID.

### Operator Combinations
**Q:** Can you combine AND and OR?
**A:** Yes, use parentheses to control logic flow.

### Aggregate Functions on Non-Numeric Columns
**Q:** Can you use AVG on text columns?
**A:** No, numerical aggregate functions only work on appropriate data types.

## Resources and Practice

### Additional Resources:
- **W3Schools** - Great resource for SQL keywords not covered in lecture
- Practice is essential for getting used to query-based languages
- Browse documentation for more operators and keywords

### Final Advice:
- SQL keywords don't come "baked into your brain"
- Feel free to explore and experiment
- Build intuition through practice
- Use available resources freely

## Key Takeaways

1. **Database Design:** Separate entities into different tables, use IDs for relationships
2. **SQL Structure:** Query-based, not procedural like C/Python
3. **Building Blocks:** Layer constraints step-by-step
4. **Two Approaches:** Nested SELECTs or JOINs for multi-table queries
5. **Practice:** Essential for mastering SQL's unique syntax and approach
6. **Semicolons:** They're back! Don't forget them or queries won't run

Yuliia concludes by thanking everyone for joining Week 7's section on SQL.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/8- Week 7/2- Week 7 Short|Week 7 Short: SQL]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/9- Week 8/1- Week 8 Lecture|Lecture 8 - HTML, CSS, and JavaScript]]
