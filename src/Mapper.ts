import { SentimentAnalysisResult } from "./Text/SentimentAnalysis";

export type IMapper = {
    map: (analysis: SentimentAnalysisResult) => void;
};

export const Mapper = class implements IMapper {
    map = (analysis: SentimentAnalysisResult) => console.log({ analysis });
};
