export function renderGuitarCard(guitar) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');

    div.classList.add('guitar-card');

    p.textContent = guitar.name;
    a.href = `./detail/?id=${guitar.id}`;

    div.append(p);
    return a;
}
