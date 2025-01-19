/* eslint-disable no-nested-ternary */
import { Button } from '@/components/ui/button'
import { ui } from '@/components/ui'
import { Check, CircleDot } from 'lucide-react'
import { useState } from 'react'

export default function Steppers() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4
  const steps = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Complete your profile' },
    { title: 'Business', description: 'Business information' },
    { title: 'Review', description: 'Review and submit' },
  ]

  return (
    <ui.card title="Stepper Examples">
      <div className="grid grid-cols-2 gap-8">
        {/* Vertical Stepper */}
        <div className="space-y-4">
          <h4 className="font-medium">Vertical Stepper</h4>
          <div className="space-y-6 pl-4">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 relative">
                <div className="flex flex-col items-center absolute -left-4">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                        transition-colors duration-200 relative z-10 bg-background
                        ${
                          index + 1 < currentStep
                            ? 'border-primary bg-primary text-primary-foreground'
                            : index + 1 === currentStep
                              ? 'border-primary text-primary'
                              : 'border-muted text-muted-foreground'
                        }`}
                  >
                    {index + 1 < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : index + 1 === currentStep ? (
                      <CircleDot className="h-4 w-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="relative w-[2px] h-14 z-0">
                      <div className="absolute w-full h-full bg-muted" />
                      <div
                        className="absolute w-full bg-primary transition-all duration-500 ease-in-out"
                        style={{
                          height: index + 1 < currentStep ? '100%' : '0%',
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="pt-1 ml-6">
                  <div
                    className={`font-medium transition-colors duration-200 ${
                      index + 1 <= currentStep
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Stepper */}
        <div className="space-y-6">
          <h4 className="font-medium">Horizontal Stepper</h4>
          <div className="relative">
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center relative"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                        transition-colors duration-200 relative z-10 bg-background
                        ${
                          index + 1 < currentStep
                            ? 'border-primary bg-primary text-primary-foreground'
                            : index + 1 === currentStep
                              ? 'border-primary text-primary'
                              : 'border-muted text-muted-foreground'
                        }`}
                  >
                    {index + 1 < currentStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <div className="mt-3 text-center max-w-[120px]">
                    <div
                      className={`text-sm font-medium transition-colors duration-200 ${
                        index + 1 <= currentStep
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="absolute top-5 h-[2px] bg-muted z-0"
              style={{ left: '5%', right: '5%' }}
            >
              <div
                className="absolute h-full bg-primary transition-all duration-500 ease-in-out"
                style={{
                  width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8 gap-4">
        <Button
          onClick={() => setCurrentStep(s => Math.max(1, s - 1))}
          disabled={currentStep === 1}
        >
          Previous Step
        </Button>
        <Button
          onClick={() => setCurrentStep(s => Math.min(totalSteps, s + 1))}
          disabled={currentStep === totalSteps}
        >
          Next Step
        </Button>
      </div>
    </ui.card>
  )
}
