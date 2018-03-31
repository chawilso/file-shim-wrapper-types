import * as roosterjsPlugins from "roosterjs-editor-plugins";
import * as roosterjsCore from "roosterjs-editor-core";
import * as roosterjsApi from "roosterjs-editor-api";
import * as roosterjsTypes from "roosterjs-editor-types";

/** This export is surfacing the TYPE INFORMATION for rooster JS (Typescript only). don't get it confused with the roosterjs property below. */
export { roosterjsPlugins, roosterjsCore, roosterjsApi, roosterjsTypes };

export type Roosterjs = {
    plugins: typeof roosterjsPlugins,
    api: typeof roosterjsApi,
    core: typeof roosterjsCore
};

/** This is the variable that has all the RUN TIME rooster js code. Effectively, this is what will be accessible from any running code. */
export var roosterjs: Roosterjs;

export as namespace fileModuleShim;
