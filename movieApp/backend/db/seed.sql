DROP DATABASE IF EXISTS movieapp;
CREATE DATABASE movieapp;

\c movieapp;

DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS comments;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT REFERENCES genres(id),
  img_url VARCHAR
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  stars INT,
  movie_id INT REFERENCES movies(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  text VARCHAR NOT NULL,
  movie_id INT REFERENCES movies(id)
);

INSERT INTO genres(name) VALUES
('horror'),('comedy'),('animation'),('romance'),('action'),('superhero'),('fiction');

INSERT INTO movies(title, genre_id,img_url) VALUES
('IT',1,'https://alternativemovieposters.com/wp-content/uploads/2017/04/glitchway_it.jpg'),
('White Chicks',2,'http://www.gstatic.com/tv/thumb/v22vodart/34622/p34622_v_v8_ab.jpg'),
('Toy Story',3,'https://cdn.europosters.eu/image/750/posters/toy-story-woody-buzz-i24759.jpg'),
('Taken',5,'https://thatwasabitmental.files.wordpress.com/2013/04/taken-poster.jpg'),
('Kick-Ass',6,'https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_.jpg'),
('The Notebook',4,'https://viewerscommentary.files.wordpress.com/2013/05/the-notebook.jpg'),
('The Matrix',7,'https://www.movieartarena.com/imgs/matrixdvd1.jpg'),
('Jack and the Cuckoo Clock Heart', 3,'https://i.pinimg.com/originals/34/6a/70/346a70abf1d942a5deed6fb0e9e78810.jpg'),
('The Cabin in the Woods',1,'https://statetheatrea2.org/wp-content/uploads/the-cabin-in-the-woods-poster.jpg'),
('Scott Pilgrim vs the World',5,'http://www.gstatic.com/tv/thumb/v22vodart/8045259/p8045259_v_v8_ad.jpg');

INSERT INTO ratings(stars,movie_id) VALUES
(4,1),(5,1),(3,2),(1,10),(4,10),(4,8),(4,8),(4,9),(2,9),(4,4),
(4,4),(4,5),(4,6),(5,7),(4,2),(5,3),(3,3),(1,1),(1,7),(1,6);

INSERT INTO comments(text,movie_id) VALUES
('This movie is trash and anyone who likes it is trash',10),
('Its a pretty good adaptation of the old movie, which in itself was a pretty good adaptation of the book',1),
('omg this movie was exciting! i like the part where he says "I will find u and i will kill you!"',4),
('this is my childhood movie, it all types of good. Recommend for the entire family',3),
('I remember watching this for the first time and not expecting the twist, i legit cried! T_T',6),
('A nice refreshing take on modern horror movies, would watch again',9),
('I have no idea why anyone wouldnt like this movie, its pretty good..',10),
('ppffff u like this movie? whats wrong with u!!?!',10),
('I think its a good movie. I know its not perfect but its still a good watch',10),
('BOOO! Scott Pilgrim is trash! I stand by my opinion..',10),
('WOAAAAHHHH what a mindbender of a movie!',7),
('I actually dont understand whats the hype for this movie....its ok at best',7),
('Its unique and a nice story, watched it with mah gf and we both thought i was good, would recommend',8),
('This movie is hilarious! Dont let anyone else tell u otherwise! they b hatin',2),
('This movies KICKED ASS!!! am i original or what?! AHHAHAHAHAHAHHA',5),
('TRASH!!',1),
('TRASH!!',2),
('TRASH!!',3),
('TRASH!!',4),
('TRASH!!',5),
('TRASH!!',6),
('TRASH!!',7),
('TRASH!!',8),
('TRASH!!',9),
('TRASH!!',10),
('FIRST!',1);
