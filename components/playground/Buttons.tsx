import ui from '@/components/ui'

export default function Buttons() {
  return (
    <ui.card title="Button Examples">
      <ui.column gap>
        <ui.row gap>
          <ui.button variant="default" label="Default" />
          <ui.button variant="primary" label="Primary" />
          <ui.button variant="secondary" label="Secondary" />
          <ui.button variant="destructive" label="Destructive" />
          <ui.button variant="ghost" label="Ghost" />
          <ui.button variant="link" label="Link" />
        </ui.row>

        <ui.row gap>
          <ui.button size="sm" icon="Filter" label="Small" />
          <ui.button size="lg" icon="ArrowRight" label="Large" iconAfter />
          <ui.button icon="ActionsMenu" />
        </ui.row>
      </ui.column>
    </ui.card>
  )
}
