import { Input, Button } from '@mantine/core';
import { useState } from 'react';
import TextInput from '../ui/TextInput';
import Link from 'next/link';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <TextInput
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        required
      />
      <TextInput
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        type="password"
        required
      />
      <Button type="submit">Continue</Button>
      <div style={{ textAlign: 'center', marginTop: '4px' }}>
        Already a member? <Link href="/login">Login</Link>
      </div>
    </form>
  );
}