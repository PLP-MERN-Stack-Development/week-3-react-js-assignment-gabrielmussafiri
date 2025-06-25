import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

/**
 * API Data component for fetching and displaying data from JSONPlaceholder
 * @returns {JSX.Element} - API Data component
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postsPerPage = 10;

  // Fetch posts from JSONPlaceholder API
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts based on search term
  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [posts, searchTerm]);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle retry
  const handleRetry = () => {
    fetchPosts();
  };

  if (loading) {
    return (
      <Card title="API Data" subtitle="Fetching posts from JSONPlaceholder">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-400">Loading posts...</span>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="API Data" subtitle="Error loading data">
        <div className="text-center py-8">
          <div className="text-red-600 dark:text-red-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Error Loading Data
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error}
          </p>
          <Button onClick={handleRetry} variant="primary">
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card title="API Data" subtitle={`${filteredPosts.length} posts from JSONPlaceholder`}>
      {/* Search Input */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts by title or content..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4 mb-6">
        {currentPosts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              {searchTerm ? 'No posts found matching your search.' : 'No posts available.'}
            </p>
          </div>
        ) : (
          currentPosts.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {post.body.length > 150 ? `${post.body.substring(0, 150)}...` : post.body}
              </p>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Post ID: {post.id}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {indexOfFirstPost + 1} to {Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} posts
          </div>
          <div className="flex space-x-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ApiData; 