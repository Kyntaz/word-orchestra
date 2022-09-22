import { ISentimentAnalysis, SentimentAnalysisResult } from "./SentimentAnalysis";

export type IAnalyzer = {
    pushSentence: (sentence: string) => void;
    setCadence: (cadence: number) => void;
};

export const Analyzer = class implements IAnalyzer {
    #queue: SentimentAnalysisResult[] = [];
    #sentimentAnalysis: ISentimentAnalysis;
    #action: (analysis: SentimentAnalysisResult) => void;
    #interval: number;

    constructor ({
        cadence,
        sentimentAnalysis,
        action,
    }: {
        cadence: number;
        sentimentAnalysis: ISentimentAnalysis;
        action: (result: SentimentAnalysisResult) => void;
    }) {
        this.#sentimentAnalysis = sentimentAnalysis;
        this.#action = action;
        this.#interval = setInterval(this.#act, cadence);
    }

    pushSentence = async (sentence: string) => {
        const result = await this.#sentimentAnalysis.analyze(sentence);
        this.#queue.push(...result);
    }

    setCadence = (cadence: number) => {
        clearInterval(this.#interval);
        this.#interval = setInterval(this.#act, cadence);
    }

    #act = () => {
        const analysis = this.#queue.shift();
        if (analysis) {
            this.#action(analysis);
        }
    }
};
