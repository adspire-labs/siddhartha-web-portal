import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Upload,
  Image as ImageIcon,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiEndpoint } from "../../apiEndpoint";
import { useCheckAdminCredentials } from "@/components/CheckCred";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  photo: string;
  createdAt: string;
}

export default function GalleryUpload() {
  useCheckAdminCredentials();

  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [galleryList, setGalleryList] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch gallery items from backend
  const fetchGallery = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(apiEndpoint.fetchGallery);
      setGalleryList(res.data.galleryData);
    } catch (error) {
      toast.error("Failed to fetch gallery images.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Handle multiple file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      setSelectedFiles(newFiles);

      const urls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  // Handle form submit for multiple files
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFiles.length === 0 || !formData.title.trim()) {
      toast.error("Please provide a title and select at least one image.");
      return;
    }

    setIsUploading(true);

    try {
      const uploadPromises = selectedFiles.map((file) => {
        const form = new FormData();
        form.append("title", formData.title);
        form.append("description", formData.description);
        form.append("photo", file);
        return axios.post(apiEndpoint.addGallery, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      });

      await Promise.all(uploadPromises);
      toast.success(`${selectedFiles.length} image(s) uploaded successfully!`);
      fetchGallery();

      // Reset form
      setFormData({ title: "", description: "" });
      setSelectedFiles([]);
      setPreviewUrls([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      toast.error("Upload failed. Please try again.");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      await axios.post(apiEndpoint.deleteGallery(id), { id });
      toast.success("Image deleted.");
      fetchGallery();
    } catch (error) {
      toast.error("Failed to delete image.");
      console.error(error);
    }
  };

  // Remove a preview image before upload
  const removePreviewImage = (index: number) => {
    const newFiles = [...selectedFiles];
    const newUrls = [...previewUrls];

    newFiles.splice(index, 1);
    newUrls.splice(index, 1);

    setSelectedFiles(newFiles);
    setPreviewUrls(newUrls);
  };

  // Group gallery items by title (for display only)
  const groupedGallery = galleryList.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    }
    acc[item.title].push(item);
    return acc;
  }, {} as Record<string, GalleryItem[]>);

  const openLightbox = (title: string, index: number = 0) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const currentGroup = Object.values(groupedGallery).flat();
    if (direction === "prev") {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : currentGroup.length - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev < currentGroup.length - 1 ? prev + 1 : 0
      );
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      {/* Lightbox - only for gallery display */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-4xl w-full">
            <img
              src={
                Object.values(groupedGallery).flat()[currentImageIndex].photo
              }
              alt="Gallery"
              className="max-h-[80vh] w-full object-contain"
            />

            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-4">
              <button
                onClick={() => navigateLightbox("prev")}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateLightbox("next")}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Gallery Upload</h2>
          <p className="text-muted-foreground">
            Upload and manage gallery images
          </p>
        </div>

        {/* Upload Form - Individual Images */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      placeholder="Enter title"
                      required
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      placeholder="Enter description"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Select Images</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <Label>Preview ({previewUrls.length} selected)</Label>
                  {previewUrls.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto p-2 border rounded-lg">
                      {previewUrls.map((url, index) => (
                        <div
                          key={index}
                          className="relative aspect-square overflow-hidden rounded border group"
                        >
                          <img
                            src={url}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removePreviewImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30 h-full flex items-center justify-center">
                      <div>
                        <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          No images selected
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={isUploading}
                  className="w-full md:w-1/2"
                  size="lg"
                >
                  {isUploading ? (
                    <>
                      <Upload className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Images
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Gallery Display - Grouped View */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Gallery Collections</h3>
          {isLoading ? (
            <p className="text-center text-muted-foreground">
              Loading gallery...
            </p>
          ) : galleryList.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No images in gallery yet
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(groupedGallery).map(([title, items]) => (
                <Card key={title} className="hover:shadow-md transition-shadow">
                  <div
                    className="relative aspect-square overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(title)}
                  >
                    <img
                      src={items[0].photo}
                      alt={title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                    {items.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        +{items.length - 1} more
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {items[0].description}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-muted-foreground">
                        {new Date(items[0].createdAt).toLocaleDateString()}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(items[0].id);
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
