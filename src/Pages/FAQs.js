import React from 'react'

function FAQs() {
  return (
    <main className="flex-grow container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif font-medium mb-6">Frequently Asked Questions</h1>
      <div className="space-y-8">
         <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-3 font-serif">What types of businesses do you work with?</h3>
          <p className="text-gray-600">
            We work with businesses of all sizes, from startups to established enterprises, across various industries. Our expertise spans technology, finance, healthcare, retail, and manufacturing sectors.
          </p>
        </div>
         <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-3 font-serif">How long does a typical consulting project take?</h3>
          <p className="text-gray-600">
            Project duration varies based on scope and complexity. Initial consultations typically take 2-4 weeks, while comprehensive transformation projects may span 3-6 months. We provide a detailed timeline during our initial discussion.
          </p>
        </div>
         <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-3 font-serif">What is your consulting process?</h3>
          <p className="text-gray-600">
            Our process begins with a thorough assessment of your business needs, followed by strategy development, implementation planning, and execution support. We maintain open communication throughout and provide regular progress updates.
          </p>
        </div>
         <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-3 font-serif">How do you charge for your services?</h3>
          <p className="text-gray-600">
            We offer flexible pricing models including project-based fees, retainer arrangements, and hourly consulting rates. The specific structure depends on your needs and project scope. We provide detailed pricing during our initial consultation.
          </p>
        </div>
        <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-3 font-serif">Do you offer virtual consulting services?</h3>
          <p className="text-gray-600">
            Yes, we offer both in-person and virtual consulting services. Our digital tools and processes ensure effective remote collaboration while maintaining the same level of quality and engagement.
          </p>
        </div>
         <div className="bg-white px-6 py-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium text-gray-900 mb-3 font-serif">How do you measure success?</h3>
          <p className="text-gray-600">
            We establish clear, measurable KPIs at the project outset and track progress throughout. Success metrics typically include ROI, efficiency improvements, cost savings, revenue growth, and other relevant business outcomes.
          </p>
        </div>
      </div>
    </div>
  </main>  )
}

export default FAQs