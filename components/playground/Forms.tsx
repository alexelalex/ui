import ui from '@/components/ui'

export default function Forms() {
  return (
    <ui.card title="Form Elements">
      <ui.column gap>
        <ui.input
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />

        <ui.radio
          id="subscription_type"
          label="Subscription Type"
          options={[
            { value: 'standard', label: 'Standard' },
            { value: 'premium', label: 'Premium' },
          ]}
        />

        <ui.checkbox
          id="preferences"
          label="Preferences"
          options={[
            { value: 'newsletters', label: 'Receive newsletters' },
            { value: 'updates', label: 'Product updates' },
          ]}
        />

        <ui.select
          id="country"
          label="Country"
          placeholder="Select a country"
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
          ]}
        />

        <ui.textarea
          id="message"
          label="Message"
          placeholder="Type your message here"
        />
      </ui.column>
    </ui.card>
  )
}
