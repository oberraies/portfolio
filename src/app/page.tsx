
// This page should ideally not be rendered directly.
// The middleware should redirect to /[locale]
// If it is rendered, it's a fallback or misconfiguration.

export default function RootPage() {
  return (
    <div>
      <h1>Loading...</h1>
      <p>If you see this, there might be a routing issue. You should be redirected to a localized page.</p>
    </div>
  );
}
