import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTodos(currentPage);
  }, [currentPage]);

  const fetchTodos = async (page) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/fetchtodo?page=${page}`);
      setTodos(response.data.todos);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className='todo-box'>
        {
          todos && todos.length > 0 && todos.map((todo, index) => (
            <div key={index} className='todos'>
              <p>userId: {todo.userId}</p>
              <p>ID: {todo.id}</p>
              <p>Title: {todo.title}</p>
              <p>Body: {todo.body}</p>
            </div>
          ))
        }
      </div>
      <div className='pag-btn-box'>
        <button
          onClick={goToFirstPage}
          disabled={currentPage === 1}
        >
          First
        </button>

        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        <button
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default App;
