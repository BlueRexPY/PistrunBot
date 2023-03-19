import { errorHandlerDTO } from './dto/errorHandler.dto';

export const errorHandler = ({ type, language }: errorHandlerDTO) => {
  switch (type) {
    case 'group':
      switch (language) {
        case 'en':
          return 'This command is only available in groups';
        default: // uk
          return 'Ця команда доступна тільки в групах';
      }
    default: // private
      switch (language) {
        case 'en':
          return 'This command is only available in private chats';
        default: // uk
          return 'Ця команда доступна тільки в приватних чатах';
      }
  }
};
