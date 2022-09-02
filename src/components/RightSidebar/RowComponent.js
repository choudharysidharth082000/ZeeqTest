import React from 'react'
import Tile from '../Tile'

export default function RowComponent(props) {
    const style = {gridTemplateColumns: `repeat(${props.tiles}, minmax(0, 1fr))`}
    return (
    <div className="flex flex-col">
        {props.SectionName&&<h1 className='text-2xl'>{props.SectionName}</h1>}
        {/* <div className={`grid grid-cols-${props.tiles} gap-10`}> */}
        <div className="grid gap-10" style={style}>
            {props.tilesData.map((tile, index) => (<Tile id={index} title={tile.title} subTitle={tile.subTitle} value={tile.subTitle} changePercent={tile.changePercent} type={tile.type}/>))}
        </div>
    </div>
  )
}