import { IParameter, Parameter } from "../Parameter";
import "./WordOrchestraUI.css";
import template from "./WordOrchestraUI.html?raw";

export type IWordOrchestraUI = {
    parameters: {
        backgroundColor: IParameter<string>,
    },
};

export const WordOrchestraUI = class implements IWordOrchestraUI {
    parameters = {
        backgroundColor: new Parameter("black"),
    };

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

        this.parameters.backgroundColor.subscribe(this.#setBackgroundColor);
    }

    #setValueChangeCallback = () => {
        const element = this.#root.querySelector<HTMLInputElement>("input");
        if (!element) {
            console.error(new Error("Could not set value change callback."));
            return;
        }

        element.addEventListener("change", () => {
            if (element.value) {
                this.#onInput(element.value);
                element.value = "";
            }
        });
    }

    #setBackgroundColor = (color: string) => {
        this.#root.style.backgroundColor = color;
    }
}
