# Tasks Mangement

## What I use

Frontend : `React js` `Tailwind css` `Axios` `SweetAlert2` `Formik` `Yup` `Daisyui`

## Explanation of My Approach

1. **Framework and State Management**:
   - Used **React.js** for the frontend.
   - Managed state using **Redux Toolkit**.

2. **Task List and CRUD Operations**:
   - Used **Axios** to interact with the backend API to perform CRUD operations:
     - **GET** `/tasks` to fetch the list of tasks.
     - **POST** `/tasks` to create a new task.
     - **PATCH** `/tasks/{id}` to mark tasks as completed.
     - **DELETE** `/tasks/{id}` to delete tasks.
   - Added buttons for marking tasks as completed and deleting them directly from the task list.


3. **Add New Task**:
   - Used **Formik** to manage form state and handle form submission.
   - Used **Yup** for schema-based form validation:
     - **Title** and **Due Date** are required fields.
     - **Due Date** must follow a proper date format (e.g., YYYY-MM-DD).
   - Displayed error messages below each invalid field using Formik’s validation and error handling to guide the user in fixing the input errors.

4. **Task Filtering**:
   - Added a filter dropdown to show tasks based on their status:
     - **All Tasks**: Shows all tasks.
     - **Completed Tasks**: Shows only completed tasks.
     - **Incomplete Tasks**: Shows only tasks that are not completed.
   - When the user selects a filter, the filter choice is sent to the backend.
   - The task list updates based on the filter choice, showing only the tasks that match.




## Installation

### Backend Environment Variables

In the `backend` folder, create a file named `.env` and add the following content:

```plaintext
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Navigate to backend folder
```bash
cd backend 
```

Install the dependencies and start the project:
```bash
npm install
npm run dev
```

### Frontend Environment Variables

In the `frontend` folder, create a file named `.env` and add the following content:

```plaintext
REACT_APP_API = http://localhost:8000/api/v1/public
```

Navigate to frontend folder
```bash
cd frontend
```
Install the dependencies and start the project:
```bash
npm install
npm start
```

## Project Link

You can view the live project here: [Project Link](https://task-management-front-gray.vercel.app/tasks)