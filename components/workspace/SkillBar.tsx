type SkillBarProps = {
  name: string;
  level: number;
};

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-primary">{name}</span>

        <span className="text-xs text-text-secondary">{level}%</span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-muted">
        <div
          className="h-full rounded-full bg-cyan transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}