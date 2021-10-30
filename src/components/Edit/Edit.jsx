import React from 'react'
import { AddItem } from './AddItem/AddItem'
import s from './Edit.module.scss'

export default function Edit({menu, setMenu}) {
    return (
        <div className={s.edit}>
            <h1>Edit or Add</h1>
            <AddItem menu={menu} setMenu={setMenu} />
        </div>
    )
}
