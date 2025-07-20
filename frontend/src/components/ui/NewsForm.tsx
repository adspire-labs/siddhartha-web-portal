import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const NewsForm = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/news/add", {
        title,
        excerpt,
        category,
        type,
        featured,
      });
      toast.success("News created ");
      navigate("/news");
    } catch (err) {
      toast.error("Failed to create news");
    }
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="bg-white shadow-lg p-8 sm:p-10 md:p-12 rounded-2xl space-y-6 max-w-3xl mx-auto my-12 md:my-20"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-center">
        Add News or Notice
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-md text-base"
        required
      />

      <textarea
        name="excerpt"
        placeholder="Short description"
        onChange={(e) => setExcerpt(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-md text-base resize-none"
        rows={4}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category (e.g. Event, Notice)"
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-md text-base"
        required
      />

      <input
        type="text"
        name="type"
        placeholder="Type (news / notice)"
        onChange={(e) => setType(e.target.value)}
        className="w-full border border-gray-300 p-3 rounded-md text-base"
        required
      />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="featured"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)} // <-- handle change
        />
        <span className="text-sm sm:text-base">Mark as Featured</span>
      </label>

      <Button type="submit" className="w-full py-3 text-lg">
        Submit News
      </Button>
    </form>
  );
};
