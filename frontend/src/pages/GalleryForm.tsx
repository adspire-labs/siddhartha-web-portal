import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Image as ImageIcon, Trash2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiEndpoint } from "../../apiEndpoint";
import { useCheckAdminCredentials } from "@/components/CheckCred";

interface GalleryItem {
  data: {
    galleryData: {
      id: number;
      title: string;
      description: string;
      photo: string;
      createdAt: string;
    };
  };
}

export default function GalleryUpload() {

    useCheckAdminCredentials()

  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [galleryList, setGalleryList] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch gallery items from backend
  const fetchGallery = async () => {
    setIsLoading(true);
    try {
      const res = (await axios.get(apiEndpoint.fetchGallery)) as GalleryItem;
      setGalleryList(res.data.galleryData);
    } catch (error) {
      toast.error("Failed to fetch gallery images.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // On component mount, load gallery
  useEffect(() => {
    fetchGallery();
  }, []);

  // Handle image file select & preview
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile || !formData.title.trim()) {
      toast.error("Please provide a title and select an image.");
      return;
    }

    setIsUploading(true);

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("photo", selectedFile);

      const response = await axios.post(apiEndpoint.addGallery, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Image uploaded successfully!");
      // Refresh gallery list after upload
      fetchGallery();

      // Reset form & preview
      setFormData({ title: "", description: "" });
      setSelectedFile(null);
      setPreviewUrl("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      toast.error("Upload failed. Please try again.");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  // Handle delete gallery image by id
  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      await axios.post(apiEndpoint.deleteGallery(id), {
        id,
      });
      toast.success("Image deleted.");
      fetchGallery();
    } catch (error) {
      toast.error("Failed to delete image.");
      console.error(error);
    }
  };

  return (
    <div className="space-y-8 min-h-[50vh]">
      <div className="text-center space-y-2 mt-20">
        <h2 className="text-3xl font-bold text-foreground">Gallery Upload</h2>
        <p className="text-muted-foreground">Upload a photo to your gallery</p>
      </div>

      <Card className="bg-gradient-card shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center justify-center space-x-2"></CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Enter image title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Enter image description"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="photo">Select Image</Label>
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                {previewUrl ? (
                  <div className="w-full max-w-md flex flex-wrap justify-center bg-card border border-border rounded-xl shadow-sm p-4 transition hover:shadow-md">
                    <div className="text-sm font-semibold text-muted-foreground mb-2">
                      Image Preview
                    </div>
                    <div className="w-full h-60 aspect-[4/3] overflow-hidden rounded-lg border">
                      <img
                        src={previewUrl}
                        alt="Selected Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30">
                    <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">
                      No image selected
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Select an image to see preview here
                    </p>
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
                    Upload Image
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Gallery List */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 mt-12">Gallery Images</h3>

        {isLoading ? (
          <p className="text-muted-foreground">Loading gallery...</p>
        ) : galleryList.length === 0 ? (
          <p className="text-muted-foreground">No images in the gallery yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryList.map((item) => (
              <Card key={item.id} className="shadow p-4 flex flex-col">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="h-48 w-full object-cover rounded-md mb-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/images/default-image.png";
                  }}
                />
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(item.id)}
                  size="sm"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
