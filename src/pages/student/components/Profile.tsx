import { motion } from 'framer-motion';
import {
  User,
  Camera,
  Edit,
  Save,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Target,
  Mail,
  Calendar,
} from 'lucide-react';

interface ProfileProps {
  studentData: any;
  editedProfile: any;
  setEditedProfile: (profile: any) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  handleImageUpload: (event: any, type: 'profile' | 'cover') => void;
  handleSaveProfile: () => void;
  getInitials: (name: string | undefined) => string;
}

const Profile = ({ studentData, editedProfile, setEditedProfile, isEditing, setIsEditing, handleImageUpload, handleSaveProfile, getInitials }: ProfileProps) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 relative">
      {studentData.coverImage && (
        <img 
          src={studentData.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <motion.label 
          htmlFor="cover-upload"
          className="cursor-pointer bg-white bg-opacity-90 text-purple-700 px-4 py-2 rounded-lg font-medium flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Edit className="w-4 h-4" />
          <span>Change Cover</span>
          <input 
            id="cover-upload" 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={(e) => handleImageUpload(e, 'cover')}
          />
        </motion.label>
      </div>
    </div>

    <div className="px-8 pb-8">
      <div className="flex flex-col items-center -mt-16">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg">
            {studentData.profileImage ? (
              <img 
                src={studentData.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">
                  {getInitials(studentData.fullName)}
                </span>
              </div>
            )}
          </div>
          <motion.label 
            htmlFor="profile-upload"
            className="absolute bottom-2 right-2 bg-purple-600 text-white p-2 rounded-full cursor-pointer shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Camera className="w-4 h-4" />
            <input 
              id="profile-upload" 
              type="file" 
              className="hidden" 
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'profile')}
            />
          </motion.label>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mt-4">
          {studentData.fullName}
        </h2>
        <p className="text-gray-600">{studentData.course} • {studentData.institute}</p>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            Profile Information
          </h3>
          <motion.button
            className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 ${
              isEditing 
                ? 'bg-green-600 text-white' 
                : 'bg-purple-600 text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (isEditing) {
                handleSaveProfile();
              } else {
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name
            </label>
            <input
              type="text"
              value={editedProfile.fullName || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, fullName: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </label>
            <input
              type="email"
              value={editedProfile.email || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone
            </label>
            <input
              type="tel"
              value={editedProfile.phoneNo || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, phoneNo: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Institute
            </label>
            <input
              type="text"
              value={editedProfile.institute || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, institute: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="w-4 h-4 inline mr-2" />
              Course
            </label>
            <input
              type="text"
              value={editedProfile.course || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, course: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Target className="w-4 h-4 inline mr-2" />
              Branch
            </label>
            <input
              type="text"
              value={editedProfile.branch || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, branch: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Year
            </label>
            <input
              type="text"
              value={editedProfile.year || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, year: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-2" />
              Location
            </label>
            <input
              type="text"
              value={editedProfile.location || ''}
              onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            value={editedProfile.bio || ''}
            onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
            disabled={!isEditing}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32 disabled:bg-gray-50"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills (comma separated)
          </label>
          <input
            type="text"
            value={editedProfile.skills?.join(', ') || ''}
            onChange={(e) => setEditedProfile({ ...editedProfile, skills: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
            disabled={!isEditing}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-50"
            placeholder="React, Node.js, Python, etc."
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default Profile;
