import React from "react";
import {
  ToolcraftDropdownMenu as DropdownMenu,
  ToolcraftIconButton as IconButton,
  ToolcraftTooltip as Tooltip,
} from "@openreel/ui";
import { Icon } from "@/icons/Icon";
import {
  House,
  Sun,
  Moon,
  SunMoon,
  Settings,
  Circle,
  Play,
  Sparkles,
  HelpCircle,
  FileCode,
  Command,
} from "@/icons/lucide-compat";
import { useProjectStore } from "../../stores/project-store";
import { useUIStore } from "../../stores/ui-store";
import { useThemeStore } from "../../stores/theme-store";
import { useSettingsStore } from "../../stores/settings-store";
import { useRouter } from "../../hooks/use-router";
import { useTranslation } from "../../i18n";
import {
  startTour,
  ONBOARDING_KEY,
  startMoGraphTour,
  MOGRAPH_TOUR_KEY,
} from "./tour";

const RailButton: React.FC<{
  label: string;
  icon: string;
  onClick: () => void;
  active?: boolean;
}> = ({ label, icon, onClick, active = false }) => (
  <Tooltip content={label} placement="end">
    <IconButton
      label={label}
      icon={<Icon name={icon} size={16} ariaHidden />}
      size="sm"
      variant={active ? "secondary" : "ghost"}
      onClick={onClick}
    />
  </Tooltip>
);

export const EditorActionRail: React.FC = () => {
  const { undo, redo } = useProjectStore();
  const {
    openModal,
    toggleKeyframeEditor,
    keyframeEditorOpen,
    panels,
    togglePanel,
    activeModal,
  } = useUIStore();
  const { mode: themeMode, toggleTheme } = useThemeStore();
  const { openSettings } = useSettingsStore();
  const { navigate } = useRouter();
  const { t, currentLanguage, setLanguage } = useTranslation();

  const themeLabel =
    themeMode === "auto"
      ? (currentLanguage === "uz" ? "Tizim" : currentLanguage === "ru" ? "Системная" : "System")
      : themeMode.charAt(0).toUpperCase() + themeMode.slice(1);
  const nextThemeLabel =
    themeMode === "light"
      ? (currentLanguage === "uz" ? "Qorong'i" : currentLanguage === "ru" ? "Темная" : "Dark")
      : themeMode === "dark"
      ? (currentLanguage === "uz" ? "Tizim" : currentLanguage === "ru" ? "Системная" : "System")
      : (currentLanguage === "uz" ? "Yorug'" : currentLanguage === "ru" ? "Светлая" : "Light");
  const themeIcon =
    themeMode === "light" ? (
      <Sun size={16} aria-hidden />
    ) : themeMode === "dark" ? (
      <Moon size={16} aria-hidden />
    ) : (
      <SunMoon size={16} aria-hidden />
    );
  const themeActionLabel =
    currentLanguage === "en"
      ? `Theme: ${themeMode === "auto" ? "System" : themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}. Switch to ${themeMode === "light" ? "Dark" : themeMode === "dark" ? "System" : "Light"}`
      : `${t.rail.themePrefix}: ${themeLabel}. ${t.rail.themeSwitchTo} ${nextThemeLabel}`;

  return (
    <nav
      data-tour="toolbar"
      aria-label="Editor tools"
      className="flex w-12 shrink-0 flex-col items-center gap-1 border-r border-border bg-bg-1 py-3"
    >
      <Tooltip content={t.rail.home} placement="end">
        <IconButton
          label={t.rail.home}
          icon={<House size={16} aria-hidden />}
          size="sm"
          variant="ghost"
          onClick={() => navigate("welcome")}
        />
      </Tooltip>

      <div className="my-1.5 h-px w-6 bg-border" />

      <RailButton
        label={t.rail.search}
        icon="magnifyingglass"
        onClick={() => openModal("search")}
      />
      <RailButton
        label={t.rail.undo}
        icon="arrow.uturn.backward"
        onClick={() => void undo()}
      />
      <RailButton
        label={t.rail.redo}
        icon="arrow.uturn.forward"
        onClick={() => void redo()}
      />

      <div className="my-1.5 h-px w-6 bg-border" />

      <RailButton
        label={t.rail.history}
        icon="clock"
        onClick={() => openModal("history")}
        active={activeModal === "history"}
      />
      <RailButton
        label={t.rail.keyframeEditor}
        icon="diamond"
        onClick={toggleKeyframeEditor}
        active={keyframeEditorOpen}
      />
      <RailButton
        label={t.rail.audioMixer}
        icon="music.note"
        onClick={() => togglePanel("audioMixer")}
        active={Boolean(panels.audioMixer?.visible)}
      />
      <RailButton
        label={t.rail.agentChat}
        icon="bubble.left.and.text.bubble.right"
        onClick={() => togglePanel("agentChat")}
        active={Boolean(panels.agentChat?.visible)}
      />
      <RailButton
        label={t.rail.scriptView}
        icon="curlybraces"
        onClick={() => openModal("scriptView")}
      />

      <div className="flex-1" />

      {/* Language Switcher: uz / ru / en */}
      <div
        className="flex flex-col items-center rounded-lg bg-bg-2/80 p-0.5 border border-border text-[10px] font-bold"
        role="group"
        aria-label={t.rail.language}
      >
        {(["uz", "ru", "en"] as const).map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            title={lang === "uz" ? "O'zbekcha" : lang === "ru" ? "Русский" : "English"}
            aria-label={lang === "uz" ? "O'zbekcha" : lang === "ru" ? "Русский" : "English"}
            aria-pressed={currentLanguage === lang}
            className={`h-5 w-7 rounded px-0.5 py-0.5 text-center transition-all ${
              currentLanguage === lang
                ? "bg-accent text-white shadow-sm font-extrabold"
                : "text-fg-muted hover:text-fg hover:bg-bg-3"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="my-1.5 h-px w-6 bg-border" />

      <Tooltip content={themeActionLabel} placement="end">
        <IconButton
          label={themeActionLabel}
          icon={themeIcon}
          size="sm"
          variant="secondary"
          onClick={toggleTheme}
        />
      </Tooltip>

      <DropdownMenu
        placement="end"
        button={{
          label: t.rail.moreActions,
          icon: <Icon name="star" size={16} ariaHidden />,
          size: "sm",
          variant: "ghost",
          isIconOnly: true,
        }}
        hasChevron={false}
        menuWidth={224}
        items={[
          {
            label: t.rail.settings,
            icon: <Settings size={14} aria-hidden />,
            onClick: () => openSettings(),
          },
          {
            label: t.rail.screenRecorder,
            icon: (
              <Circle
                size={14}
                className="fill-current text-status-error"
                aria-hidden
              />
            ),
            onClick: () => openModal("recorder"),
          },
          { type: "divider" },
          {
            label: t.rail.editorTour,
            icon: <Play size={14} aria-hidden />,
            onClick: () => {
              localStorage.removeItem(ONBOARDING_KEY);
              startTour();
            },
          },
          {
            label: t.rail.mographTour,
            icon: <Sparkles size={14} className="text-accent" aria-hidden />,
            onClick: () => {
              localStorage.removeItem(MOGRAPH_TOUR_KEY);
              startMoGraphTour();
            },
          },
          { type: "divider" },
          {
            label: t.rail.help,
            icon: <HelpCircle size={14} aria-hidden />,
            isDisabled: true,
          },
          {
            label: "Project JSON",
            icon: <FileCode size={14} aria-hidden />,
            isDisabled: true,
          },
          {
            label: "Cmd+K to search",
            icon: <Command size={14} aria-hidden />,
            isDisabled: true,
          },
        ]}
      />
    </nav>
  );
};
