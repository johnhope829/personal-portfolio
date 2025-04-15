import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

// Sample classes data - replace with your actual classes
const classes = [
  {
    id: 1,
    name: "Deep Learning",
    institution: "University of Virginia",
    instructor: "Sheng Li",
    date: "Spring 2025",
    description: "Advanced course covering neural networks, CNN, RNN, and transformers with practical applications.",
    skills: ["PyTorch", "Neural Networks", "Computer Vision"],
  },
  {
    id: 2,
    name: "Decoding Large Language Models",
    institution: "University of Virginia",
    instructor: "Chirag Agarwal",
    date: "Spring 2025",
    description: "Covers LLMs and their evolution, core architectures, training methods, and advanced topics like RAG, quantization, and trustworthiness.",
    skills: ["LLMs", "Generative AI", "RAG"],
  },
  {
    id: 3,
    name: "Statistical Learning",
    institution: "University of Virginia",
    instructor: "Micheal Porter",
    date: "Fall 2024",
    description: "Theoretical foundations and practical implementations of machine learning algorithms.",
    skills: ["Machine Learning", "Advanced Regression", "Unsupervised Learning"],
  },
  {
    id: 4,
    name: "Big Data Systems",
    institution: "University of Virginia",
    instructor: "Yue Cheng",
    date: "Spring 2025",
    description: "Design and implementation of distributed systems for processing large-scale datasets.",
    skills: ["Hadoop", "Spark", "Distributed Computing"],
  },
  {
    id: 5,
    name: "Exploratory Text Analytics",
    institution: "University of Virginia",
    instructor: "Rafael Alvarado",
    date: "Spring 2025",
    description: "Techniques for processing and analyzing human language data, including modern transformer models.",
    skills: ["Sentiment Analysis", "Text Analysis"],
  },
  {
    id: 6,
    name: "Bayesian Machine Learning",
    institution: "University of Virginia",
    instructor: "Teague Henry",
    date: "Fall 2024",
    description: "Covers probabilistic modeling and inference techniques with applications in modern machine learning using Bayesian methods",
    skills: ["Probability", "Statistics", "Stan"],
  },
]

export default function Classes() {
  return (
    <section id="classes" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Relevant Coursework</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Key courses throughout my master's degree
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((course) => (
            <Card key={course.id} className="flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                </div>
                <CardDescription>
                  <div className="font-medium">{course.institution}</div>
                  <div className="text-sm">
                    {course.instructor} • {course.date}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
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
