import "../../test/install-local-storage-mock";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { useSettingsStore } from "../../stores/settings-store";
import { EditorActionRail } from "./EditorActionRail";

describe("EditorActionRail Language Switcher", () => {
  beforeEach(() => {
    useSettingsStore.setState({ language: "en" });
  });

  afterEach(() => {
    cleanup();
  });

  it("renders UZ, RU, EN language switcher on the left rail", () => {
    render(<EditorActionRail />);

    expect(screen.getByRole("button", { name: "English" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "O'zbekcha" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Русский" })).toBeInTheDocument();
  });

  it("switches to Uzbek when UZ button is clicked", () => {
    render(<EditorActionRail />);

    const uzButton = screen.getByRole("button", { name: "O'zbekcha" });
    fireEvent.click(uzButton);

    expect(useSettingsStore.getState().language).toBe("uz");
    expect(screen.getByLabelText("Bekor qilish")).toBeInTheDocument();
    expect(screen.getByLabelText("Bosh sahifaga")).toBeInTheDocument();
  });

  it("switches to Russian when RU button is clicked", () => {
    render(<EditorActionRail />);

    const ruButton = screen.getByRole("button", { name: "Русский" });
    fireEvent.click(ruButton);

    expect(useSettingsStore.getState().language).toBe("ru");
    expect(screen.getByLabelText("Отменить")).toBeInTheDocument();
    expect(screen.getByLabelText("На главную")).toBeInTheDocument();
  });

  it("switches back to English when EN button is clicked", () => {
    useSettingsStore.setState({ language: "uz" });
    render(<EditorActionRail />);

    const enButton = screen.getByRole("button", { name: "English" });
    fireEvent.click(enButton);

    expect(useSettingsStore.getState().language).toBe("en");
    expect(screen.getByLabelText("Undo")).toBeInTheDocument();
    expect(screen.getByLabelText("Back to home")).toBeInTheDocument();
  });
});
