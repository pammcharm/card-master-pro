import { cn } from '@/lib/utils';

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
      {/* Card-based logo */}
      <div className={cn(
        "relative rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center glow-primary",
        sizeClasses[size]
      )}>
        {/* ID Card icon representation */}
        <div className="absolute inset-1 rounded-lg bg-background/20 backdrop-blur-sm">
          {/* Photo placeholder */}
          <div className="absolute top-1 left-1 w-[35%] h-[45%] rounded-sm bg-foreground/30" />
          {/* Text lines */}
          <div className="absolute top-1 right-1 left-[45%] space-y-0.5">
            <div className="h-[3px] bg-foreground/40 rounded-full" />
            <div className="h-[2px] bg-foreground/25 rounded-full w-[70%]" />
          </div>
          {/* Bottom barcode */}
          <div className="absolute bottom-1 left-1 right-1 h-[20%] flex gap-[1px]">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-foreground/30 rounded-[1px]"
                style={{ height: `${60 + Math.random() * 40}%` }}
              />
            ))}
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl -z-10" />
      </div>
      
      {showText && (
        <div className="animate-fade-in">
          <h1 className={cn(
            "font-bold text-foreground tracking-tight font-display",
            textSizeClasses[size]
          )}>
            SAGS
          </h1>
          <p className={cn(
            "text-muted-foreground -mt-0.5 tracking-wide",
            subtitleSizeClasses[size]
          )}>
            Smart Card System
          </p>
        </div>
      )}
    </div>
  );
}
