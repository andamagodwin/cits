import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

import { useAuthContext } from '../context/authContext'; // Adjust the import path as necessary

const MeetingForm = ({ user }) => {
    const { auth } = useAuthContext();
    const decodedToken = jwtDecode(auth.accessToken);
    console.log('Decoded Token:', decodedToken); // Check the decoded token structure
  const [meetingLink, setMeetingLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    description: '',
    startTime: '',
    duration: 30 // default 30 minutes
  });

  const API_BASE_URL = 'http://localhost:5000/api/new-meet';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateMeeting = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError('');
      setMeetingLink('');

      const response = await axios.post(`${API_BASE_URL}/meetings`, {
        userId: user.id, // assuming user object has id
        ...meetingDetails
      }
      , {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        }
      });

      setMeetingLink(response.data.meetingUri);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create meeting');
      console.error('Meeting creation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Google Meet</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleCreateMeeting}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Meeting Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={meetingDetails.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Team Standup Meeting"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            value={meetingDetails.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Agenda, topics to discuss..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startTime">
              Start Time
            </label>
            <input
              id="startTime"
              name="startTime"
              type="datetime-local"
              value={meetingDetails.startTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
              Duration (minutes)
            </label>
            <select
              id="duration"
              name="duration"
              value={meetingDetails.duration}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="60">60</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating...
            </span>
          ) : (
            'Create Meeting'
          )}
        </button>
      </form>

      {meetingLink && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-2">Meeting Created Successfully!</h3>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={meetingLink}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(meetingLink);
                alert('Link copied to clipboard!');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
            >
              Copy
            </button>
          </div>
          <a
            href={meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Join Meeting
          </a>
        </div>
      )}
    </div>
  );
};

MeetingForm.propTypes = {
    user: PropTypes.object.isRequired
};

export default MeetingForm;