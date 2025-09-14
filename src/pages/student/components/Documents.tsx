import { motion } from 'framer-motion';
import {
  FileText,
  Download,
} from 'lucide-react';

interface Document {
  id: string;
  documentType: string;
  fileName: string;
  fileUrl: string;
  isEnabled: boolean;
  createdAt: string;
}

interface DocumentsProps {
  documents: Document[];
  handleDownloadDocument: (document: Document) => void;
}

const Documents = ({ documents, handleDownloadDocument }: DocumentsProps) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-xl font-bold text-gray-900 mb-6">
      Documents & Downloads
    </h3>
    <div className="space-y-4">
      {documents.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No documents available yet</p>
          <p className="text-gray-400">Documents will appear here once uploaded by admin</p>
        </div>
      ) : (
        documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4 rounded-xl border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <FileText className="w-6 h-6 text-purple-600" />
              <div>
                <h4 className="font-semibold text-gray-900">{doc.fileName}</h4>
                <p className="text-sm text-gray-500 capitalize">{doc.documentType.replace('_', ' ')}</p>
                <p className="text-xs text-gray-400">
                  Uploaded: {new Date(doc.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <motion.button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleDownloadDocument(doc)}
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </motion.button>
          </div>
        ))
      )}
    </div>
  </motion.div>
);

export default Documents;
