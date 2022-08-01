import { AutoTypingsCore } from './AutoTypingsCore';
import { Options } from './Options';
import type * as monaco from 'monaco-editor';
declare type Editor = monaco.editor.ICodeEditor | monaco.editor.IStandaloneCodeEditor;
export declare class AutoTypings extends AutoTypingsCore {
    private constructor();
    static create(editor: Editor, options?: Partial<Options>): Promise<AutoTypingsCore>;
}
export {};
