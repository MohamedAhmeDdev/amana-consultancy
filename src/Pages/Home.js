import React from 'react';

function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center cursor-pointer">
                <span className="text-2xl font-serif text-navy-700">Consulto</span>
              </div>
              <div className="flex space-x-8">
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">Home</button>
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">About</button>
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">Services</button>
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">FAQ</button>
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">Contact</button>
              </div>
            </div>
          </div>
        </nav>


        <main className="flex-grow">
          <div className="relative bg-navy-50 py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23435776' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-2xl">
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-sm font-semibold"> Trusted by Industry Leaders</span>
                  </div>
                  <h1 className="text-5xl font-serif font-medium mb-6 leading-tight">
                     Strategic Solutions for <br/>
                     <span className="text-navy-700 font-serif">Business Growth</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    We help businesses navigate challenges and seize opportunities through expert consulting services and data-driven insights.
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-btn-primary text-white px-4 py-2 font-medium rounded">Get Started</button>
                    <button className="bg-white border-btn-primary border-2 text-navy-700 px-4 py-2 font-bold rounded-md flex items-center">
                      Our Services
                      <svg
                        xmlns="http://www.w3.org/2000/svg" width="24"  height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-arrow-right ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="mt-12 grid grid-cols-2 gap-8 max-w-lg">
                    <div>
                      <div class="flex items-center space-x-2 text-navy-700 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span class="font-medium">500+</span>
                      </div>
                      <p class="text-gray-600">Projects Completed</p>
                    </div>
                    <div>
                      <div class="flex items-center space-x-2 text-navy-700 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span class="font-medium">98%</span>
                      </div>
                      <p class="text-gray-600">Client Satisfaction</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="py-24">
            <div class="container mx-auto px-4">
              <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl font-serif font-medium mb-4">Comprehensive Consulting Services</h2>
                <p class="text-gray-600">We offer end-to-end solutions tailored to your business needs, helping you achieve sustainable growth and success.</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="bg-white p-6 border-b md:border-r border-btn-primary">
                  <div class="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb h-6 w-6 text-navy-700">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-medium text-gray-900 mb-2">Business Strategy</h3>
                  <p class="text-gray-600 mb-4 text-sm">Transform your business with data-driven strategic insights and actionable recommendations.</p>
                </div>

                <div class="bg-white p-6 border-b lg:border-r border-btn-primary">
                  <div class="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop h-6 w-6 text-navy-700">
                      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-medium text-gray-900 mb-2">Digital Transformation</h3>
                  <p class="text-gray-600 mb-4 text-sm">Navigate the digital landscape with our expertise in technology adoption and process optimization.</p>
                </div>

                <div class="bg-white p-6 border-b md:border-r lg:border-r-0 border-btn-primary">
                  <div class="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line h-6 w-6 text-navy-700">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-medium text-gray-900 mb-2">Market Research</h3>
                  <p class="text-gray-600 mb-4 text-sm">Gain competitive advantage with comprehensive market research and analysis.</p>
                </div>

                <div class="bg-white p-6 border-b  lg:border-r lg:border-b-0 border-btn-primary">
                  <div class="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign h-6 w-6 text-navy-700"><line x1="12" x2="12" y1="2" y2="22"></line>
                     <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-medium text-gray-900 mb-2">Financial Advisory</h3>
                  <p class="text-gray-600 mb-4 text-sm">Expert financial guidance to optimize your business performance and growth.</p>
                </div>

                <div class="bg-white p-6 border-b md:border-r md:border-b-0  lg:border-b-0 border-btn-primary">
                  <div class="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-6 w-6 text-navy-700">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-medium text-gray-900 mb-2">Operations Consulting</h3>
                  <p class="text-gray-600 mb-4 text-sm">Streamline your operations and improve efficiency across your organization.</p>
                </div>

                <div class="bg-white p-6 border-btn-primary">
                  <div class="h-12 w-12 bg-navy-50 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-navy-700">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-medium text-gray-900 mb-2">HR & Talent Strategy</h3>
                  <p class="text-gray-600 mb-4 text-sm">Build and maintain high-performing teams with our HR consulting services.</p>
                </div>
              </div>
              <div class="text-center mt-12">
                <button class="bg-white border-btn-primary border text-navy-700 px-4 py-2 font-medium rounded-md inline-flex items-center">
                  View All Services <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex bg-white" style={{ height: "600px" }}>
              <div className=" lg:text-left px-8 md:px-12 lg:w-1/2">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl"> Build Your New <span className="text-navy-700">Idea</span></h2>
                   <p className="mt-2 text-sm text-gray-500 md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!
                   </p>
                </div>
              </div>

              <div className="hidden lg:block lg:w-1/2" style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}>
                <div className="h-full object-cover" style={{
                    backgroundImage:"url(https://jywasettlers.com/wp-content/uploads/2023/08/banner3-.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="h-full bg-black opacity-25"></div>
                </div>
              </div>
            </div>
          </div>




          
          <div className='bg-navy-50 py-20'>
            <div class="container mx-auto px-4">
              <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl font-serif font-medium mb-4">What Our Clients Say</h2>
                <p class="text-gray-600">Don't just take our word for it. Here's what industry leaders have to say about working with us.</p>
              </div>

             <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <p class="text-gray-600 italic mb-6">"The strategic insights provided by the team were invaluable to our growth. Highly recommended!"</p>
                   <div class="flex items-center">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&amp;h=400&amp;auto=format&amp;fit=crop&amp;q=60" alt="Sarah Johnson" class="h-12 w-12 rounded-full object-cover mr-4"/>
                     <div>
                      <p class="font-medium text-gray-900">Sarah Johnson</p>
                      <p class="text-sm text-gray-500">CEO at TechStart Inc</p>
                    </div>
                   </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm">
                  <p class="text-gray-600 italic mb-6">"Their digital transformation expertise helped us modernize our operations and increase efficiency by 40%."</p>
                  <div class="flex items-center">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&amp;h=400&amp;auto=format&amp;fit=crop&amp;q=60" alt="Michael Chen" class="h-12 w-12 rounded-full object-cover mr-4"/>
                    <div>
                      <p class="font-medium text-gray-900">Michael Chen</p>
                      <p class="text-sm text-gray-500">COO at Global Solutions</p>
                    </div>
                  </div>
               </div>
             </div>
            </div>
          </div>

          <div class="py-16">
             <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-serif font-medium mb-4">Ready to Transform Your Business?</h2>
                    <p class="text-gray-600 mb-8">Schedule a consultation to discuss how we can help you achieve your business goals.</p>
                    <button class="btn btn-primary inline-flex items-center">
                       Get Started 
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                </div>
              </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
