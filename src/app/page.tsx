export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 text-center px-6">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          TruthLaw
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-md">
          법률 정보를 쉽고 정확하게 확인하세요.
        </p>
        <a
          href="#"
          className="mt-4 rounded-full bg-zinc-900 px-8 py-3 text-white font-medium hover:bg-zinc-700 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          시작하기
        </a>
      </main>
    </div>
  );
}
