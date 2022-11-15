export function renderGuitarCard(guitar) {
    // const div = document.createElement('div');
    // const a = document.createElement('a');
    // const p = document.createElement('p');
    // const img = document.createDocumentFragment('img');

    // div.classList.add('guitar-card');
    // img.src = 'assets/Stratocaster.png';
    // console.log(img);
    // p.textContent = `Name: ${guitar.name}, Price: $${guitar.price}`;
    // a.href = `./guitar/?id=${guitar.id}`;

    // div.append(p, img);
    // a.append(div);
    // return a;
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('guitar-card');
    img.classList.add('pictures');
    a.classList.add('anchor');

    p.textContent = guitar.name;
    img.src = `assets/${guitar.name}.png`;
    a.href = `./guitar/?id=${guitar.id}`; // link to the guitar's detail page here

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderGuitarDetail(guitar) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const brandEl = document.createElement('p');
    const priceEl = document.createElement('p');
    const typeEl = document.createElement('p');

    div.classList.add('guitar-detail');

    nameEl.textContent = guitar.name;
    nameEl.classList.add('name');
    priceEl.textContent = `$${guitar.price}`;
    brandEl.textContent = `Made by ${guitar.company}`;
    priceEl.classList.add('price');
    typeEl.textContent = `A classic ${guitar.type} guitar`;

    div.append(nameEl, brandEl, typeEl, priceEl);

    return div;
}
