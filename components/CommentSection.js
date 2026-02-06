'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { format } from 'date-fns';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  // Fetch comments in real-time
  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsArray = [];
      querySnapshot.forEach((doc) => {
        commentsArray.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsArray);
    });
    
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !username.trim()) {
      alert('Please enter both a username and comment');
      return;
    }
    
    if (newComment.length > 1000) {
      alert('Comment must be 1000 characters or less');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'comments'), {
        username,
        text: newComment,
        timestamp: new Date(),
      });
      
      setNewComment('');
      setCharCount(0);
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Error posting comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCommentChange = (e) => {
    const text = e.target.value;
    setNewComment(text);
    setCharCount(text.length);
  };

  return (
    <div className="comment-section">
      <h2 className="text-2xl font-bold mb-6">Community Comments</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Add Your Comment</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="comment" className="block text-sm font-medium mb-1">
              Comment (max 1000 characters)
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={handleCommentChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              placeholder="Share your thoughts about FlipperX..."
              required
              maxLength={1000}
            />
            <div className="text-right text-sm mt-1">
              <span className={charCount > 900 ? 'text-red-600' : 'text-gray-500'}>
                {charCount}/1000
              </span>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>
      
      <div className="comments-list">
        <h3 className="text-lg font-semibold mb-4">
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </h3>
        
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-50 p-5 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-blue-700">{comment.username}</h4>
                  <span className="text-sm text-gray-500">
                    {comment.timestamp && format(new Date(comment.timestamp.seconds * 1000), 'MMM d, yyyy h:mm a')}
                  </span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}