export type MessageStatus = 'Sent' | 'Delivered' | 'Read';

export interface Message {
  id: number;
  text: string;
  sender: 'You' | 'Contact';
  timestamp: string;
  status: MessageStatus;
}

export interface Conversation {
  id: number;
  name: string;
  online: boolean;
  messages: Message[];
}