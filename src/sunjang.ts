/*
 * Copyright (C) Online-Go.com
 * Copyright (C) Benjamin P. Jones
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Score } from "GoEngine";
import type { JGOFIntersection } from "./JGOF";

export function initialState(
    width: number,
    height: number,
    handicap: number,
): { white: JGOFIntersection[]; black: JGOFIntersection[] } {
    return { white: [], black: [] };
}

export function score(board: number[][], komi: number): Score {
    return {
        white: {
            total: 0,
            stones: 0,
            territory: 0,
            prisoners: 0,
            scoring_positions: "",
            handicap: 0,
            komi: komi,
        },
        black: {
            total: 0,
            stones: 0,
            territory: 0,
            prisoners: 0,
            scoring_positions: "",
            handicap: 0,
            komi: 0,
        },
    };
}
