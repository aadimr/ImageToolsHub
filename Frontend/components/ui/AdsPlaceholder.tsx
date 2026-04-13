export function AdsPlaceholder({ location }: { location: string }) {
  return (
    <div className="w-full my-6 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl h-32 bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
        <span className="text-sm font-medium uppercase tracking-wider">Advertisement ({location})</span>
        <span className="text-xs mt-1">Google AdSense Space</span>
      </div>
    </div>
  );
}
