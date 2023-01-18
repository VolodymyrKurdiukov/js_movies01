const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из последних просмотренных фильмов?', ''),
// 	d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = +prompt('На сколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50 && b < 11) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}
if (personalMovieDB.count < 10) {
	alert('Вы просмотрели мало фильмов');
	console.log('Вы просмотрели мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классический зритель');
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман');
	console.log('Вы киноман');
} else {
	alert('произошла ошибка');
	console.log('произошла ошибка');
}

console.log(personalMovieDB);



