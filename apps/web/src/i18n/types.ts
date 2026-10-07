export type AppLanguage = "uz" | "ru" | "en";

export interface LanguageOption {
  code: AppLanguage;
  label: string;
  nativeLabel: string;
  flag: string;
  shortLabel: string;
}

export interface TranslationDictionary {
  rail: {
    home: string;
    search: string;
    undo: string;
    redo: string;
    history: string;
    keyframeEditor: string;
    audioMixer: string;
    agentChat: string;
    scriptView: string;
    moreActions: string;
    settings: string;
    screenRecorder: string;
    editorTour: string;
    mographTour: string;
    help: string;
    themePrefix: string;
    themeSwitchTo: string;
    themeLight: string;
    themeDark: string;
    themeSystem: string;
    language: string;
    uzbek: string;
    russian: string;
    english: string;
  };
  assets: {
    media: string;
    mediaDesc: string;
    text: string;
    textDesc: string;
    graphics: string;
    graphicsDesc: string;
    effects: string;
    effectsDesc: string;
    transitions: string;
    transitionsDesc: string;
    ai: string;
    aiDesc: string;
    recipes: string;
    recipesDesc: string;
    templates: string;
    templatesDesc: string;
    importMedia: string;
    search: string;
    noMedia: string;
    uploadHelp: string;
  };
  toolbar: {
    export: string;
    exportOptions: string;
    saved: string;
    projectName: string;
    chooseExportSettings: string;
    addContentToExport: string;
  };
  settings: {
    general: string;
    language: string;
    languageDesc: string;
    autoSave: string;
    autoSaveDesc: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    pickFormat: string;
    vertical: string;
    verticalDesc: string;
    horizontal: string;
    horizontalDesc: string;
    square: string;
    squareDesc: string;
    recentProjects: string;
    templates: string;
    back: string;
  };
}
