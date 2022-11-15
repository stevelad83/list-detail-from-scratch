import { getGuitar } from '../fetch-utils.js';
import { renderGuitarDetail } from '../render-utils.js';

const guitarDetailContainer = document.getElementById('guitar-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const guitar = await getGuitar(id);
    const guitarDetailEl = renderGuitarDetail(guitar);
    guitarDetailContainer.append(guitarDetailEl);
});
