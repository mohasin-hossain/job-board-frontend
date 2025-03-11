
```markdown
# Job Board Frontend

A job board application built with React, Tailwind CSS, and DaisyUI. 

## Features

- View all available jobs with details
- Create new job listings
- Submit applications for jobs
- View applications by job ID

## Technologies Used

- **React**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **Axios**: HTTP client for API communication
- **React Router**: Client-side routing

## Setup Instructions

### Prerequisites

- Running backend server (Express/PostgreSQL) or (Express/MongoDB)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/job-board-frontend.git
cd job-board-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment (create `.env` file if needed):
```env
VITE_API_URL=http://localhost:4000/api/v1
```

### Running the Application

Start development server:
```bash
npm run dev
```

## API Endpoints Used

The frontend expects these backend endpoints:
- `GET /jobs` - Get all jobs
- `GET /jobs/:id` - Get job details
- `POST /jobs` - Create new job
- `POST /applications` - Submit application
- `GET /applications/:job_id` - Get applications by job ID
