import { useQuery } from '@tanstack/react-query';
import { fetchJobs } from '../utils/api';

export const useJobs = () => {
  return useQuery(['jobs'], fetchJobs);
};
