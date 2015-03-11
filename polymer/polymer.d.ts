// Type definitions for polymer 
// Project: https://github.com/polymer
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface PolymerElement {

	// definition
	publish?: Object;
	computed?: Object;
	// object mapping variable names to functions name
	observe?: Object;

	// life time API
	created? (): void;
	ready? (): void;
	attached? (): void;
	domReady? (): void;
	detached? (): void;
	attributeChanged? (attrName: string, oldVal: any, newVal: any): void;
}

interface Polymer {

    importElements(node: Node, callback: Function);
    import(url: string, callback?: () => void): void;

    mixin(target: any, ...obj1): any;
    waitingFor(): Array<string>;
    // should be an "integer" for milliseconds
    forceReady(timeout: number): void;

    (tag_name: string, prototype: PolymerElement): void;
    (tag_name: string, prototype: any): void;
    (prototype: PolymerElement): void;
    (): void;
	// hacks for mixins
    CoreResizer: any;
    CoreResizable: any;
}

declare var Polymer: Polymer;
