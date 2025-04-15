import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

// Sample certifications data - replace with your actual certifications
const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Data Scientist Associate",
    organization: "Microsoft",
    date: "2025",
    description: "Validates expertise in using Azure services to build, train, and deploy machine learning solutions.",
    skills: ["Azure Machine Learning", "Azure Databricks", "MLOps"],
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Data Engineer Associate",
    organization: "Microsoft",
    date: "2023",
    description: "Understanding of data engineering tasks to implement and manage data engineering workloads on Microsoft Azure, using a number of Azure services.",
    skills: ["Big Data", "Data Warehousing", "Data Processing", "SQL"],
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-engineer/",
  },
  {
    id: 3,
    name: "Microsoft Certified: Azure AI Fundamentals",
    organization: "Microsoft",
    date: "2023",
    description: "Demonstrate knowledge of machine learning and AI concepts and related Microsoft Azure services.",
    skills: ["Generative AI", "Machine Learning", "NLP"],
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Professional certifications I've gained during my career.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.id} className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                </div>
                <CardDescription>
                  <span className="font-medium">{cert.organization}</span> • {cert.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
