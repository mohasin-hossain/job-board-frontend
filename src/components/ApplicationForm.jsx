import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { submitApplication } from "../utils/api";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import { applicationValidationSchema } from "../validations/applicationValidation";

const ApplicationForm = ({ jobId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(applicationValidationSchema),
  });

  const mutation = useMutation({
    mutationFn: submitApplication,
    onSuccess: () => {
      toast.success("Application submitted successfully!", {
        position: "bottom-center",
      });
      reset();
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-center",
      });
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ ...data, job_id: jobId });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div className="relative">
        <FaUser className="absolute top-3 left-3 text-gray-500 z-10 pointer-events-none" />
        <input
          type="text"
          placeholder="Your Name"
          {...register("applicant_name")}
          className={`input input-bordered w-full pl-10 ${
            errors.applicant_name ? "border-red-500" : ""
          }`}
        />
        {errors.applicant_name && (
          <p className="text-red-500 text-xs">
            {errors.applicant_name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="relative">
        <FaEnvelope className="absolute top-3 left-3 text-gray-500 z-10 pointer-events-none" />
        <input
          type="email"
          placeholder="Your Email"
          {...register("applicant_email")}
          className={`input input-bordered w-full pl-10 ${
            errors.applicant_email ? "border-red-500" : ""
          }`}
        />
        {errors.applicant_email && (
          <p className="text-red-500 text-xs">
            {errors.applicant_email.message}
          </p>
        )}
      </div>

      {/* Cover Letter Field */}
      <div className="relative">
        <FaFileAlt className="absolute top-3 left-3 text-gray-500 z-10 pointer-events-none" />
        <textarea
          placeholder="Cover Letter"
          {...register("cover_letter")}
          className={`textarea textarea-bordered w-full pl-10 pt-3 ${
            errors.cover_letter ? "border-red-500" : ""
          }`}
        />
        {errors.cover_letter && (
          <p className="text-red-500 text-xs">{errors.cover_letter.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-full flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        <FaPaperPlane />
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplicationForm;
