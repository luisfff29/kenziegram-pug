# KenzieGram

Instagram clone using [Node.js](https://nodejs.org/en/), [Express.js](http://expressjs.com/), [Multer](https://www.npmjs.com/package/multer), and [Pug](https://pugjs.org/api/getting-started.html) package

## Instructions

1. Once in the homepage, click on `Choose File` and select any picture you'd like to upload.
2. Click on `Upload` and it will redirect to `/upload` where it will display the picture you just submitted and a successfull message.
3. To go back click on `Back` to see your picture followed by the list of the other pictures submitted.

## Requirements

-   A functioning express server
-   A homepage that display all the images using a `fs.readdir` and a template literal
-   A `post` endpoint that receives an upload picture from a form
-   An upload succes screen that shows the image uploaded and a back button to the homepage
-   Any new photos uploaded should be displayed ont he hompeage upon returning to `localhost:3000`

## Run

To start the project you can type on the terminal:

```bash
    node app
```

or

```bash
    npm start
```
