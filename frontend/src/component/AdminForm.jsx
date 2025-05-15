import React from "react";
import { useForm } from "react-hook-form";

const AdminForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async(data) => {

    await new Promise((resolve)=>setTimeout(resolve, 5000))
    console.log("Product added:", data);
    // TODO: Send this data to backend or state
    reset(); // clear form after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-md shadow-md w-96 space-y-4">
        <h2 className="text-xl font-bold text-center text-black">Add New Product</h2>

        <input
          placeholder="Product Name"
          {...register("name", { required: true, })} // we could add more validation check
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
        {errors.name && <p className="text-red-500 text-sm">Product name is required</p>}

        <input
          placeholder="Price"
          type="number"
          {...register("price", { required: true })} // we could add more validation check
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
        {errors.price && <p className="text-red-500 text-sm">Price is required</p>}

        <input
          placeholder="Image URL"
          {...register("image", { required: true })} // we could add more validation check
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
        {errors.image && <p className="text-red-500 text-sm">Image URL is required</p>}

        <textarea
          placeholder="Description"
          {...register("description", { required: true })} // we could add more validation check
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
        {errors.description && <p className="text-red-500 text-sm">Description is required</p>}

        <input
          placeholder="Category"
          {...register("category", { required: true })} // we could add more validation check
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
        {errors.category && <p className="text-red-500 text-sm">Category is required</p>}

        <input
          placeholder="Stock Quantity"
          type="number"
          {...register("stock", { required: true })} // we could add more validation check
          className="w-full border border-gray-300 rounded px-3 py-2 text-black"
        />
        {errors.stock && <p className="text-red-500 text-sm">Stock quantity is required</p>}

        <input type="submit" disabled={isSubmitting} value={isSubmitting? "submiting":"submit"} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        />
      </form>
    </div>
  );
};

export default AdminForm;
