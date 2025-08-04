import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Briefcase, MapPin, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  requiredSkills: string[];
  createdAt: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  postedBy: {
    name: string;
    email: string;
  };
}

const JobFeed: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('/api/jobs');
        setJobs(res.data.jobs || []);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Listings</h1>

      {loading ? (
        <p className="text-gray-600">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-gray-600">No jobs available right now.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-6"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <span className="text-sm text-gray-500">
                  {new Date(job.createdAt).toLocaleDateString()}
                </span>
              </div>

              <p className="text-gray-600 mb-2">{job.company}</p>

              <div className="flex flex-wrap text-sm text-gray-500 gap-4 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {job.jobType}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {job.experienceLevel}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Budget: {job.budget.currency} {job.budget.min} - {job.budget.max}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.requiredSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  to={`/jobs/${job._id}`}
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobFeed;
