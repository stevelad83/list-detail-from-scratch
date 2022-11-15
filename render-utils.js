export function renderGuitarCard(guitar) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');

    div.classList.add('guitar-card');

    p.textContent = `Name: ${guitar.name}, Price: $${guitar.price}`;
    a.href = `./guitar/?id=${guitar.id}`;

    div.append(p);
    a.append(div);
    return a;
}

export function renderGuitarDetail(guitar) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const brandEl = document.createElement('p');
    const priceEl = document.createElement('p');

    div.classList.add('guitar-detail');

    nameEl.textContent = guitar.name;
    nameEl.classList.add('name');

    brandEl.textContent = `${guitar.company}`;
    priceEl.classList.add('price');

    div.append(nameEl, brandEl, priceEl);

    return div;
}
