import { getGuitars } from './fetch-utils.js';
import { renderGuitarCard } from './render-utils.js';
/* Get DOM Elements */

const guitarListContainer = document.getElementById('guitar-list-container');

/* Events */
window.addEventListener('load', async () => {
    const guitars = await getGuitars();
    for (let guitar of guitars) {
        const guitarEl = renderGuitarCard(guitar);
        guitarListContainer.append(guitarEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
