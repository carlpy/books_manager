import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

// main middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*", // got to change it for production
  })
);

app.get('/home', (req, res) => {
	res.send('Hello from a concurrent world')
})
/*

1- Set up the  bussiness logic ✅
4- Set the jwt and bcrypt for sec
2- Set up the routers for each entities
3- Set up the service and controllers directories 

--|| users endpoints
- all users (get)
- one user (get)
- create a user (post)
- update a user (put)
- delete a user (delete)

--|| books endpoints
- all books (get)
- one book (get)
- create a book (post)
- update a book (put)
- delete a book (delete)

--|| reading_list endpoints
- the books read by a certain user and more details (get)
- add a book per user with it's proper info (post)
- update the status of started/finished (put) 
- delete the book from the reading list of the user

--|| book_notes endpoints
- get the notes of a book of an certain user (get)
- create a note for a book of an certain user (post)
- updating the note of the book (put)
- deleting the note of the book (delete)

*/

export default app;
