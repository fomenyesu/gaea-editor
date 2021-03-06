import * as EditorManager from '../../../gaea-editor-manager/gaea-editor-manager';
export interface PropsDefine {
    ViewportStore?: EditorManager.ViewportStore;
    ApplicationStore?: EditorManager.ApplicationStore;
    ViewportAction?: EditorManager.ViewportAction;
    editInfo?: FitGaea.ComponentPropsGaeaEdit;
}
export declare class Props implements PropsDefine {
}
export interface StateDefine {
    expand?: boolean;
}
export declare class State implements StateDefine {
}
