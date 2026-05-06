import BlogPage from "./pages/BlogPage";
import { BlogProvider } from "./context/BlogContext";

function App() {
  return (
    <BlogProvider>
      <BlogPage />
    </BlogProvider>
  );
}

export default App;