declare function transcribeAudio(file: string, model: string): Promise<void>;
declare function translateAudio(file: string, model: string): Promise<void>;
export { transcribeAudio, translateAudio };
