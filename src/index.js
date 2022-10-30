import {genNumArr, mixCubes, genCubesByTypes, mixCubesByType, genRandomInRange} from "./generate.js"
import {CUBE_INFO as CUBE} from "./constrants.js"
import {Popo} from 'popo-dom'

const {el, is, fragment, element, setAttrs, appendTo} = Popo

const html = element( 'html' )
const svg = element( 'svg' )

const rect = svg( 'rect' )
const tect = svg( 'text' )

const li = html( 'li' )
const div = html( 'div' )

const a = genCubesByTypes()
console.log( a, mixCubes( a ) )
// const b = mixCubesByType( genCubesByTypes() )
// console.log( b )
// console.log( Popo, )

const createNewGroup = () => {}



const board = el.id( 'board' )
const mycubeList = el.id( 'mycubes' )
const addCubeBtn = el.id( 'game-take-button' )
const sortColorBtn = el.id( 'sort-color-button' )
const sortNumberBtn = el.id( 'sort-number-button' )

const cube = c => li( {id: `${c.id}`, class: 'cubeblock'}, [
    div( {class: `circle ${c.class}`, text: c.value} )] )

const addCube = ( targetEl, data ) => targetEl.appendChild( cube( data ) )
const removeElems = targetEl =>
{
    while ( mycubeList.firstChild )
    {
        mycubeList.removeChild( mycubeList.firstChild )
    }
}
const cubesByTeam = {}
let turn = genRandomInRange( 0, 1 )
const cubeQue = mixCubes( a )

console.log( cubeQue )
addCubeBtn.addEventListener( 'click', ( e ) =>
{
    if ( turn < 1 ) turn = 1
    else turn = 0

    if ( !cubesByTeam[turn] ) cubesByTeam[turn] = []
    const newCube = cubeQue.shift()
    cubesByTeam[turn].push( newCube )

    addCube( mycubeList, newCube )


    console.log( cubesByTeam )
} )

// 색상대로 정렬
sortColorBtn.addEventListener( 'click', ( e ) =>
{
    removeElems( mycubeList )
    cubesByTeam[turn] = cubesByTeam[turn].sort( ( a, b ) => a.type.charCodeAt( 0 ) - b.type.charCodeAt( 0 ) )
    cubesByTeam[turn].forEach( cube => addCube( mycubeList, cube ) )


} )

// 번호대로 정렬
sortNumberBtn.addEventListener( 'click', ( e ) =>
{
    removeElems( mycubeList )
    cubesByTeam[turn] = cubesByTeam[turn].sort( ( a, b ) => a.num - b.num )
    cubesByTeam[turn].forEach( cube => addCube( mycubeList, cube ) )
} )