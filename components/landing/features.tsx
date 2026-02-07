import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  Puzzle,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed with edge deployment and intelligent caching for sub-second load times.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security with row-level policies, encrypted data, and SOC 2 compliance.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track key metrics, monitor user behavior, and make data-driven decisions with built-in dashboards.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite team members, manage roles and permissions, and work together seamlessly.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy to multiple regions with automatic scaling to handle traffic spikes effortlessly.",
  },
  {
    icon: Puzzle,
    title: "Easy Integrations",
    description:
      "Connect with your favorite tools through our extensive API and pre-built integrations.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features to help you build, launch, and grow your SaaS
            product.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 size-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
