# OpenSearch AI

![OpenSearch AI](assets/opensearch_ai_mockup.png)

OpenSearch AI is an advanced search engine powered by artificial intelligence. This project aims to provide a powerful and intuitive search experience using cutting-edge AI technologies.

Live Demo: [https://opensearchai.live/](https://opensearchai.live/)

## Project Structure

The repository is organized into two main folders:

- `frontend/`: Contains the Next.js-based user interface
- `backend/`: Contains the FastAPI server

## Frontend

The frontend of OpenSearch AI is built using Next.js, a popular React framework that enables server-side rendering and generates static websites for React-based web applications.

### Setup

To set up the frontend:

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Backend

The backend of OpenSearch AI is built using FastAPI, a modern Python web framework that is fast, easy to use, and based on standard Python type hints. The backend server provides an API for the frontend to interact with the search engine. It leverages an OpenAI Tool Calling Agent built using Langchain and powered by gpt-4o-mini. It uses Tavily Search Engine to search the web.

### Setup

To set up the backend:

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Create a virtual environment and install dependencies:
   ```
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. Set the environment variables:
   ```
   cp env.example .env
   ```

3. Run the FastAPI server:
   ```
   uvicorn server:app --reload
   ```

## Contributing

We welcome contributions to OpenSearch AI! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or concerns, please open an issue in this repository or contact the project maintainers.

---

Built with ❤️ by [Raihan Khan](https://raihankhan.dev/links) and [Sayak Sarkar](https://sayaksarkar.dev/). Happy searching with OpenSearch AI!