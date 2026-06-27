import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserPlus, Trash2, X, Pencil } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiEndpoint } from "../../../apiEndpoint";
import { useCheckAdminCredentials } from "@/components/CheckCred";
import LogoutButton from "@/components/Logout";

interface FacultyMember {
  id: number;
  name: string;
  department: string;
  email: string;
  experience: string;
  phone: string;
  photo: string;
  position: string;
  qualification: string;
  specializations: string;
}

interface FacultyApiResponse {
  data: {
    message: string;
    facultyData: FacultyMember[];
  };
}

export default function FacultyAdd() {
  useCheckAdminCredentials();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    qualification: "",
    experience: "",
    specializations: "",
    email: "",
    phone: "",
    department: "",
  });
  const [editingFacultyId, setEditingFacultyId] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const departments = [
    "English",
    "Mathematics",
    "Nepali",
    "Science",
    "Administration",
  ];

  const emptyFacultyForm = {
    name: "",
    position: "",
    qualification: "",
    experience: "",
    specializations: "",
    email: "",
    phone: "",
    department: "",
  };

  const resetForm = () => {
    setFormData(emptyFacultyForm);
    setEditingFacultyId(null);
    setSelectedFile(null);
    setPreviewUrl("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.department) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!editingFacultyId && !selectedFile) {
      toast({
        title: "Missing Photo",
        description: "Please upload a profile photo.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (selectedFile) {
      data.append("photo", selectedFile);
    }

    try {
      const res = editingFacultyId
        ? await axios.patch(apiEndpoint.updateFaculty(editingFacultyId), data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        : await axios.post(apiEndpoint.addfaculty, data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

      if (res.status === 200 || res.status === 201) {
        toast({
          title: "Success",
          description:
            res.data?.message ||
            (editingFacultyId
              ? "Faculty member updated successfully."
              : "Faculty member added successfully."),
        });

        resetForm();
        fetchFaculty();
      } else {
        throw new Error(res.data?.message || "Unexpected server response.");
      }
    } catch (err) {
      toast({
        title: "Error",
        description:
          err.response?.data?.message || err.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [facultyList, setFacultyList] = useState<FacultyMember[]>([]);

  const fetchFaculty = async () => {
    try {
      const res = (await axios.get(
        apiEndpoint.fetchFaculty
      )) as FacultyApiResponse;
      setFacultyList(res.data.facultyData || []);
    } catch (error) {
      console.error("Error fetching faculty:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.post(apiEndpoint.deleteFaculty(id), { id });
      toast({ title: "Deleted", description: "Faculty member deleted." });
      fetchFaculty();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not delete faculty member.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (faculty: FacultyMember) => {
    setEditingFacultyId(faculty.id);
    setFormData({
      name: faculty.name || "",
      position: faculty.position || "",
      qualification: faculty.qualification || "",
      experience: faculty.experience || "",
      specializations: faculty.specializations || "",
      email: faculty.email || "",
      phone: faculty.phone || "",
      department: faculty.department || "",
    });
    setSelectedFile(null);
    setPreviewUrl(faculty.photo || "");
    if (fileInputRef.current) fileInputRef.current.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  return (
    <div className="mt-16 px-4 py-8 md:px-8 lg:px-16 xl:px-24 space-y-8">
      <div className="flex justify-end">
        <LogoutButton />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground">
          {editingFacultyId ? "Update Faculty Member" : "Faculty Management"}
        </h2>
        <p className="text-muted-foreground">
          {editingFacultyId ? "Edit the selected faculty profile" : "Add a new faculty member"}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="shadow-md">
          <CardHeader className="px-6 pt-4 pb-0" />
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label>Position</Label>
                <Input
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Qualification</Label>
                <Input
                  value={formData.qualification}
                  onChange={(e) =>
                    setFormData({ ...formData, qualification: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Experience</Label>
                <Input
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                />
              </div>
              <div>
                <Label>Specializations</Label>
                <Textarea
                  value={formData.specializations}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specializations: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Label>Department</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, department: value })
                  }
                  value={formData.department}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>{editingFacultyId ? "Replace Photo" : "Photo"}</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  ref={fileInputRef}
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-2 w-24 h-24 object-cover rounded-full"
                  />
                )}
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <UserPlus className="w-4 h-4 mr-2 animate-spin" />
                  {editingFacultyId ? "Updating..." : "Adding..."}
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 mr-2" />
                  {editingFacultyId ? "Update Faculty Member" : "Add Faculty Member"}
                </>
              )}
            </Button>
            {editingFacultyId && (
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
                className="w-full"
                size="lg"
              >
                <X className="w-4 h-4 mr-2" />
                Cancel Update
              </Button>
            )}
          </CardContent>
        </Card>
      </form>

      {/* Faculty List */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Existing Faculty Members</h3>
        {facultyList.length === 0 ? (
          <p className="text-muted-foreground">No faculty data available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((faculty) => (
              <Card key={faculty.id} className="p-4 shadow">
                <div className="flex items-center gap-4">
                  <img
                    src={faculty.photo || "https://via.placeholder.com/80"}
                    alt={faculty.name}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{faculty.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {faculty.position} – {faculty.department}
                    </p>
                    <p className="text-sm">{faculty.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button
                    onClick={() => handleEdit(faculty)}
                    variant="outline"
                    className="w-full"
                  >
                    <Pencil className="w-4 h-4 mr-2" /> Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(faculty.id)}
                    variant="destructive"
                    className="w-full"
                  >
                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
