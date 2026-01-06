interface LoadingProps {
  progress: number;
}

const Loading =({ progress }: LoadingProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex-center flex-col gap-4">
        <span className="text-body uppercase tracking-widest">
          Loading {Math.floor(progress)}%
        </span>

        <div className="w-40 h-1 bg-grey rounded-lg overflow-hidden">
          <div
            className="h-full bg-body transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;