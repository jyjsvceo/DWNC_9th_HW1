import { useState, useEffect } from 'react';

interface Comment {
  id: string;
  name: string;
  content: string;
  timestamp: number;
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedComments = localStorage.getItem('guestbook-comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !content.trim()) {
      alert('이름과 내용을 모두 입력해주세요.');
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      content: content.trim(),
      timestamp: Date.now(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('guestbook-comments', JSON.stringify(updatedComments));

    setName('');
    setContent('');
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 space-y-6">
      <h2 className="text-2xl text-center">방명록</h2>

      <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm text-gray-700">
            이름
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="익명도 가능합니다"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm text-gray-700">
            내용
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="메시지를 남겨주세요"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          작성하기
        </button>
      </form>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            첫 번째 방명록을 남겨주세요!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-6 bg-white rounded-lg shadow-md space-y-2"
            >
              <div className="flex justify-between items-start">
                <span className="text-gray-900">{comment.name}</span>
                <span className="text-sm text-gray-500">
                  {formatDate(comment.timestamp)}
                </span>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
