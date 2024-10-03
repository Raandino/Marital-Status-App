import { Buffer } from 'buffer';

export default function encodeCredentials(username: string, password: string) {
  return Buffer.from(`${username}:${password}`).toString('base64');
}
