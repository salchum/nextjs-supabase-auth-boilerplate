export default function Loading() {
  return (
    <div
      class="flex h-8 w-8 animate-spin items-center justify-center rounded-full border-[3px] border-current border-t-transparent text-blue-600"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
