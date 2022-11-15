import { getGuitars } from './fetch-utils.js';
import { renderGuitarCard } from './render-utils.js';

/* Get DOM Elements */
// const riff = document.getElementById('riff');

const guitarListContainer = document.getElementById('guitar-list-container');

/* Events */
window.addEventListener('load', async () => {
    // const riff = new Audio('./assets/lonnie_johnson_life_saver_blues.mp3');
    // riff.play();
    const guitars = await getGuitars();
    for (let guitar of guitars) {
        const guitarEl = renderGuitarCard(guitar);
        guitarListContainer.append(guitarEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
