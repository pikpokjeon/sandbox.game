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
export const genCubes = () =>
{
    let idx = -1
    const cubesByType = CUBE.TYPES.reduce( ( acc, type ) =>
    {
        const arr = type === 'j' ? genNumArr( CUBE.JOCKER_SET ) : genNumArr( CUBE.TYPE_LEN )
        const cubeDataArr = arr.map( ( num ) =>
        {
            const cubeDataByKey = genNumArr( CUBE.TYPE_KEY_COUNT ).map( ( _, key ) =>
            {
                idx++
                return genCubeData( {type, num, idx, key} )


            } )
            return cubeDataByKey
        }
        ).flat( 1 )
        acc = {...acc, [type]: cubeDataArr}
        return acc
    }, {} )

    console.log( cubesByType )
}

