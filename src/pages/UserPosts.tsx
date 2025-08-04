import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Heart, MessageSquare, Send } from 'lucide-react';
import moment from 'moment';

interface User {
  _id: string;
  name: string;
  email: string;
  bio?: string;
  skills?: string[];
}

interface Comment {
  user: User;
  content: string;
  createdAt: string;
}

interface Like {
  user: User;
  likedAt: string;
}

interface Post {
  _id: string;
  content: string;
  author: User;
  postType: string;
  tags: string[];
  image?: string;
  createdAt: string;
  likes: Like[];
  comments: Comment[];
}

const UserPosts: React.FC = () => {
  const { token, user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');
  const [commentText, setCommentText] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      setPosts(res.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostSubmit = async () => {
    if (!newPost.trim()) return;

    try {
      await axios.post(
        '/api/posts',
        { content: newPost },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewPost('');
      fetchPosts();
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  const toggleLike = async (postId: string) => {
    try {
      await axios.post(
        `/api/posts/${postId}/like`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchPosts();
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  const handleCommentSubmit = async (postId: string) => {
    const content = commentText[postId]?.trim();
    if (!content) return;

    try {
      await axios.post(
        `/api/posts/${postId}/comment`,
        { content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCommentText(prev => ({ ...prev, [postId]: '' }));
      fetchPosts();
    } catch (err) {
      console.error('Error commenting:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Create New Post */}
      <div className="bg-white p-4 rounded shadow-sm border mb-6">
        <textarea
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          rows={3}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePostSubmit}
          disabled={loading}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Post
        </button>
      </div>

      {/* Posts Feed */}
      {posts.map(post => (
        <div key={post._id} className="bg-white rounded shadow-sm border mb-6 p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm text-gray-500">{moment(post.createdAt).fromNow()}</p>
            </div>
          </div>
          <p className="mb-3">{post.content}</p>

          {/* Likes and Comments */}
          <div className="flex gap-4 mb-3 text-sm text-gray-600">
            <button
              onClick={() => toggleLike(post._id)}
              className="flex items-center space-x-1"
            >
              <Heart className="h-4 w-4" />
              <span>{post.likes.length} Like{post.likes.length !== 1 ? 's' : ''}</span>
            </button>
            <div className="flex items-center space-x-1">
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments.length} Comment{post.comments.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Comment Box */}
          <div className="mt-2">
            <input
              type="text"
              value={commentText[post._id] || ''}
              onChange={e =>
                setCommentText(prev => ({ ...prev, [post._id]: e.target.value }))
              }
              placeholder="Add a comment..."
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            />
            <button
              onClick={() => handleCommentSubmit(post._id)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 flex items-center"
            >
              <Send className="w-4 h-4 mr-1" />
              Comment
            </button>
          </div>

          {/* Display Comments */}
          <div className="mt-3 space-y-2">
            {post.comments.map((comment, idx) => (
              <div key={idx} className="text-sm bg-gray-100 px-3 py-2 rounded">
                <p className="font-medium">{comment.user.name}</p>
                <p className="text-gray-700">{comment.content}</p>
                <p className="text-gray-400 text-xs">{moment(comment.createdAt).fromNow()}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
