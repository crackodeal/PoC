# Overview
This is a prototype designed for quickly developing a generic REST API for SQL objects.

# The task
The task was to provide a REST API for an MS SQL database in the shortest possible time.

# Ideas I started with
- Use third party software (DreamFactory, Hevodata, etc.)
- Develop your own service

# My steps

I learned about DreamFactory, Hevodata, and similar tools. They appear to be licensed products and are time-consuming to learn and implement. I wondered why there aren't many ready-made free services for this simple task, so I decided to try prototyping one myself.

I came across an article that inspired me:
https://tomaztsql.wordpress.com/2021/08/10/creating-rest-api-for-reading-data-from-microsoft-sql-server-in-web-browser/

First, I followed the steps to reproduce and then expanded upon them with assistance from my valued colleague Sergey Smirnov.

The result is here: a few lines of code in TODS-RESTAPI that expose any table in a database for a simple query. This serves as a sufficient prototype. More advanced code may follow to address specific needs.

I found this method to be quite rapid for prototyping and will further explore node.js.
