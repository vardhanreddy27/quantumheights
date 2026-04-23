export default function ErrorPage({ statusCode }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f2] px-6">
      <div className="max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
          {statusCode ? `Error ${statusCode}` : "Unexpected Error"}
        </h1>
        <p className="mt-4 text-slate-600">
          Please refresh this page or try again in a moment.
        </p>
      </div>
    </main>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
