import {MouseEvent, useState} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    /*  value: any*/
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [needToOpenList, setNeedToOpenList] = useState<boolean>(false)
    const [value, setValue] = useState<string>('none')
    const onChangeHandler = (title: string) => {
        setValue(title)
    }
    const toggleList = () => {
        setNeedToOpenList(!needToOpenList)
    }
    const closeList = () => {
        if (needToOpenList) {
            setNeedToOpenList(false)
        }
    }

    return (
        <div>
            <div onClick={toggleList} onBlur={closeList}>{value}</div>
            {needToOpenList && props.items.map(i => <div onClick={() => onChangeHandler(i.title)}
                                                         key={i.value}>{i.title}</div>)}
        </div>
    )
}