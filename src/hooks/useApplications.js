import { useQuery } from '@tanstack/react-query';
import { fetchApplications } from '../utils/api';

export const useApplications = (jobId) => {
  return useQuery(['applications', jobId], () => fetchApplications(jobId), {
    enabled: !!jobId, // only run if jobId is provided
  });
};
