import { Composer } from 'grammy';

import info from '../info/info.controller';

const composer = new Composer();

composer.command('info', info);

export default composer;
