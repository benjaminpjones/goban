import { GobanCore, GobanConfig, GobanSelectedThemes } from "./GobanCore";
import { GoEngine } from "./GoEngine";
import { MoveTreePenMarks } from "./MoveTree";

const DEFAULT_CONFIG: GobanConfig = {} as const;

export class TestGoban extends GobanCore {
    public engine: GoEngine;

    constructor(config = DEFAULT_CONFIG) {
        super(config);

        this.engine = this.post_config_constructor();
    }

    public override enablePen(): void {}
    public override disablePen(): void {}
    public override clearAnalysisDrawing(): void {}
    public override drawPenMarks(penmarks: MoveTreePenMarks): void {}
    public override message(msg: string, timeout?: number): void {}
    public override clearMessage(): void {}
    protected override setThemes(themes: GobanSelectedThemes, dont_redraw: boolean): void {}
    public override drawSquare(i: number, j: number): void {}
    public override redraw(force_clear?: boolean): void {}
    public override move_tree_redraw(no_warp?: boolean): void {}
    public override setMoveTreeContainer(container: HTMLElement): void {}
    protected override setTitle(title: string): void {}
    protected override enableDrawing(): void {}
    protected override disableDrawing(): void {}
}
