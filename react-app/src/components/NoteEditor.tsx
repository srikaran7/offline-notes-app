import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LOCAL_STORAGE_KEY = 'notes-app-content';

const NoteEditor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) setContent(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, content);
    toast.success('✅ Note saved offline!');
  };

  const handleDelete = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setContent('');
    toast.info('🗑️ Note deleted.');
  };

  return (
    <div className="container mt-4">
      <h2>My Offline Note</h2>
      <ReactQuill value={content} onChange={setContent} theme="snow" />
      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-success" onClick={handleSave}>Save</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default NoteEditor;
