import { SentimentAnalysis } from "./SentimentAnalysis";
import { IWordOrchestraUI, WordOrchestraUI } from "./WordOrchestraUI/WordOrchestraUI";

export const WordOrchestra = class {
    ui: IWordOrchestraUI;

    static initialize = (w = window) => {
        (w as any).WordOrchestra = new WordOrchestra(w);
    }

    constructor (w = window) {
        this.ui = new WordOrchestraUI({
            parentNode: w.document.getElementById("root") ?? w.document.body,
            onInput: async (value) => {
                const result = await SentimentAnalysis.analyze(value);
                console.log({ value, result });
            },
        });
    }
}
