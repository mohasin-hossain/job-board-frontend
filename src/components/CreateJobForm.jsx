import { useMutation } from '@tanstack/react-query';
import { createJob } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createJobValidationSchema } from '../validations/createJobValidation'; 
import { zodResolver } from '@hookform/resolvers/zod'; 

const CreateJobForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createJobValidationSchema), 
  });

  const mutation = useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      toast.success("Job created successfully!");
      navigate('/');
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({
      title: data.title,
      description: data.description,
      company: data.company,
      location: data.location,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-12">
      {/* Title Field */}
      <input
        type="text"
        placeholder="Job Title"
        {...register('title')}
        className={`input input-bordered w-full ${errors.title ? 'border-red-500' : ''}`}
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      
      {/* Description Field */}
      <textarea
        placeholder="Job Description"
        {...register('description')}
        className={`textarea textarea-bordered w-full ${errors.description ? 'border-red-500' : ''}`}
      />
      {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      
      {/* Company Field */}
      <input
        type="text"
        placeholder="Company Name"
        {...register('company')}
        className={`input input-bordered w-full ${errors.company ? 'border-red-500' : ''}`}
      />
      {errors.company && <p className="text-red-500 text-sm">{errors.company.message}</p>}
      
      {/* Location Field */}
      <input
        type="text"
        placeholder="Location"
        {...register('location')}
        className={`input input-bordered w-full ${errors.location ? 'border-red-500' : ''}`}
      />
      {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-full"
      >
        Create Job
      </button>
    </form>
  );
};

export default CreateJobForm;
