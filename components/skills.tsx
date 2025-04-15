import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Bot, Database, BarChart3, Cloud, Code } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: <Brain className="h-8 w-8 mb-2 text-primary" />,
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "MLOps"],
    },
    {
      title: "Artificial Intelligence",
      icon: <Bot className="h-8 w-8 mb-2 text-primary" />,
      skills: [
        "LLMs",
        "Gen AI",
        "AI Engineering",
        "Vector DBs",
        "RAG",
      ],
    },
    {
      title: "Data Engineering",
      icon: <Database className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Data Warehousing", "Data Modeling", "ETL", "Databases (SQL Server, PostgreSQL)"],
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Power BI", "Tableau", "Data Visualization", "Matplotlib", "Seaborn"],
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Microsoft Azure", "AWS", "Snowflake"],
    },
    {
      title: "Programming Languages & Frameworks",
      icon: <Code className="h-8 w-8 mb-2 text-primary" />,
      skills: ["Python", "SQL", "Spark", "Hadoop", "R", "Java", "STATA", "SAS"],
    },
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Technologies and tools I work with
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center">
                {category.icon}
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
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
