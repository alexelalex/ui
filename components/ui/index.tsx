/* eslint-disable react/jsx-props-no-spreading */
import { cn } from "@/lib/utils";
import React, { type HTMLInputTypeAttribute, type SVGAttributes } from "react";
import type { IconName } from "@/__generated__/auto-generated-icon-name";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Input } from "./input";
import { Label } from "./label";
import { Checkbox } from "./checkbox";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Textarea } from "./textarea";
import { Badge } from "./badge";

interface UIProps {
  col: boolean;
  row: boolean;
  center: boolean;
  full: boolean;
  scroll: boolean;
  grow: boolean;
  p: boolean;
  px: boolean;
  py: boolean;
  gap: boolean;
  card: boolean;
  bg: boolean;
  border: "bottom" | "right" | boolean;
  round: boolean;
  children: React.ReactNode;
  style: React.CSSProperties;
  className: string;
}

const cache: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<SVGAttributes<SVGElement>>>
> = {};

function getIcon(name: IconName) {
  if (cache[name]) {
    return cache[name];
  }
  cache[name] = React.lazy(() =>
    import(`@/assets/icons/${name}.svg`).catch(() => {
      return getIcon("Placeholder");
    })
  );
  return cache[name];
}

export const ui = {
  div(props: Partial<UIProps>) {
    return (
      <div
        style={props.style}
        className={cn([
          props.col && "flex flex-col",
          props.row && "flex flex-row",
          props.full && "w-full h-full",
          props.scroll && "overflow-auto",
          props.grow && "flex-grow basis-0",
          props.p && "p-4",
          props.px && "px-4",
          props.py && "py-4",
          props.gap && "gap-4",
          props.center && "items-center",
          props.border === "bottom" && "border-b border-border",
          props.border === "right" && "border-r border-border",
          props.card && "bg-card",
          props.bg && "bg-background",
          props.round && "rounded",
          typeof props.border === "boolean" && props.border && "border",
          props.className,
        ])}
      >
        {props.children}
      </div>
    );
  },
  column(props: Partial<UIProps>) {
    return <ui.div col {...props} />;
  },
  row(props: Partial<UIProps>) {
    return <ui.div row {...props} />;
  },
  grow(props: Partial<UIProps>) {
    return <ui.div grow {...props} />;
  },
  head(props: { children: React.ReactNode }) {
    return (
      <ui.div
        row
        gap
        px
        py
        center
        card
        border="bottom"
        style={{ minHeight: 61 }}
      >
        {props.children}
      </ui.div>
    );
  },
  text(props: {
    variant?: "h1" | "h2" | "subtitle1" | "subtitle2" | "body";
    children: React.ReactNode;
  }) {
    const { variant = "body", children } = props;
    return (
      <div
        className={cn([
          variant === "h1" && "text-xl",
          variant === "h2" && "text-lg",
          variant === "subtitle1" && "text-base font-semibold",
          variant === "subtitle2" && "text-base",
          variant === "body" && "text-sm",
        ])}
      >
        {children}
      </div>
    );
  },
  icon({ name, ...props }: { name: IconName }) {
    const LazyIcon = getIcon(name);
    return (
      <React.Suspense fallback={null}>
        <LazyIcon width={16} height={16} {...props} />
      </React.Suspense>
    );
  },
  button(props: {
    variant?:
      | "default"
      | "primary"
      | "secondary"
      | "destructive"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
    icon?: IconName;
    iconAfter?: boolean;
    label?: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
  }) {
    const { icon, iconAfter, size, variant, onClick, className } = props;
    const label = props.label || props.children;
    return (
      <Button
        variant={variant}
        size={size || (icon ? "icon" : "default")}
        onClick={onClick}
        className={className}
      >
        {icon && !iconAfter && <ui.icon name={icon} />}
        {label}
        {icon && iconAfter && <ui.icon name={icon} />}
      </Button>
    );
  },
  card(props: { title?: string; children: React.ReactNode }) {
    return (
      <Card>
        {props.title && (
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
        )}
        <CardContent>{props.children}</CardContent>
      </Card>
    );
  },
  alert(props: {
    title: string;
    description?: string;
    variant?: "info" | "error" | "success" | "warning" | "secondary";
    children?: React.ReactNode;
  }) {
    const { title, variant = "info" } = props;
    const description = props.description || props.children;
    const { icon, className } = {
      info: {
        icon: "Info",
        className:
          "[&_svg]:text-blue-500 [&_div]:text-blue-500 border-blue-500 bg-blue-50 dark:bg-blue-900/10 dark:[&_svg]:text-blue-400 dark:[&_div]:text-blue-400",
      },
      error: {
        icon: "Error",
        className:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
      success: {
        icon: "Check",
        className:
          "[&_svg]:text-green-500 [&_div]:text-green-500 border-green-500 bg-green-50 dark:bg-green-900/10 dark:[&_svg]:text-green-400 dark:[&_div]:text-green-400",
      },
      warning: {
        icon: "Warning",
        className:
          "[&_svg]:text-orange-500 [&_div]:text-orange-500 border-orange-500 bg-orange-50 dark:bg-orange-900/10 dark:[&_svg]:text-orange-400 dark:[&_div]:text-orange-400",
      },
      secondary: {
        icon: "Pin",
        className: "bg-secondary",
      },
    }[variant];

    return (
      <Alert className={className}>
        <ui.icon name={icon as IconName} />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="flex items-center gap-x-2">
          {description}
        </AlertDescription>
      </Alert>
    );
  },
  input<T>(props: {
    id: string;
    label: string;
    value?: T;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    onChange?: (value: T) => void;
  }) {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={props.id}>{props.label}</Label>
        <Input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    );
  },
  checkbox<T>(props: {
    id: string;
    label: string;
    value?: T;
    onChange?: (value: T) => void;
    options?: { value: T; label?: string }[];
  }) {
    return (
      <div className="space-y-3">
        <Label>{props.label}</Label>
        <div className="space-y-2">
          {props.options?.map((opt) => (
            <div
              key={opt.value as string}
              className="flex items-center space-x-2"
            >
              <Checkbox id={opt.value as string} />
              <Label htmlFor={opt.value as string}>
                {opt.label || (opt.value as string)}
              </Label>
            </div>
          ))}
        </div>
      </div>
    );
  },
  radio<T>(props: {
    id: string;
    label: string;
    value?: T;
    onChange?: (value: T) => void;
    options?: { value: T; label?: string }[];
  }) {
    return (
      <div className="space-y-3">
        <Label>{props.label}</Label>
        <RadioGroup defaultValue="standard">
          {props.options?.map((opt) => (
            <div
              key={opt.value as string}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem
                value={opt.value as string}
                id={opt.value as string}
              />
              <Label htmlFor={opt.value as string}>
                {opt.label || (opt.value as string)}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    );
  },
  select<T>(props: {
    id: string;
    label: string;
    value?: T;
    placeholder?: string;
    onChange?: (value: T) => void;
    options?: { value: T; label?: string }[];
  }) {
    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>{props.label}</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={props.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {props.options?.map((opt) => (
              <SelectItem key={opt.value as string} value={opt.value as string}>
                {opt.label || (opt.value as string)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  },
  textarea(props: {
    id: string;
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
  }) {
    return (
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor={props.id}>{props.label}</Label>
        <Textarea id={props.id} placeholder={props.placeholder} />
      </div>
    );
  },
  badge(props: {
    label?: string;
    variant?: "default" | "secondary" | "outline";
    children?: React.ReactNode;
  }) {
    const { variant = "default", label, children } = props;
    return <Badge variant={variant}>{label || children}</Badge>;
  },
};

export default ui;
