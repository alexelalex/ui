import React, { useState, Suspense, useEffect, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ui } from "@/components/ui";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

const sections = import.meta.glob("./*.tsx");

const SECTION_KEYS = Object.keys(sections)
  .map((key) => key.replace("./", "").replace(".tsx", ""))
  .filter((key) => key !== "index");

function PlaygroundCode({ theme, section }: { theme: Theme; section: string }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    import(`./${section}.tsx?raw`).then((m) => {
      setCode(m.default);
    });
  }, [section]);

  return (
    <Highlight
      theme={theme === "dark" ? themes.vsDark : themes.vsLight}
      code={code}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cn(className, "p-4")} style={style}>
          {tokens.map((line, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

function PlaygroundSection({ section }: { section: string }) {
  const Component = useMemo(
    () =>
      React.lazy(() => {
        return import(/* @vite-ignore */ `./${section}.tsx`);
      }),
    [section]
  );

  return (
    <TabsContent value={section} className="p-4 overflow-auto flex-grow">
      <Suspense fallback={null}>
        <Component />
      </Suspense>
    </TabsContent>
  );
}

type Theme = "dark" | "light";

export default function Playground() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [selectedTab, setSelectedTab] = useState(SECTION_KEYS[0]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ui.row full>
      <ui.column grow>
        <ui.head>
          <ui.icon name="Logo" />
          <ui.text variant="h1">Stream Playground</ui.text>
          <ui.grow />
          <Switch
            checked={theme === "light"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </ui.head>

        <Tabs
          value={selectedTab}
          onValueChange={(newValue: string) => setSelectedTab(newValue)}
          className="flex flex-col flex-grow overflow-auto"
        >
          <TabsList className="w-full justify-start px-4 bg-card">
            {SECTION_KEYS.map((key) => (
              <TabsTrigger key={key} value={key}>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>

          {SECTION_KEYS.map((key) => (
            <PlaygroundSection key={key} section={key} />
          ))}
        </Tabs>
      </ui.column>
      <div className="flex-grow overflow-auto bg-card max-w-[800px] border-l">
        <PlaygroundCode theme={theme} section={selectedTab} />
      </div>
    </ui.row>
  );
}
