import { useQuery } from '@tanstack/react-query';
import { fetchApplications } from '../utils/api';

export const useApplications = (jobId) => {
  return useQuery({
    queryKey: ['applications', jobId],
    queryFn: () => fetchApplications(jobId),
    enabled: !!jobId, // Only run the query if jobId is provided
  });
};
