import type { Conversation } from '../types/chat';

export const initialConversations: Conversation[] = [
  {
    id: 1,
    name: 'Alex Carter',
    online: false,
    messages: [],
  },
  {
    id: 2,
    name: 'Jamie Lee',
    online: true,
    messages: [],
  },
  {
    id: 3,
    name: 'Morgan Park',
    online: false,
    messages: [],
  },
];