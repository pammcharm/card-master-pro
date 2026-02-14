import { cn } from '@/lib/utils';
import logoImg from '@/assets/logo.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  const subtitleSizeClasses = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={logoImg}
        alt="Smart ID Global"
        className={cn("object-contain rounded-lg", sizeClasses[size])}
      />
      {showText && (
        <div className="animate-fade-in">
          <h1 className={cn(
            "font-bold text-foreground tracking-tight font-display",
            textSizeClasses[size]
          )}>
            Smart ID
          </h1>
          <p className={cn(
            "text-muted-foreground -mt-0.5 tracking-wide",
            subtitleSizeClasses[size]
          )}>
            Global
          </p>
        </div>
      )}
    </div>
  );
}
