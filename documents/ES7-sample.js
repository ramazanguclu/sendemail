// write a function to retrieve a blob of json
// -make an object request! Use the 'fetch' function.

//http://rallycoding.herokuapp.com/api/music_albums

(function fetchAlbums() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(json => console.log(json))
})()

const fetchAlbums = async () => {
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums1');
    const json = await res.json();

    console.log(typeof json);
};

fetchAlbums();