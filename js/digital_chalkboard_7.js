function searchArtist() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm === '') {
        alert('Please enter an artist or band name.');
        return;
    }

    fetch(`https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(searchTerm)}&fmt=json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayArtists(data.artists);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching data. Please try again later.');
        });
}

function displayArtists(artists) {
    const artistResults = document.getElementById('artistResults');
    artistResults.innerHTML = '';

    if (artists.length === 0) {
        artistResults.textContent = 'No artists found.';
        return;
    }

    const ul = document.createElement('ul');
    artists.forEach(artist => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = artist.name;
        a.addEventListener('click', () => {
            fetchAlbums(artist.id);
        });
        li.appendChild(a);
        ul.appendChild(li);
    });
    artistResults.appendChild(ul);
}

function fetchAlbums(artistId) {
    fetch(`https://musicbrainz.org/ws/2/release/?artist=${artistId}&fmt=json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayAlbums(data.releases);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching data. Please try again later.');
        });
}

function displayAlbums(albums) {
    const albumTable = document.getElementById('albumTable');
    const albumList = document.getElementById('albumList');
    albumList.innerHTML = '';

    if (albums.length === 0) {
        alert('No albums found for this artist.');
        return;
    }

    albums.forEach(album => {
        const releaseDate = album['date'] ? album['date'] : 'Unknown';
        const albumName = album['title'] ? album['title'] : 'Unknown';
        const additionalFeature = album['status'] ? album['status'] : 'Unknown';

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${releaseDate}</td>
        <td>${albumName}</td>
        <td>${additionalFeature}</td>
      `;
        albumList.appendChild(tr);
    });

    albumTable.style.display = 'table';
}