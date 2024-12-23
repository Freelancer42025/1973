import React from 'react';
import StaffMember from './StaffMember';
import { staffMembers } from '../../data/staff';

export default function AboutContent() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Meet Our Founders</h2>
            <p className="text-gray-300 leading-relaxed">
              Kamalo City was founded by Pitchou Ntumba and his wife Ursule, who transformed their vision into a vibrant hub of African culture and flavor. Their dedication to authenticity and excellence has made Kamalo City a beloved destination in Cape Town. Together, they continue to lead our team in delivering exceptional experiences that celebrate African cuisine and hospitality.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="/src/owners togeather of kcity.jpg"
              alt="Pitchou Ntumba and Ursule"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Dedicated Team</h3>
            <p className="text-gray-300 mb-8">
              Behind every exceptional dining experience at Kamalo City is our talented and passionate team. From our skilled chefs who craft authentic African dishes to our attentive service staff who ensure your comfort, each member contributes to making your visit memorable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {staffMembers.map((member, index) => (
                <StaffMember
                  key={index}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}