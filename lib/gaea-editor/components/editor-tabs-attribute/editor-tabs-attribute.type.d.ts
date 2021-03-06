import * as EditorManager from '../../../gaea-editor-manager/gaea-editor-manager';
import EditorEventStore from '../editor-tabs-event/store';
import EditorEventAction from '../editor-tabs-event/action';
export interface PropsDefine {
    ViewportStore?: EditorManager.ViewportStore;
    EditorEventStore?: EditorEventStore;
    ViewportAction?: EditorManager.ViewportAction;
    ApplicationAction?: EditorManager.ApplicationAction;
    EditorEventAction?: EditorEventAction;
}
export declare class Props implements PropsDefine {
}
export interface StateDefine {
}
export declare class State implements StateDefine {
}
