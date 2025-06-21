'use client';

import { useEffect, useState } from 'react';
import { getAllUsers } from '@/lib/prismaHelpers';

export default function UserList() {
  const [users, setUsers] = useState<
    { id: number; name: string | null; username: string | null }[]
  >([]);

  const fetchUsers = async () => {
    const user = await getAllUsers();
    setUsers(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
      {users.map((user) => (
        <li key={user.id} className="mb-2 text-black">
          {user.name}
          {user.id === 2 && user.username && (
            <span className="ml-2 text-blue-600">({user.username})</span>
          )}
        </li>
      ))}
    </ol>
  );
}
