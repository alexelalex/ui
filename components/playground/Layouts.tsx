import ui from "@/components/ui";

export default function Layouts() {
  return (
    <ui.card title="Layouts">
      <ui.column bg round border style={{ height: 300 }}>
        <ui.head>
          <ui.icon name="Logo" />
          <ui.text variant="h1">H1</ui.text>
          <ui.grow />
          <ui.button label="Learn more" />
        </ui.head>
        <ui.row grow scroll>
          <ui.column grow card border="right" style={{ maxWidth: 200 }}>
            <ui.head>
              <ui.text variant="h2">H2</ui.text>
            </ui.head>
          </ui.column>
          <ui.column grow>
            <ui.head>
              <ui.text variant="h2">H2</ui.text>
              <ui.grow />
              <ui.button size="sm" label="Filter" />
            </ui.head>
            <ui.grow scroll p>
              <ui.column gap style={{ maxWidth: 500 }}>
                <ui.row gap>
                  <ui.badge label="Badge 1" />
                  <ui.badge variant="secondary" label="Badge 2" />
                  <ui.badge variant="outline" label="Badge 3" />
                </ui.row>
                {Array.from({ length: 10 }).map((_, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <ui.column key={i}>
                    <ui.text variant="subtitle1">Subtitle1</ui.text>
                    <ui.text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ac purus sit amet nunc fermentum varius. Nullam et
                      semper libero. Aliquam erat volutpat. Donec nec nunc sit
                      amet tellus.
                    </ui.text>
                  </ui.column>
                ))}
              </ui.column>
            </ui.grow>
          </ui.column>
        </ui.row>
      </ui.column>
    </ui.card>
  );
}
