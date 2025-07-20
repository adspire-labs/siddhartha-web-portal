import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/ui/hero-section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Mail, Phone, Award, BookOpen } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";

// Interfaces
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
  message: string;
  facultyData: FacultyMember[];
}

// Fixed departments
const departments = [
  "English",
  "Mathematics",
  "Nepali",
  "Science",
  "Administration",
];

// Department color mapping
const departmentColors: Record<string, string> = {
  English: "bg-blue-500",
  Mathematics: "bg-purple-500",
  Nepali: "bg-green-500",
  Science: "bg-orange-500",
  Administration: "bg-red-500",
};

export default function Faculty() {
  const [facultyData, setFacultyData] = useState<FacultyMember[]>([]);

  const fetchFacultyData = async () => {
    try {
      const res = await axios.get<FacultyApiResponse>("http://localhost:3000/api/faculty");
      setFacultyData(res.data.facultyData);
    } catch (error) {
      toast.error("Error fetching faculty data");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFacultyData();
  }, []);

  return (
    <div className="pt-16">
      <HeroSection
        subtitle="Our Faculty"
        title="Meet Our Expert Educators"
        description="Dedicated professionals committed to nurturing young minds and providing quality education across all disciplines."
        backgroundImage={schoolBuilding}
        height="md"
      />

      {/* Faculty Departments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {departments.map((deptName, index) => {
              const facultyInDept = facultyData.filter(
                (f) => f.department === deptName
              );

              if (facultyInDept.length === 0) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Department Header */}
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${
                          departmentColors[deptName] || "bg-gray-400"
                        } flex items-center justify-center`}
                      >
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold">
                        {deptName} Department
                      </h2>
                    </div>
                  </div>

                  {/* Faculty Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facultyInDept.map((member) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
                          {/* Profile Photo */}
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = "/images/default-avatar.png";
                              }}
                            />
                          </div>

                          <div className="text-center mb-4">
                            <h3 className="text-lg font-semibold mb-1">
                              {member.name}
                            </h3>
                            <p className="text-primary font-medium text-sm">
                              {member.position}
                            </p>
                          </div>

                          <div className="space-y-3 mb-4 flex-grow">
                            <div className="flex items-center text-sm">
                              <GraduationCap className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {member.qualification}
                              </span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Award className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {member.experience} years
                              </span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-medium text-sm mb-2">
                              Specializations:
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {member.specializations
                                .split(",")
                                .map((spec, specIndex) => (
                                  <Badge
                                    key={specIndex}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {spec.trim()}
                                  </Badge>
                                ))}
                            </div>
                          </div>

                          <div className="space-y-2 text-xs mt-auto">
                            <div className="flex items-center">
                              <Mail className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                              <a
                                href={`mailto:${member.email}`}
                                className="text-muted-foreground hover:text-primary hover:underline"
                              >
                                {member.email}
                              </a>
                            </div>
                            <div className="flex items-center">
                              <Phone className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                              <a
                                href={`tel:${member.phone}`}
                                className="text-muted-foreground hover:text-primary hover:underline"
                              >
                                {member.phone}
                              </a>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Our Academic Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experienced faculty members are dedicated to providing quality
              education and guiding students towards academic and personal
              success.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
