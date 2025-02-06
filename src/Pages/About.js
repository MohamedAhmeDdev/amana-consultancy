import React from 'react'
import MotionSection from '../component/Motion';

function About() {
  return (
    <main className="flex-grow">
  <div className="bg-navy-50 py-16">
  <MotionSection threshold={0.5} transitionDelay={0.5}>
    <div className="container mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-serif font-medium mb-6">About Us</h1>
        <div className="">
          <p className='text-gray-600 text-lg'>We are a leading consultancy firm dedicated to helping businesses thrive in today's dynamic market environment. With years of experience and a team of expert consultants, we provide strategic insights and practical solutions that drive real results.</p>
        </div>
      </div>
    </div>
    </MotionSection>
  </div>
  
  <div className="py-16 bg-white">
  <MotionSection threshold={0.3} transitionDelay={0.1}>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="text-center">
          <div className="text-4xl font-medium text-navy-700 mb-2">15+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
        </MotionSection>

        <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="text-center">
          <div className="text-4xl font-medium text-navy-700 mb-2">500+</div>
          <div className="text-gray-600">Projects Completed</div>
        </div>
        </MotionSection>

        <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="text-center">
          <div className="text-4xl font-medium text-navy-700 mb-2">50+</div>
          <div className="text-gray-600">Expert Consultants</div>
        </div>
        </MotionSection>

        <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="text-center">
          <div className="text-4xl font-medium text-navy-700 mb-2">98%</div>
          <div className="text-gray-600">Client Satisfaction</div>
        </div>
        </MotionSection>

      </div>
    </div>
    </MotionSection>
  </div>
  
  <div className="py-16">
  <MotionSection threshold={0.3} transitionDelay={0.1}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-serif font-medium text-center mb-12">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60" alt="Sarah Johnson" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-xl font-medium mb-1">Sarah Johnson</h3>
          <p className="text-navy-700 mb-3">Founder & CEO</p>
          <p className="text-gray-600">With over 15 years of experience in business strategy and digital transformation, Sarah leads our team in delivering exceptional results for clients.</p>
        </div>
        <div className="text-center">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60" alt="Michael Chen" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-xl font-medium mb-1">Michael Chen</h3>
          <p className="text-navy-700 mb-3">Senior Consultant</p>
          <p className="text-gray-600">Michael specializes in operational efficiency and has helped numerous Fortune 500 companies optimize their business processes.</p>
        </div>
        <div className="text-center">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60" alt="Emily Rodriguez" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-xl font-medium mb-1">Emily Rodriguez</h3>
          <p className="text-navy-700 mb-3">Technology Director</p>
          <p className="text-gray-600">Emily brings deep expertise in digital transformation and emerging technologies, helping clients navigate the evolving tech landscape.</p>
        </div>
      </div>
    </div>
    </MotionSection>
  </div>
  
  <div className="py-16 bg-navy-50">
  <MotionSection threshold={0.3} transitionDelay={0.1}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-serif font-medium text-center mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-6 w-6 text-navy-700">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Excellence</h3>
            <p className="text-gray-600">We strive for excellence in everything we do, delivering exceptional results that exceed expectations.</p>
          </div>
        </div>
        </MotionSection>

        <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-6 w-6 text-navy-700">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Integrity</h3>
            <p className="text-gray-600">We maintain the highest standards of professional integrity and transparency in all our client relationships.</p>
          </div>
        </div>
        </MotionSection>

        <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-6 w-6 text-navy-700">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Innovation</h3>
            <p className="text-gray-600">We embrace innovation and creative thinking to solve complex business challenges.</p>
          </div>
        </div>
        </MotionSection>

        <MotionSection threshold={0.6} transitionDelay={0.1}>
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-6 w-6 text-navy-700">
              <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Collaboration</h3>
            <p className="text-gray-600">We believe in working closely with our clients, fostering strong partnerships for sustainable success.</p>
          </div>
        </div>
        </MotionSection>

      </div>
    </div>
    </MotionSection>
  </div>
</main>

  )
}

export default About