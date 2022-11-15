export function renderGuitarCard(guitar) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');

    div.classList.add('guitar-card');

    p.textContent = `Name: ${guitar.name}, Brand:${guitar.company}, Type: ${guitar.type}, Price: $${guitar.price}`;
    a.href = `./detail/?id=${guitar.id}`;

    div.append(p, a);
    return div;
}
