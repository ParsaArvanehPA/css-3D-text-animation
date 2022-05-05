const box = document.querySelector('.box');
const textInstanceCount = 16;

for (let i = 1; i < textInstanceCount + 1; i++) {
    const textInstance = document.createElement('span');
    textInstance.setAttribute('style', `--i:${i}`);
    textInstance.innerHTML = `
        <i>css</i><i>is</i><i>A</i><i>wesome</i>
    `

    box.append(textInstance);
}

document.documentElement.style.setProperty('--max-count', `${textInstanceCount}`);
