import "./WordOrchestraUI.css";
import template from "./WordOrchestraUI.html?raw";

export type IWordOrchestraUI = {
    setBackgroundColor: (color: string) => void;
};

export const WordOrchestraUI = class implements IWordOrchestraUI {
    #root: HTMLElement;
    #onInput: (value: string) => void;

    constructor ({
        parentNode,
        onInput = (value) => console.log(value),
    }: {
        parentNode: HTMLElement;
        onInput?: (value: string) => void;
    }) {
        parentNode.innerHTML = template;

        this.#root = parentNode.querySelector<HTMLElement>(".word-orchestra-ui") ?? parentNode;
        this.#onInput = onInput;

        this.#setValueChangeCallback();
    }

    #setValueChangeCallback = () => {
        const element = this.#root.querySelector<HTMLInputElement>("textarea");
        if (!element) {
            return console.error(new Error("Could not set value change callback."));
        }

        element.addEventListener("change", () => {
            if (element.value) {
                this.#onInput(element.value);
                element.value = "";
            }
        });
    }

    setBackgroundColor = (color: string) => {
        this.#root.style.backgroundColor = color;
    }
}
