import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiEndpoint } from "../../../apiEndpoint";
import { useCheckAdminCredentials } from "../CheckCred";
import LogoutButton from "../Logout";
import { Pencil, X } from "lucide-react";

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  type: string;
  featured: boolean;
  createdAt: string; // ISO date string
}

export interface NewsResponse {
  data: {
    newsData: NewsItem[];
  };
}

export const NewsForm = () => {
  useCheckAdminCredentials();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [featured, setFeatured] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<number | null>(null);

  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetForm = () => {
    setTitle("");
    setExcerpt("");
    setCategory("");
    setType("");
    setFeatured(false);
    setEditingNewsId(null);
  };

  // Fetch news list from backend
  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const res = (await axios.get(apiEndpoint.fetchNews)) as NewsResponse;
      setNewsList(res.data.newsData);
    } catch (error) {
      toast.error("Failed to fetch news.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        title,
        excerpt,
        category,
        type,
        featured,
      };

      if (editingNewsId) {
        await axios.patch(apiEndpoint.updateNews(editingNewsId), payload);
        toast.success("News updated");
      } else {
        await axios.post(apiEndpoint.addNews, payload);
        toast.success("News created");
      }

      resetForm();
      fetchNews();
    } catch (err) {
      toast.error(editingNewsId ? "Failed to update news" : "Failed to create news");
    }
  };

  const handleEdit = (news: NewsItem) => {
    setEditingNewsId(news.id);
    setTitle(news.title);
    setExcerpt(news.excerpt);
    setCategory(news.category);
    setType(news.type);
    setFeatured(news.featured);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this news?")) return;

    try {
      await axios.post(apiEndpoint.deleteNews(id), { id });
      toast.success("News deleted");
      fetchNews();
    } catch (error) {
      toast.error("Failed to delete news");
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-12 md:my-20 space-y-12">
      <div className="flex justify-end">
        <LogoutButton />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 sm:p-10 md:p-12 rounded-2xl space-y-6"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          {editingNewsId ? "Update News or Notice" : "Add News or Notice"}
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md text-base"
          required
        />

        <textarea
          name="excerpt"
          placeholder="Short description"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md text-base resize-none"
          rows={4}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Event, Notice)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md text-base"
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Type (news / notice)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md text-base"
          required
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="featured"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <span className="text-sm sm:text-base">Mark as Featured</span>
        </label>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" className="w-full py-3 text-lg">
            {editingNewsId ? "Update News" : "Submit News"}
          </Button>
          {editingNewsId && (
            <Button
              type="button"
              variant="outline"
              onClick={resetForm}
              className="w-full sm:w-auto py-3 text-lg"
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
          )}
        </div>
      </form>

      {/* News List */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Existing News
        </h3>

        {isLoading ? (
          <p className="text-center text-muted-foreground">Loading news...</p>
        ) : newsList.length === 0 ? (
          <p className="text-center text-muted-foreground">No news found.</p>
        ) : (
          <div className="space-y-6">
            {newsList.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:justify-between md:items-center"
              >
                <div>
                  <h4 className="text-lg font-semibold">{news.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {news.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Category: {news.category} | Type: {news.type}{" "}
                    {news.featured && (
                      <span className="text-primary font-semibold ml-2">
                        (Featured)
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(news)}
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(news.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
