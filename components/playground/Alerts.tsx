import ui from '@/components/ui'

export default function Alerts() {
  return (
    <ui.card title="Alert Examples">
      <ui.column gap>
        <ui.alert
          variant="info"
          title="Information"
          description="This is an example alert message."
        />

        <ui.alert
          variant="error"
          title="Error"
          description="Your session has expired. Please log in again."
        />

        <ui.alert
          variant="success"
          title="Success"
          description="Your changes have been successfully saved."
        />

        <ui.alert variant="warning" title="Warning">
          Your storage is almost full
          <ui.button
            size="sm"
            className="ml-auto border-orange-500 text-orange-500 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-900/20"
          >
            Upgrade Plan
          </ui.button>
        </ui.alert>

        <ui.alert variant="secondary" title="Command">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            npm install @/components/ui
          </code>
        </ui.alert>
      </ui.column>
    </ui.card>
  )
}
