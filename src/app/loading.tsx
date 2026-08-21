import Loading from "@/components/Loading";

// Next.js shows this automatically for the duration of an actual route
// transition and unmounts it the moment the new route is ready — no
// artificial timer needed.
export default function GlobalLoading() {
  return <Loading />;
}
