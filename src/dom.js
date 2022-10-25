import {Popo} from "popo-dom"
import {COLOR, DATA_BY_KEYCODE, MOVE_COORD} from "./constrants.js"

const {setAttrs, el} = Popo


export const Cell = ( name, curCoord ) =>
{
    const elem = el.id( `${name}-${curCoord[0]}-${curCoord[1]}` )
    const setColor = ( color ) => setAttrs( elem, {fill: COLOR[color]} )
    const setAttr = ( attrObj ) => setAttrs( elem, attrObj )
    const moveTo = ( keycode ) =>
    {
        const direction = DATA_BY_KEYCODE[keycode]
        const coordToMove = MOVE_COORD[direction]
        const nextCoord = curCoord.map( ( cur, i ) => cur + coordToMove[i] )
        return ( {coordAfter: nextCoord, coordBefore: curCoord} )
    }
    return ( {getElement: elem, setColor, setAttr, moveTo} )
}
