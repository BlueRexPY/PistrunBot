require('../src/index');

import { webhookCallback } from 'grammy';
import bot from '../src/core/bot';

export default webhookCallback(bot, 'http');
