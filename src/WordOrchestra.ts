import { SentimentAnalysis } from "./SentimentAnalysis";
import { IWordOrchestraUI, WordOrchestraUI } from "./WordOrchestraUI/WordOrchestraUI";

export type IWordOrchestra = {
    ui: IWordOrchestraUI;
}

export const WordOrchestra = class implements IWordOrchestra {
    ui: IWordOrchestraUI;

    static initialize = () => {
        (window as any).WordOrchestra = new WordOrchestra();
    }

    static getInstance = () => {
        return (window as any).WordOrchestra as IWordOrchestra | undefined;;
    }

    constructor () {
        this.ui = new WordOrchestraUI({
            parentNode: window.document.getElementById("root") ?? window.document.body,
            onInput: async (value) => {
                const result = await SentimentAnalysis.analyze(value);
                console.log({ value, result });
            },
        });
    }
}
