export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-content">
      <div className="main-background" />
      <div className="main-overlay">{children}</div>
    </main>
  );
}
