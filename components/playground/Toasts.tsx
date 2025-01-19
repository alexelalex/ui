import ui from '@/components/ui'
import { useToast } from '@/hooks/use-toast'

export default function Toasts() {
  const { toast } = useToast()

  return (
    <ui.card title="Toast Examples">
      <div className="flex flex-wrap gap-4">
        <ui.button
          label="Show Default Toast"
          onClick={() =>
            toast({
              title: 'Default Toast',
              description: 'This is a default toast message',
              duration: 3000,
            })
          }
        />

        <ui.button
          variant="destructive"
          label="Show Error Toast"
          onClick={() =>
            toast({
              variant: 'destructive',
              title: 'Error Toast',
              description: 'Something went wrong!',
              duration: 5000,
            })
          }
        />

        <ui.button
          variant="secondary"
          label="Show Success Toast"
          onClick={() =>
            toast({
              title: 'Success Toast',
              variant: 'success',
              description: 'Operation completed successfully',
              duration: 3000,
            })
          }
        />
      </div>
    </ui.card>
  )
}
