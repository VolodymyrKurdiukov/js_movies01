let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	}
}

start();

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



function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
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
}

// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGanres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGanres();


