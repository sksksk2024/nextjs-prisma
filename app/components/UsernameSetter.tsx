'use client';

import { useState } from 'react';
import { updateUsername } from '@/lib/prismaHelpers';
import { useUserStore } from '../stores/userStore';

export default function UsernameSetter() {
  const { userId, username, setUsername } = useUserStore();
  const [input, setInput] = useState(username);

  const handleSave = async () => {
    if (!userId) return alert('No user ID set.');

    try {
      await updateUsername(userId, input);
      setUsername(input);
      alert('Username saved to DB and localStorage!');
    } catch (error) {
      console.error('Failed to save username', error);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-4 py-2 rounded"
      />
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Username
      </button>
    </div>
  );
}
