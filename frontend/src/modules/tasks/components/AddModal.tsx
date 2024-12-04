import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import useTasks from '../actions/hook';

const validationSchema = Yup.object({
  title: Yup.string()
    .required('Title is required')
    .max(100, 'Title cannot be longer than 100 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters'),
  dueDate: Yup.date()
    .required('Due date is required')
    .min(new Date(), 'Due date cannot be in the past'),
});

const AddModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addTask } = useTasks();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      dueDate: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setIsOpen(false);
      formik.resetForm();
      addTask(values);
    },
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      const firstInput = document.getElementById('title');
      firstInput?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Trigger button to open the modal */}
      <button
        role="button"
        onClick={openModal}
        className="bg-gray-200 rounded-md px-3 py-1 hover:bg-gray-100"
      >
        Add Tasks
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50"
          onClick={handleBackdropClick} // Close modal on backdrop click
        >
          <div className="modal modal-open">
            <div className="modal-box w-full sm:w-96">
              <h2 className="text-2xl font-bold mb-4">Add Task</h2>

              <form onSubmit={formik.handleSubmit}>
                {/* Title field */}
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="input input-bordered input-sm w-full mt-2"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div className="text-sm text-red-500 mt-1">{formik.errors.title}</div>
                  )}
                </div>

                {/* Description field */}
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="textarea textarea-bordered w-full mt-2"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.description && formik.errors.description && (
                    <div className="text-sm text-red-500 mt-1">{formik.errors.description}</div>
                  )}
                </div>

                {/* Due Date field */}
                <div className="mb-4">
                  <label
                    htmlFor="dueDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    className="input input-bordered input-sm w-full mt-2"
                    value={formik.values.dueDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.dueDate && formik.errors.dueDate && (
                    <div className="text-sm text-red-500 mt-1">{formik.errors.dueDate}</div>
                  )}
                </div>

                {/* Submit button */}
                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="bg-gray-900 rounded-md px-3 text-white py-1 hover:bg-gray-800"
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 rounded-md px-3 py-1 hover:bg-gray-100"
                    aria-label="Close modal"
                    role="button"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddModal;
