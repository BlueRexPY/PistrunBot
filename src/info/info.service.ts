import config from '../config';

const { app, author } = config;

const getInfo = () => `
Status: Online 🟢
Bot: ${app.name}
Description: ${app.description}
Version: ${app.version} - ${app.date}
GitHub: ${app.github}

Author: ${author.name}
GitHub: ${author.github}`;

export default getInfo;
