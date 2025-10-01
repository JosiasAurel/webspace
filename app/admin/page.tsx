import dynamic from 'next/dynamic';

const AdminPanel = dynamic(() => import('./panel'), { ssr: false });

export default function AdminPage() {
  return <AdminPanel />;
}
