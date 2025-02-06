import React from 'react'
import MotionSection from '../component/Motion';

function Service() {
  return (
    <main className="flex-grow">

      <div class="bg-navy-50 py-16">
         <MotionSection threshold={0.5} transitionDelay={0.5}>
          <div class="container mx-auto px-4">
            <div class="max-w-2xl">
              <h1 class="text-4xl font-serif font-medium mb-4">Our Services</h1>
              <p class="text-gray-600 text-lg">We offer comprehensive consulting solutions tailored to your business needs. Our expertise spans across multiple domains to help you achieve sustainable growth.</p>
            </div>
            </div>
          </MotionSection>
      </div>


     <div className="py-16">
     <MotionSection threshold={0.3} transitionDelay={0.1}>
       <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MotionSection threshold={0.6} transitionDelay={0.1}>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb h-6 w-6 text-navy-700">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Business Strategy</h3>
            <p className="text-gray-600 mb-4">Transform your business with data-driven strategic insights and actionable recommendations.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Market analysis and competitive positioning</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Growth strategy development</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Business model optimization</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Performance metrics and KPI tracking</span>
              </li>
            </ul>
          </div>
          </MotionSection>
          
          <MotionSection threshold={0.6} transitionDelay={0.1}>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop h-6 w-6 text-navy-700">
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Digital Transformation</h3>
            <p className="text-gray-600 mb-4">Navigate the digital landscape with our expertise in technology adoption and process optimization.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Technology stack assessment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Digital workflow optimization</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Cloud migration strategy</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Digital tools implementation</span>
              </li>
            </ul>
          </div>
          </MotionSection>

          <MotionSection threshold={0.6} transitionDelay={0.1}>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line h-6 w-6 text-navy-700">
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Market Research</h3>
            <p className="text-gray-600 mb-4">Gain competitive advantage with comprehensive market research and analysis.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Market opportunity assessment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Consumer behavior analysis</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Brand perception research</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Competitive benchmarking</span>
              </li>
            </ul>
          </div>
          </MotionSection>

          <MotionSection threshold={0.6} transitionDelay={0.1}>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign h-6 w-6 text-navy-700"><line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6">
              </path></svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Financial Advisory</h3>
            <p className="text-gray-600 mb-4">Expert financial guidance to optimize your business performance and growth.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Financial planning and analysis</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Investment strategy</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Risk assessment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Cost optimization</span>
              </li>
            </ul>
          </div>
          </MotionSection>

          <MotionSection threshold={0.6} transitionDelay={0.1}>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-6 w-6 text-navy-700">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Operations Consulting</h3>
            <p className="text-gray-600 mb-4">Streamline your operations and improve efficiency across your organization.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Process optimization</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Supply chain management</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Quality control systems</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Operational efficiency</span>
              </li>
            </ul>
          </div>
          </MotionSection>

          <MotionSection threshold={0.6} transitionDelay={0.1}>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-navy-700">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">HR & Talent Strategy</h3>
            <p className="text-gray-600 mb-4">Build and maintain high-performing teams with our HR consulting services.</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Talent acquisition strategy</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Performance management</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Team development</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-navy-50 flex items-center justify-center mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-navy-700"></span>
                </span>
                <span className="text-sm text-gray-600">Culture transformation</span>
              </li>
            </ul>
          </div>
          </MotionSection>

        </div>
       </div>
      </MotionSection>
     </div>

     <div class="py-16 bg-navy-50">
        <MotionSection threshold={0.6} transitionDelay={0.1}>
          <div class="container mx-auto px-4">
              <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-serif font-medium mb-4">Ready to Transform Your Business?</h2>
                 <p class="text-gray-600 mb-8">Schedule a consultation to discuss how we can help you achieve your business goals.</p>
              </div>
            </div>
         </MotionSection>
      </div>

    </main>
  )
}

export default Service