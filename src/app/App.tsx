import { ProfileSection } from './components/ProfileSection';
import { InterestsSection } from './components/InterestsSection';
import { CommentSection } from './components/CommentSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <ProfileSection />
        <InterestsSection />
        <CommentSection />
      </div>
    </div>
  );
}