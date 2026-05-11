# Direct Chat Workspace

A modern messaging application built with **React**, **TypeScript**, and **Tailwind CSS**.
This project provides a clean and organized chat experience with conversation management, search functionality, and responsive UI design.

---

## Features

* Create new conversations
* Search conversations dynamically
* Responsive modern UI
* Reusable React components
* TypeScript support
* Message display system
* Conversation selection
* Online/offline presence indicators

---

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* Vite

---

## Project Structure

```bash
src/
│
├── components/
│   ├── Sidebar.tsx
│   ├── ConversationItem.tsx
│   ├── ChatHeader.tsx
│   ├── ChatWindow.tsx
│   ├── MessageBubble.tsx
│   └── MessageInput.tsx
│
├── data/
│   └── conversations.ts
│
├── types/
│   └── chat.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Justchidi26/messaging-app.git
```

Navigate into the project folder:

```bash
cd message-app
```

Install dependencies:

```bash
npm install
```

---

## Running the Project

Start the development server:

```bash
npm run dev
```

The application will run on:

```bash
http://localhost:5173
```

---

## Core Functionalities

### Create Conversation

Users can create new conversations using the "+" button.

### Search Conversations

The search bar filters chats dynamically as users type.

### Message Interface

Users can:

* Select conversations
* View messages
* Send messages
