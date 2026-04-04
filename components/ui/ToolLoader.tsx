import { RefreshCw } from 'lucide-react';

export function ToolLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-white dark:bg-gray-950 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <RefreshCw className="animate-spin text-indigo-500 mb-4" size={40} />
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Initializing Tool...</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Loading core logic into your browser</p>
    </div>
  );
}
