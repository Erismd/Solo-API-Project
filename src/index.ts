import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import bodyParser from "body-parser";
import { EINPROGRESS } from "constants";
import express from "express";
import { Movies } from "./entity/movies";
//import { delete } from "express/lib/application";

const app = express();
const port = 5000;

(async () => {
  const conn = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "erishimada",
    // password: "admin",
    database: "movie_manager",
    entities: ["src/entity/*ts"],
    synchronize: true,
    logging: false,
  });
  console.log("PG connected.");

  const movieRepository = getRepository(Movies);
  app.use(bodyParser.json());

  app.get("/allMovies", (req, res) => {
    movieRepository.query("SELECT * FROM movies;").then((movie) => {
      res.send(movie);
    });
  });

  app.get("/findMovie/:title", (req, res) => {
    const title = req.params.title;
    movieRepository.findOne({ title: title }).then((movie) => {
      res.send(movie);
    });
  });

  app.post("/addMovie", (req, res) => {
    const newMovie = new Movies();
    for (const key in req.body) {
      newMovie[key] = req.body[key];
    }
    movieRepository.save(newMovie).then((movie) => {
      res.send(movie);
    });
  });

  app.delete("/deleteMovie/:deleted", (req, res) => {
    const deleted = req.params.deleted;
    movieRepository.delete({ id: deleted }).then((movie) => {
      res.send(movie);
    });
  });

  app.patch("/allMoviesUpdate/:id", (req, res) => {
    const id = req.params.id;
    const update = req.body;
    movieRepository.update(id, update).then((movie) => {
      res.send(movie);
    });
  });

  app.get("/Home", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  app.listen(port, () =>
    console.log(`App is listening at http://localhost:${port}`)
  );
  console.log("PG connection closed.");
})();
