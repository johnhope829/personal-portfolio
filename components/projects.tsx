"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { ExternalLink, FileText, Github, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - replace with actual GitHub API integration
const mockProjects = [
  {
    id: 1,
    name: "MarketMind: Marketing AI Agent",
    description: "A text-to-SQL and generative AI backed project providing on-demand marketing analytics and strategy.",
    image: "/images/marketing-ai.png",
    tags: ["AI Engineering", "Data Processing", "React"],
    github: null,
    demo: null,
    private: 1,
  },
  {
    id: 2,
    name: "LLM Evaluation Framework Comparative Analysis",
    description:
      "My capstone project, providing a comparative analysis of LLM evaluation frameworks across various metrics, with a focus on LLM-as-a-judge vs. NLP.",
    image: "/images/llm.jpeg",
    tags: ["LLMs", "LLM Evaluations"],
    github: null,
    demo: null,
    paper: "https://drive.google.com/file/d/17rBnXXAm0vKKEukbYxNccgNBGuqIQHTl/view?usp=sharing",
    private: 1,
  },
  {
    id: 3,
    name: "UVA Building Image Classifier",
    description:
      "A collection of deep learning models trained to correctly identify buildings on UVA's grounds, achieving accuracy rates of over 92%.",
    image: "/images/uva.jpeg",
    tags: ["Neural Networks", "Image Classification", "PyTorch"],
    github: "https://github.com/johnhope829/uva-image-classifier",
    demo: null,
    private: null,
  },
  {
    id: 4,
    name: "House Pricing Kaggle Competition",
    description:
      "Kaggle competition using advanced regression techniques including XGBoost, Support Vector Machines, and Random Forest. Scored in the top 1% of participants.",
    image: "/images/housing.png",
    tags: ["Machine Learning", "XGBoost", "SVM"],
    github: "https://github.com/johnhope829/house_price_advanced_regression",
    private: null,
  },
  {
    id: 5,
    name: "Predicting Music Genre by Cover Art",
    description:
      "Deep learning project leveraging convolutional neural networks (CNNs) to predict music genre by album cover.",
    image: "/images/music.jpeg",
    tags: ["CNNs", "Image Classification", "TensorFlow"],
    github: "https://github.com/johnhope829/Predicting-Music-Genre-By-Album-Cover",
    private: null,
  },
  {
    id: 6,
    name: "Web Traffic Time Series Analysis & Forecasting",
    description:
      "Created several seasonal forecasting models to predict average monthly page visits, achieving accuracy rates over 94%.",
    image: "/images/forecast.png",
    tags: ["Time Series", "Forecasting"],
    github: "https://github.com/johnhope829/Web-Traffic-Time-Series-Analysis-Prediction",
    private: null,
  },
]

// This would be replaced with actual GitHub API integration
async function fetchGitHubProjects() {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProjects)
    }, 1000)
  })
}

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchGitHubProjects()
        setProjects(data)
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A showcase of my recent work and personal projects
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl py-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsContent value="all" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden flex flex-col h-full">
                      <div className="relative h-48 w-full bg-muted">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        {project.github && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.demo && (
                          <Button asChild size="sm">
                            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Link>
                          </Button>
                        )}
                        {project.paper && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.paper} target="_blank" rel="noopener noreferrer">
                              <FileText className="h-4 w-4 mr-2" />
                              Paper
                            </Link>
                          </Button>
                        )}
                        {project.private && (
                          <Button variant="outline" size="sm" disabled className="opacity-80 cursor-not-allowed">
                            <Github className="h-4 w-4 mr-2" />
                            Working on demos now!
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              {/* Content will be filtered by the activeTab state */}
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              {/* Content will be filtered by the activeTab state */}
            </TabsContent>

            <TabsContent value="data" className="mt-0">
              {/* Content will be filtered by the activeTab state */}
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="https://github.com/johnhope829" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
