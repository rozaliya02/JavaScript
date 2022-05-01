function songs(array) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let numberOfSongs = array.shift();
  let songsArray = [];
  let typeOfTheSongs = array.pop();
  for (let index = 0; index < numberOfSongs; index++) {
    let tokens = array[index].split("_");
    let type = tokens[0];
    let name = tokens[1];
    let time = tokens[2];

    let songs = new Song(type, name, time);
    songsArray.push(songs);

    if (typeOfTheSongs === "all") {
      songsArray.forEach(index => console.log(index.name));
    } else {
      let filtered = songsArray.filter(index => index.type === typeOfTheSongs);
      filtered.forEach(i => console.log(index.name));
    }
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
