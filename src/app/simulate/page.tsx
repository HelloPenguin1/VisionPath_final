"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  LineChart,
  TrendingUp,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { simulationPaths } from "@/config/careers";
import { SimulationPath } from "@/types/careers";
import { skillCategories } from "@/config/skills"; // Import skillCategories

// Extract unique industries from simulationPaths for the field of interest filter
const industries = [...new Set(simulationPaths.map((path) => path.industry))];

// Sort simulationPaths by growthRate (descending) and convert growthRate to number for comparison
const sortedPaths = [...simulationPaths].sort((a, b) => {
  const growthA = parseFloat(a.growthRate.replace("%", ""));
  const growthB = parseFloat(b.growthRate.replace("%", ""));
  return growthB - growthA;
});

export default function SimulatePage() {
  const [selectedPath, setSelectedPath] = useState<SimulationPath | null>(null);
  const [filters, setFilters] = useState({
    skills: [] as string[],
    fieldOfInterest: [] as string[],
  });

  // Handle checkbox changes for filters
  const handleFilterChange = (type: string, value: string, checked: boolean) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[type as keyof typeof filters].push(value);
      } else {
        updated[type as keyof typeof filters] = updated[type as keyof typeof filters].filter((v) => v !== value);
      }
      return updated;
    });
  };

  // Filter paths based on selected filters
  const filteredPaths = sortedPaths.filter((path) => {
    const matchesSkills = filters.skills.length === 0 || 
      filters.skills.some((skill) => path.requiredSkills.includes(skill));
    const matchesField = filters.fieldOfInterest.length === 0 || 
      filters.fieldOfInterest.includes(path.industry);

    return matchesSkills && matchesField;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-1 px-3 mb-3 text-sm border border-emerald-200 dark:border-emerald-800 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300">
              <LineChart className="w-3.5 h-3.5 mr-1.5" />
              <span>See where your choices lead</span>
            </div>
            <h1 className="text-3xl font-serif font-medium tracking-tight text-gray-900 dark:text-white mb-4">
              Career{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Simulation
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Explore career paths with the highest growth potential tailored to
              your skills and interests.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto py-12">
        {/* Input Section with Checkboxes */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
            <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white">
              Filter Your Path
            </h2>
          </div>
          <div className="space-y-6">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Skills You Have
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category) => (
                  <Card
                    key={category.name}
                    className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <h4 className="text-md font-medium text-gray-800 dark:text-gray-200">
                        {category.name}
                      </h4>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {category.skills.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center space-x-2 p-2 bg-white dark:bg-gray-900 rounded-md border border-gray-100 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Checkbox
                              id={`skill-${skill}`}
                              checked={filters.skills.includes(skill)}
                              onCheckedChange={(checked) =>
                                handleFilterChange("skills", skill, checked as boolean)
                              }
                            />
                            <label
                              htmlFor={`skill-${skill}`}
                              className="text-sm text-gray-700 dark:text-gray-300"
                            >
                              {skill}
                            </label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Field of Interest */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Field of Interest
              </h3>
              <div className="flex flex-wrap gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <Checkbox
                      id={`field-${industry}`}
                      checked={filters.fieldOfInterest.includes(industry)}
                      onCheckedChange={(checked) =>
                        handleFilterChange("fieldOfInterest", industry, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`field-${industry}`}
                      className="text-sm text-gray-700 dark:text-gray-300"
                    >
                      {industry}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Career Paths (Sorted by Growth Rate) */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
            <h2 className="text-2xl font-serif font-medium text-gray-900 dark:text-white">
              Career Pathways (Highest Growth First)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPaths.map((path) => (
              <Card
                key={path.id}
                className="transition-all hover:border-emerald-200 dark:hover:border-emerald-800 cursor-pointer border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
                onClick={() => setSelectedPath(path)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-1">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/60 border-emerald-200 dark:border-emerald-800">
                      {path.growthRate} Growth
                    </Badge>
                    <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl font-medium text-gray-900 dark:text-white">
                    {path.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mt-1">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{path.timeToAchieve}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  Explore pathway <ArrowRight className="ml-1 h-3 w-3" />
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPaths.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No careers match your filters.
              </p>
              <Button
                variant="outline"
                onClick={() => setFilters({ skills: [], fieldOfInterest: [] })}
                className="border border-gray-200 dark:border-gray-800"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Career Detail Dialog */}
        <Dialog
          open={!!selectedPath}
          onOpenChange={(open) => !open && setSelectedPath(null)}
        >
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            {selectedPath && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <LineChart className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      Career Pathway
                    </span>
                  </div>
                  <DialogTitle className="text-2xl font-serif font-medium text-gray-900 dark:text-white">
                    {selectedPath.title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-600 dark:text-gray-300 mt-2">
                    {selectedPath.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-md border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Average Salary
                        </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedPath.averageSalary}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-md border border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          Growth Rate
                        </h4>
                      </div>
                      <p className="text-emerald-600 dark:text-emerald-400">
                        {selectedPath.growthRate}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-1 h-4 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                      Required Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.requiredSkills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-2"></div>

                  <div>
                    <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                      <div className="w-1 h-4 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                      Career Path Journey
                    </h3>
                    <div className="space-y-6">
                      {selectedPath.steps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            {index + 1}
                          </div>
                          <div className="pt-1.5">
                            <p className="text-gray-700 dark:text-gray-300">
                              {step}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/30 rounded-md border border-gray-100 dark:border-gray-800">
                    <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium text-gray-900 dark:text-white">
                        Estimated time to achieve:
                      </span>{" "}
                      {selectedPath.timeToAchieve}
                    </div>
                  </div>
                </div>

                <DialogFooter className="gap-2">
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Close
                    </Button>
                  </DialogClose>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                    Start Simulation
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}