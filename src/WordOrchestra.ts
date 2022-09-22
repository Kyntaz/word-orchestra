import { Analyzer, IAnalyzer } from "./Text/Analyzer";
import { IMapper, Mapper } from "./Mapper";
import { SentimentAnalysis } from "./Text/SentimentAnalysis";
import { IWordOrchestraUI, WordOrchestraUI } from "./WordOrchestraUI/WordOrchestraUI";

export type IWordOrchestra = {
    ui: IWordOrchestraUI;
    mapper: IMapper;
    analyzer: IAnalyzer;
}

export const WordOrchestra = class implements IWordOrchestra {
    ui: IWordOrchestraUI;
    mapper: IMapper;
    analyzer: IAnalyzer;

    static initialize = () => {
        (window as any).WordOrchestra = new WordOrchestra();
    }

    constructor () {
        this.ui = new WordOrchestraUI({
            parentNode: window.document.getElementById("root") ?? window.document.body,
            onInput: async (value) => this.analyzer.pushSentence(value),
        });

        this.mapper = new Mapper();

        this.analyzer = new Analyzer({
            cadence: 5e3,
            sentimentAnalysis: SentimentAnalysis,
            action: (result) => this.mapper.map(result),
        });
    }
}
