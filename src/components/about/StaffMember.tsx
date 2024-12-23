import React from 'react';

interface StaffMemberProps {
  image: string;
  name: string;
  role: string;
}

export default function StaffMember({ image, name, role }: StaffMemberProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-white font-semibold">{name}</h4>
        <p className="text-gray-400">{role}</p>
      </div>
    </div>
  );
}