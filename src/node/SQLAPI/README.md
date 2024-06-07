The task:
provide a REST API for MS SQL database in shortest possible time.

Ideas:
- Use third party software (DreamFactory, Hevodata, etc.)
- Develop your own service

My steps:

I learned about DreamFactory, Hevodata, etc. They seem to be licensed products and time consuming to learn and make it work.
I wondered why there not many ready made free services for this simple task and decided to try prototyping one myself.

I came across one article which inspired me:
https://tomaztsql.wordpress.com/2021/08/10/creating-rest-api-for-reading-data-from-microsoft-sql-server-in-web-browser/

I followed the steps to reproduce and took it a little further with a help from my valued colleague Sergey Smirnov.

The result is here, few lines of code in TODS-RESTAPI which expose any table in a database for a simple query.
This is enough for prototyping. More advanced code may follow covering specific needs.

I found this way is pretty quick for prototyping and will dig deeper in node.js