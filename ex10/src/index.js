function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Dino Merlin",
      title: "Ispocetka",
      release_year: 2008,
      formats: {
        1: "CD",
        2: "tape",
        3: "MP3",
      },
      gold: true,
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;
