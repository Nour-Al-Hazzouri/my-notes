# Week 7 Short: SQL

## Introduction to Databases

Doug Lloyd introduces SQL (Structured Query Language) and its role in web development. For building complex websites beyond simple static pages, databases become essential for storing and managing information such as:
- Username and password combinations for user authentication
- Shopping history 
- Any other long-term user information

When a user attempts to log in, their credentials are sent to the database, checked against stored information, and access is granted if the combination matches.

## Database Structure Hierarchy

Databases have a hierarchical organization with multiple levels:

1. **Database** - The top level container
2. **Tables** - Collections within a database
3. **Rows and Columns** - The structure within each table

### Excel Analogy

Doug uses Microsoft Excel (or Google Sheets/Numbers) to explain database concepts:

- **Columns** = Letters across the top (A, B, C, D, E)
- **Rows** = Numbered lines down the left side
- **Cells** = Individual data points (like A1 containing a name)
- **Sheets** = Similar to database tables (Sheet 1, Sheet 2, etc.)
- **Workbook (Book 1)** = The entire database

Each sheet contains its own unique set of rows and columns, but all sheets are contained within one file, just as tables are contained within a database.

## SQL Implementation Types

### MySQL
- Open-source platform
- Very commonly used for establishing relational databases
- Industry standard for many applications

### SQLite  
- Similar feature set to MySQL
- More lightweight implementation
- Easier to use in development environments
- **Used in CS50 since 2016** due to its simplicity in CS50 IDE

## phpMyAdmin Tool

Most SQL implementations come with **phpMyAdmin**, a Graphical User Interface (GUI) tool that:
- Executes database queries in a user-friendly way through web browser clicks
- Most commonly used to build databases initially
- Helps set up tables (avoiding cumbersome syntax)
- Essential for creating the initial structure before data insertion

### Table Creation Process

When building a table, you must:
1. Specify exactly which columns will be stored
2. Define column names upfront (username, password, etc.)
3. Design the table structure **before** inserting any data
4. Plan ahead for what information the table will contain

Once created, most queries will refer to data stored in the different rows of the table.

## SQL Data Types

SQL has many more data types than C. Here are 20 common ones (not exhaustive):

### Integer Types
- **INT** - Standard integers (similar to C)
- **SMALLINT** - Smaller range integers
- **TINYINT** - Very small range integers  
- **MEDIUMINT** - Medium range integers
- **BIGINT** - Large range integers

Each has different upper bounds on values they can store.

### Floating Point Types
- **DECIMAL** - Precise decimal numbers
- **FLOAT** - Floating point numbers (replaces C's float/double)

### Date and Time Types
- **DATE** - Store dates
- **TIME** - Store times
- **DATETIME** - Combined date and time
- **TIMESTAMP** - Time stamps

These have no native equivalent in C.

### Text Types
- **TEXT** - Arbitrarily large chunks of text (like strings)
- **CHAR** - Fixed-length strings
- **VARCHAR** - Variable-length strings

### Special Types
- **ENUM** - Limited set of predefined values
- **GEOMETRY** - Store map/GIS data drawings
- **LINESTRING** - Store line/path data on maps
- **BLOB** - Large binary data chunks
- **BINARY** - Binary data
- **BIT** - Bit values

### CHAR vs VARCHAR Explained

**CHAR (Fixed-Length Strings):**
- Not a single character like in C
- Fixed length specified at creation: `CHAR(10)`
- Always stores exact length specified
- Example: Storing "hi" in CHAR(10) stores "hi" + 8 null bytes
- Attempting to store 15 characters only stores first 10

**VARCHAR (Variable-Length Strings):**
- Variable length up to specified maximum: `VARCHAR(99)`
- Can store 1, 2, 3... up to 99 characters
- No wasted space with null bytes
- More flexible for varying content lengths

There are specific reasons to choose CHAR over VARCHAR in certain situations, though VARCHAR is often more practical.

## SQLite Type Affinities

SQLite simplifies the many data types into 5 type affinities:

1. **NULL** - Nothing/no value
2. **INTEGER** - Whole numbers
3. **REAL** - Includes decimal and float
4. **TEXT** - Includes char and varchar
5. **BLOB** - Binary data, geometry, non-text data

Everything reduces to one of these five affinities in SQLite.

## Primary Keys

After specifying columns, you must designate a **primary key** column.

### Why Primary Keys Matter
- Every row must be uniquely and quickly identifiable
- Allows efficient SQL queries
- Ensures data integrity
- Enables fast row lookups

### Primary Key Best Practices
- Usually an integer column
- Should be set to **auto-increment**
- Automatically assigns unique values
- Prevents duplicate/null values in key column
- You can forget about it in queries - database handles it

### Joint Primary Keys
- Combination of two or more columns
- The combination must always be unique
- Example: Column A (letters) + Column B (numbers)
  - Can have multiple A's, B's, C's
  - Can have multiple 1's, 2's, 3's
  - But only ONE combination of A1, one B1, etc.

## Four Main SQL Operations

SQL has limited vocabulary but powerful operations:

### 1. INSERT - Add Information
```sql
INSERT INTO table (columns) VALUES (values)
```

### 2. SELECT - Retrieve Information  
```sql
SELECT columns FROM table WHERE condition ORDER BY column
```

### 3. UPDATE - Modify Information
```sql
UPDATE table SET column = value WHERE condition
```

### 4. DELETE - Remove Information
```sql
DELETE FROM table WHERE condition
```

These four operations handle most database interactions in CS50 and general web development.

## Example Database Structure

Doug uses two example tables throughout:

**users table:**
- idnum (primary key)
- username
- password  
- fullname

**moms table:**
- username
- mother

## INSERT Operation

Adds new rows to a table.

### Syntax:
```sql
INSERT INTO table (columns) VALUES (values)
```

### Example 1 - Users Table:
```sql
INSERT INTO users (username, password, fullname)
VALUES ('newman', 'USMAIL', 'Newman')
```

Result: Adds new row with:
- username: newman
- password: USMAIL
- fullname: Newman
- idnum: 12 (auto-incremented - not specified in query)

The idnum appears automatically because it's set to auto-increment. This ensures uniqueness without manual tracking.

### Example 2 - Moms Table:
```sql
INSERT INTO moms (username, mother)
VALUES ('kramer', 'Babs Kramer')
```

Result: Adds row with kramer's mother information.

## SELECT Operation

Retrieves information from tables.

### Basic Syntax:
```sql
SELECT columns FROM table WHERE predicate ORDER BY column
```

WHERE and ORDER BY are optional but commonly used.

### Example 1 - Simple Select:
```sql
SELECT idnum, fullname FROM users
```

Returns all idnum-fullname pairs from entire users table (3 rows = 3 pairs).

### Example 2 - With WHERE Clause:
```sql
SELECT password FROM users WHERE idnum < 12
```

Returns passwords only for rows where idnum is less than 12 (rows 10 and 11, not 12).

### Example 3 - Select All Columns:
```sql
SELECT * FROM moms WHERE username = 'jerry'
```

The asterisk (*) is shorthand for all columns. Returns complete row data for jerry.

## SELECT with JOIN

Combines data from multiple tables using relationships.

### Why Use Joins?
- Avoid storing all information in one massive table
- Use relationships between tables (relational database)
- Pull information from where needed without duplication
- Keep tables organized and manageable

### Join Syntax:
```sql
SELECT columns FROM table1 JOIN table2 ON predicate
```

### Complex Join Example:
```sql
SELECT users.fullname, moms.mother
FROM users
JOIN moms
ON users.username = moms.username
```

### How Joins Work:

1. **Find Overlap**: Identifies where tables have common data
   - Like a Venn diagram intersection
   - Uses matching values as anchor points

2. **Create Temporary Table**: Hypothetically merges tables
   - Not permanent - just for the query
   - Contains all information from both tables where they match

3. **Extract Requested Data**: Returns only specified columns

### Join Process Example:
- Newman: Not in both tables - excluded
- Kramer: Not in both tables - excluded  
- jerry & gcostanza: In both tables - included

Result: Returns fullname from users and mother from moms for matching usernames.

### Table.Column Notation:
- Disambiguates columns with same names in different tables
- Format: `tablename.columnname`
- Example: `users.username` vs `moms.username`

## UPDATE Operation

Modifies existing data in tables.

### Syntax:
```sql
UPDATE table SET column = value WHERE predicate
```

### Example:
```sql
UPDATE users SET password = 'yadayada' WHERE idnum = 10
```

Result: Changes password from 'fusilli' to 'yadayada' for row with idnum 10.

The WHERE clause identifies which row to update, then the specified column gets the new value.

## DELETE Operation  

Removes entire rows from tables.

### Syntax:
```sql
DELETE FROM table WHERE predicate
```

### Example:
```sql
DELETE FROM users WHERE username = 'newman'
```

Result: Completely removes the row where username equals 'newman' from the users table.

## phpMyAdmin vs Programmatic Access

### phpMyAdmin Limitations:
- Requires manual intervention
- Must log in and click buttons
- Not suitable for automated operations
- Impractical for dynamic websites

### Programmatic Solutions:
- SQL integrates with modern languages (Python, PHP)
- Languages have functions to connect to databases
- Can execute queries automatically through code
- No manual intervention needed
- Enables dynamic, automated database operations

### Integration Example (mentioned for PHP):
```php
$results = query("SELECT fullname FROM users WHERE idnum = 10");
```

This allows websites to automatically handle database operations without human involvement.

## Key Takeaways

1. **Database Design**: Plan table structure before implementation
2. **Primary Keys**: Essential for row identification and query efficiency  
3. **Auto-increment**: Lets database handle unique ID generation
4. **Four Operations**: INSERT, SELECT, UPDATE, DELETE cover most needs
5. **Relationships**: Use joins to connect related data across tables
6. **Automation**: Use programming languages for automatic database manipulation
7. **phpMyAdmin**: Great for initial setup, not for production operations

Doug emphasizes that while this video covers the fundamentals, actual implementation details for connecting programming languages to databases will be covered in language-specific videos. The goal is to understand what databases are, why we use them, and how to manipulate them with SQL's core operations.

---
**Previous**: [[Education/Career Paths/Web Development/2- New/1- CS50x/8- Week 7/1- Week 7 Lecture|1- Week 7 Lecture]] | **Next**: [[Education/Career Paths/Web Development/2- New/1- CS50x/8- Week 7/3- Week 7 Section|Week 7 Section: SQL]]
