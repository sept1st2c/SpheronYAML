import { Zap, Shield, RefreshCw } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap size={40} />,
      title: "Natural Language Parsing",
      description:
        "Effortlessly translate user prompts into valid Spheron YAML configurations.",
    },
    {
      icon: <Shield size={40} />,
      title: "Validation & Error Prevention",
      description:
        "Automatically ensure the generated YAML meets Spheron's ICL specifications, avoiding misconfigurations.",
    },
    {
      icon: <RefreshCw size={40} />,
      title: "Easy Iterations",
      description:
        "Easily refine or regenerate YAML by simply adjusting your natural language requests.",
    },
  ];

  return (
    <section id="features" className="features py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold text-gray-200 mb-8">
          Key Features
        </h2>
        <div className="feature-grid grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
            >
              <div className="feature-icon mb-4">{feature.icon}</div>
              <h3 className="feature-title text-2xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="feature-description text-gray-600 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
