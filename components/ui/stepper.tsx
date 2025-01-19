import * as React from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

export interface StepProps {
  title: string
  description?: string
  isCompleted?: boolean
  isCurrent?: boolean
  isLastStep?: boolean
}

const Step = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StepProps
>(
  (
    {
      title,
      description,
      isCompleted,
      isCurrent,
      isLastStep,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn('flex', className)} {...props}>
        <div className="flex flex-col items-center">
          <div
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full border-2',
              (isCompleted || isCurrent) && 'border-primary',
              isCompleted && 'bg-primary',
              !isCompleted && !isCurrent && 'border-muted',
            )}
          >
            {isCompleted ? (
              <Check className="h-4 w-4 text-primary-foreground" />
            ) : (
              <span
                className={cn(
                  'text-sm font-medium',
                  isCurrent && 'text-primary',
                  !isCurrent && 'text-muted-foreground',
                )}
              >
                {props['aria-label']?.[0]}
              </span>
            )}
          </div>
          {!isLastStep && (
            <div
              className={cn('h-12 w-0.5 bg-muted', isCompleted && 'bg-primary')}
            />
          )}
        </div>
        <div className="ml-4 pb-12">
          <p
            className={cn(
              'text-sm font-medium',
              (isCompleted || isCurrent) && 'text-foreground',
              !isCompleted && !isCurrent && 'text-muted-foreground',
            )}
          >
            {title}
          </p>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
    )
  },
)
Step.displayName = 'Step'

export { Step }
