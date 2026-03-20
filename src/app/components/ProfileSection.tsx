import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProfileSection() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 px-4">
      <div className="relative">
        <ImageWithFallback
          src="/jyjprfimg.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl">전연재</h1>
        <p className="text-xl text-gray-600 max-w-md">
          인간으로서 해볼 수 있는 모든 경험을 해보고 싶습니다.
        </p>
      </div>
    </div>
  );
}
