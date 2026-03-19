# 🤖 AI Chat Application (Spring Boot + React)

## 📌 Overview

This project is a **full-stack AI Chat Application** built using:

* **Backend:** Spring Boot + Spring AI (Ollama)
* **Frontend:** React (Vite)
* **AI Model:** Ollama (local LLM)

The application allows users to send messages and receive AI-generated responses in real time.

---

## 🚀 Features

* 💬 Chat with AI (local LLM via Ollama)
* ⚡ Fast REST API using Spring Boot
* 🧠 Context-aware responses
* 💾 Chat history (in-memory / optional persistence)
* 🎨 Clean chat UI (React)
* 🔄 Auto-scroll and input handling

---

## 🏗️ Tech Stack

### Backend

* Java 17+
* Spring Boot
* Spring AI
* Ollama

### Frontend

* React (Vite)
* JavaScript
* Tailwind CSS (optional)

---
## 🖼️ Application UI

![AI Chat UI](https://github.com/unknownhero88/Chat-Bot-using-SpringAi/blob/01a39780ba56cdee6e6e1e58d7e53c923426263c/ss/Screenshot-AIChat%20using%20SPRING%20AI.png)
---

## ⚙️ Installation & Setup

---

### 🔹 1. Clone Project

```bash
git clone https://github.com/your-username/ai-chat-app.git
cd ai-chat-app
```

---

## 🖥️ Backend Setup (Spring Boot)

### 🔹 2. Add Dependency

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-starter-model-ollama</artifactId>
</dependency>
```

---

### 🔹 3. Run Ollama

```bash
ollama run gemini-3-flash-preview
```

---

### 🔹 4. Run Spring Boot

```bash
mvn spring-boot:run
```

Server runs on:

```
http://localhost:8086
```

---

## 🌐 Frontend Setup (React)

### 🔹 5. Create Project

```bash
npm create vite@latest openai-chat-frontend
cd openai-chat-frontend
npm install
```

---

### 🔹 6. Install Dependencies

```bash
npm install axios react-hot-toast react-markdown remark-gfm
```

---

### 🔹 7. Run Frontend

```bash
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### 🔹 Chat API

```
GET /chat?q=your_message
```

### 🔹 Get Chat History

```
GET /chat/show
```

---

## 🧱 Project Structure

```
backend/
 ├── chatController.java
 ├── chat.java
 └── application.properties

frontend/
 ├── src/
 │    ├── App.jsx
 │    ├── config/
 │         └── AxiosHelper.js
 └── index.html
```

---

## 🧠 Data Model

### Chat Model

```java
public class chat {
    private String prompt;
    private String content;
}
```

---




## 🛠️ Improvements (Future Scope)

* ✅ Database integration (MySQL / MongoDB)
* ✅ User authentication (JWT)
* ✅ Chat history per user
* ✅ WebSocket real-time chat
* ✅ Streaming AI responses
* ✅ Code syntax highlighting

---

## ⚠️ Common Issues

### ❌ Chat not persisting after refresh

✔ Fix: Use backend `/chat/show` API or localStorage

---

### ❌ UI not styled

✔ Fix: Ensure Tailwind CSS is installed properly

---

### ❌ API not working

✔ Check:

* Backend running on correct port
* Correct BASEURL in frontend

---

## 👨‍💻 Author

Developed by **Rishi Sahu**

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🛠️ Contribute

---

## 📄 License

This project is open-source and free to use.
