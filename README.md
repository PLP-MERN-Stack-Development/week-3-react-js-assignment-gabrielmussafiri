# 🎨 Week 3: React.js, JSX, and Tailwind CSS Assignment

A modern, responsive React application built with Vite, Tailwind CSS, and React Router that demonstrates component architecture, state management, hooks usage, and API integration.

## 🚀 Features

### ✅ Task Management
- **Add new tasks** with real-time input validation
- **Mark tasks as completed** with visual feedback
- **Delete tasks** with confirmation
- **Filter tasks** (All, Active, Completed)
- **Local storage persistence** - tasks survive page reloads
- **Task statistics** showing remaining tasks

### ✅ API Integration
- **JSONPlaceholder integration** for fetching posts
- **Search functionality** to filter posts by title or content
- **Pagination** with configurable items per page
- **Loading states** with spinner animations
- **Error handling** with retry functionality
- **Responsive grid layout** for data display

### ✅ Modern UI/UX
- **Dark/Light mode toggle** with system preference detection
- **Responsive design** that works on mobile, tablet, and desktop
- **Smooth animations** and transitions
- **Accessible components** with proper ARIA labels
- **Modern Tailwind CSS styling**

### ✅ Component Architecture
- **Reusable Button component** with multiple variants
- **Card component** for consistent content display
- **Navbar component** with navigation and theme toggle
- **Footer component** with links and resources
- **Layout component** for consistent page structure

## 🛠️ Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Context** - State management for theme
- **Custom Hooks** - Local storage persistence

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd week-3-react-js-assignment-gabrielmussafiri
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎯 Usage

### Task Management
1. Navigate to the **Tasks** page
2. Add new tasks using the input field
3. Mark tasks as complete by clicking the checkbox
4. Delete tasks using the delete button
5. Filter tasks using the filter buttons (All, Active, Completed)

### API Data
1. Navigate to the **API Data** page
2. View posts fetched from JSONPlaceholder
3. Search posts using the search input
4. Navigate through pages using pagination
5. Toggle between light and dark themes

### Theme Toggle
- Click the theme toggle button in the navbar
- Theme preference is saved in localStorage
- Automatically detects system preference on first visit

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card component for content
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Footer.jsx      # Footer with links
│   ├── Layout.jsx      # Layout wrapper
│   ├── TaskManager.jsx # Task management functionality
│   └── ApiData.jsx     # API integration component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with features overview
│   ├── Tasks.jsx       # Tasks page wrapper
│   └── Api.jsx         # API page wrapper
├── context/            # React context providers
│   └── ThemeContext.jsx # Theme management context
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Adding New Task Features
The TaskManager component uses a custom `useLocalStorageTasks` hook that can be extended to add:
- Task categories/tags
- Due dates
- Priority levels
- Task descriptions

### Styling
All styling is done with Tailwind CSS utility classes. You can:
- Modify the color scheme in `tailwind.config.js`
- Add custom components in `src/index.css`
- Override default styles using Tailwind's `@apply` directive

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 📝 Assignment Requirements Met

- ✅ **Task 1: Project Setup** - Vite + Tailwind + React Router
- ✅ **Task 2: Component Architecture** - Reusable components with props
- ✅ **Task 3: State Management** - useState, useEffect, useContext, custom hooks
- ✅ **Task 4: API Integration** - JSONPlaceholder with search and pagination
- ✅ **Task 5: Styling** - Responsive Tailwind CSS with dark mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the PLP Week 3 React.js Assignment.

---

**Built with ❤️ using React, Tailwind CSS, and Vite**
