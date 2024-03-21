\c songs_playlists

INSERT INTO songs (title, artist) VALUES
('Shape of You', 'Ed Sheeran'),
('Blinding Lights', 'The Weeknd'),
('Rockstar', 'Post Malone ft. 21 Savage'),
('Someone Like You', 'Adele'),
('Closer', 'The Chainsmokers ft. Halsey'),
('Thinking Out Loud', 'Ed Sheeran'),
('Sunflower', 'Post Malone, Swae Lee'),
('Levitating', 'Dua Lipa'),
('Watermelon Sugar', 'Harry Styles'),
('Dance Monkey', 'Tones and I'),
('Rolling in the Deep', 'Adele'),
('Lose Yourself', 'Eminem'),
('Viva La Vida', 'Coldplay'),
('Firework', 'Katy Perry'),
('Believer', 'Imagine Dragons'),
('Bad Romance', 'Lady Gaga'),
('Uptown Funk', 'Mark Ronson ft. Bruno Mars'),
('Happy', 'Pharrell Williams'),
('All of Me', 'John Legend');



INSERT INTO playlists (name) VALUES
('Workout Hits'),
('Chill Vibes'),
('Top Hits 2023'),
('Rock Classics'),
('Jazz Essentials'),
('Electronic Beats');


INSERT INTO playlistSongs (playlist_id, song_id) VALUES
(1, 1),
(1, 3), 
(2, 5),
(2, 3),
(3, 2), 
(4, 6), 
(5, 4), 
(6, 2), 
(3, 1), 
(2, 6),
(1, 7), 
(1, 8), 
(2, 9), 
(2, 10), 
(3, 11),
(3, 12), 
(4, 13),  
(4, 14), 
(5, 15), 
(5, 16), 
(6, 17), 
(6, 18),
(2, 16),
(2, 17),
(1, 19);
