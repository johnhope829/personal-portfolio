import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Get to know more about my background and what drives me
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src="/images/profile.png"
                alt="John Hope profile picture"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">Who I Am</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I'm a passionate data scientist with a strong focus on creating clean, efficient, and insightful data solutions. I'm currently finishing up my Master's in Data Science at the University of Virginia (May 2025), while continuing to work professionally as an Advanced Analytics Senior Consultant. With an academic and professional background in machine learning and AI, I bring a unique perspective to every project I work on.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">My Journey</h3>
              <p className="text-gray-500 dark:text-gray-400">
                My passion for technology and data science stems from a drive to solve complex and disparate problems. With years of experience in data-driven roles, with focuses on analytics, engineering, machine learning, and AI-driven automation, I strive to continually expand my skill set to stay at the forefront of innovation in the space.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">My Approach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I love letting data tell its own story and using those insights to drive smart, impactful decisions—turning numbers into narratives that make a real difference. Whether it’s uncovering hidden patterns or optimizing solutions, I’m all about making data work its magic!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
