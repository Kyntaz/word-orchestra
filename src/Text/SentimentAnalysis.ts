import compendium from "compendium-js";

export type SentimentAnalysisResult = {
    sentiment: number;
    intensity: number;
    politeness: number;
    dirtiness: number;
    chaos: number;
};

export type ISentimentAnalysis = {
    analyze: (sentence: string) => Promise<SentimentAnalysisResult[]>;
};

export const SentimentAnalysis: ISentimentAnalysis = class {
    static analyze = async (sentence: string) => {
        return new Promise<SentimentAnalysisResult[]>((resolve) => {
            const analysis = compendium.analyse(sentence);
            const results = analysis.map((props: any) => ({
                sentiment: props.profile.sentiment,
                intensity: props.profile.amplitude,
                politeness: props.profile.politeness,
                dirtiness: props.profile.dirtiness,
                chaos: 1 - props.stats.confidence,
            }));
            return resolve(results);
        });
    }
};
