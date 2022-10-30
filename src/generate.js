import {CUBE_INFO as CUBE} from "./constrants.js"

const genCubeData = ( {type, num, idx, key} ) =>
{
    const data = {
        idx: idx,
        class: `type-${type}`,
        name: 'cube',
        id: `${type}-${num}-${key}`,
        key: key,
        type: type,
        num: num,
        value: `${type}${num}`,
        status: 'created'
    }
    return data
}

export const genNumArr = ( count ) => Array( count ).fill( 1 ).map( ( _, i ) => _ + i )

// 14, 2, types, jockerCount 2
export const genCubesByTypes = () =>
{
    let idx = 0
    return CUBE.TYPES.reduce( ( acc, type ) =>
    {
        const arr = type === 'j' ? genNumArr( CUBE.JOCKER_SET ) : genNumArr( CUBE.TYPE_LEN )
        const cubeDataArr = arr.map( ( num ) =>
            genNumArr( CUBE.TYPE_KEY_COUNT ).map( ( _, key ) =>
                genCubeData( {type, num, idx: idx++, key} ) ) ).flat( 1 )
        return {...acc, [type]: cubeDataArr}
    }, {} )

}

const genRandomInRange = ( min, max ) => Math.floor( Math.random() * max + min )

export const mixCubes = cubes =>
{
    const _cubes = [...cubes]
    return cubes.reduce( ( box, _, i ) =>
    {
        while ( 1 )
        {
            const idx = genRandomInRange( 0, _cubes.length )
            if ( _cubes[idx] )
            {
                box[i] = _cubes[idx], delete ( _cubes[idx] )
                break
            }
            continue
        }
        return box
    }, [] )
}

export const mixCubesByType = ( cubesByType = {} ) =>
    Object.entries( cubesByType )
        .reduce( ( acc, [type, cubes] ) =>
            ( {...acc, [type]: mixCubes( cubes )} ), {} )
