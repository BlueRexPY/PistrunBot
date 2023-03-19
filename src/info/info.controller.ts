import { Context } from 'grammy';
import getInfo from './info.service';

const info = async (ctx: Context): Promise<void> => {
  await ctx.reply(getInfo());
};

export default info;
