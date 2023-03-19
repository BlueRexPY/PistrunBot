export type errorHandlerDTO = {
  type: 'group' | 'private';
  // group - The command is only available in groups
  // private - The command is only available in private chats
  language: 'en' | 'uk';
  // en - English
  // uk - Ukrainian
};
