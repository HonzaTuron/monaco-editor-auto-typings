import { Options } from './Options';
import type * as monaco from 'monaco-editor';
declare type Editor = monaco.editor.ICodeEditor | monaco.editor.IStandaloneCodeEditor;
export declare class AutoTypingsCore implements monaco.IDisposable {
    private editor;
    private options;
    private static sharedCache?;
    private importResolver;
    private debounceTimer?;
    private isResolving?;
    private disposables;
    constructor(editor: Editor, options: Options);
    static create(editor: Editor, options?: Partial<Options>): Promise<AutoTypingsCore>;
    dispose(): void;
    setVersions(versions: {
        [packageName: string]: string;
    }): void;
    clearCache(): Promise<void>;
    private debouncedResolveContents;
    private resolveContents;
}
export {};
