# pastebin-clone
Carbon Senior Engineer Assignment

# Steps to get the application running
1. Clone project
2. Run 'npm install' to install dependencies.
3. I am using mongodb on the atlas cloud(https://www.mongodb.com/atlas/database) and you would need to create an account and create a database there and pass address in your environment variable.
4. Run 'node start' to start the application
5. Run 'npm test' to run tests


# Endpoints
1. To get all content : GET /api/content
3. To get specific content: GET /api/content/:shortUrl
4. To create content: POST /api/content



Sample data for POST request:
{
    "title":"Love don't cost a thing",
    "text":"Lorem ipsum is shit",
    "expiration":1
}
