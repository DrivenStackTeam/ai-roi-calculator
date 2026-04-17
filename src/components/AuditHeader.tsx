const AuditHeader = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <span className="text-sm md:text-base font-medium tracking-wide text-foreground opacity-80">
          The Brandboosters Intelligence Group
        </span>
        <span className="text-xs md:text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Efficiency Audit v2.0
        </span>
      </div>

      {/* Hero */}
      <div className="text-center py-12 md:py-20 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
          Audit Your{' '}
          <span className="gold-gradient-text">Efficiency Gap</span>
          <span className="gold-gradient-text">™</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Identify the invisible leaks in your revenue, reputation, and enterprise value.
        </p>
      </div>
    </header>
  );
};

export default AuditHeader;
