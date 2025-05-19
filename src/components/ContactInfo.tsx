
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Contact Information
        </h3>
        <p className="text-gray-600 mb-8">
          Fill up the form and I'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
            <Phone size={18} className="text-teal-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900">Phone</h4>
            <p className="text-gray-600">+923322149556</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
            <Mail size={18} className="text-teal-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900">Email</h4>
            <p className="text-gray-600">aamir-muhammad@hotmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
            <MapPin size={18} className="text-teal-600" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900">Location</h4>
            <p className="text-gray-600">Karachi, Sindh, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
