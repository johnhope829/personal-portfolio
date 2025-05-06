"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { ExternalLink, FileText, Github, Loader2, Presentation } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - replace with actual GitHub API integration
const mockProjects = [
  {
    id: 1,
    name: "MarketMind: Marketing AI Agent",
    description: "A text-to-SQL and generative AI backed project providing on-demand marketing analytics and strategy.",
    image: "/images/marketing-ai.png",
    tags: ["Text-to-SQL", "AI Engineering"],
    github: null,
    demo: null,
    paper: null,
    presentation: null,
    private: 1,
  },
  {
    id: 2,
    name: "LLM Evaluation Framework Comparative Analysis",
    description:
      "My capstone project, providing a comparative analysis of LLM evaluation frameworks across various metrics, with a focus on LLM-as-a-judge vs. NLP.",
    image: "/images/llm.jpeg",
    tags: ["LLMs", "LLM Evaluations"],
    github: "https://github.com/AfnanAbdul/LLM-eval-framework-comparison",
    demo: "https://llm-evaluation-framework-leaderboard.vercel.app/",
    paper: "https://drive.google.com/file/d/17rBnXXAm0vKKEukbYxNccgNBGuqIQHTl/view?usp=sharing",
    presentation: "https://drive.google.com/file/d/1gzxtCJxSvA1vDLUs2itpQuvB8cti4-hz/view?usp=sharing",
    private: null,
  },
  {
    id: 3,
    name: "Mood2Music: Multimodal Playlist Generation",
    description:
      "Deep learning project creating personalized music recommendations by integrating facial emotions, biometric data, and audio features to align songs with the user mood and activity.",
    image: "/images/music-ai.png",
    tags: ["Personalized AI", "Audio Processing", "Music Recommendation"],
    github: "https://github.com/johnhope829/multimodal-playlist-generation",
    demo: null,
    paper: "https://drive.google.com/file/d/1Cgjj8zLe9lYmj4VS_ypSyQ9zFAtw9vF7/view?usp=sharing",
    presentation: "https://drive.google.com/file/d/1qri-TowCF3wMqUFpXB5gSmyZcg5_vbjq/view?usp=sharing",
    private: null,
  },
  {
    id: 4,
    name: "DressCode: AI-Powered Fashion Assistant",
    description:
      "AI fashion recommendation system, leveraging computer vision and multimodal AI to analyze wardrobe items and generate personalized outfit suggestions based on user preferences, trends, and occasion context",
    image: "/images/fashion-ai.png",
    tags: ["Personalized AI", "Retrieval-Augmented Generation"],
    github: "https://github.com/argoel21/LLM-Virtual-Fashion-Stylist",
    demo: null,
    paper: "https://drive.google.com/file/d/1pUVpiYUMD1HnQIhdzaT6At064u88w7UJ/view?usp=sharing",
    presentation: "https://drive.google.com/file/d/18vhNcf2nvVkOeNzgl7UrF9hl4ihnJKpD/view?usp=sharing",
    private: null,
  },
  {
    id: 5,
    name: "UVA Building Image Classifier",
    description:
      "A collection of deep learning models trained to correctly identify buildings on UVA's grounds, achieving accuracy rates of over 92%.",
    image: "/images/uva.jpeg",
    tags: ["Computer Vision", "Image Classification"],
    github: "https://github.com/johnhope829/uva-image-classifier",
    demo: null,
    paper: null,
    presentation: null,
    private: null,
  },
  {
    id: 6,
    name: "House Pricing Kaggle Competition",
    description:
      "Kaggle competition using advanced regression techniques including XGBoost, Support Vector Machines, and Random Forest. Scored in the top 1% of participants.",
    image: "/images/housing.png",
    tags: ["Machine Learning"],
    github: "https://github.com/johnhope829/house_price_advanced_regression",
    paper: null,
    presentation: null,
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
                      <CardFooter className="flex flex-wrap gap-2">
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
                        {project.presentation && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={project.presentation} target="_blank" rel="noopener noreferrer">
                              <Presentation className="h-4 w-4 mr-2" />
                              Slides
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
