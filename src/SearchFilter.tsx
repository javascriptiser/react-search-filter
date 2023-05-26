import {ChangeEvent, FC} from "react";


interface SearchFilterProps {
    filterText: string,
    setFilterText: (text: string) => void;
}

export const SearchFilter: FC<SearchFilterProps> = ({filterText, setFilterText}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value)
    }

    return <input type="text"
                  placeholder={"Search..."}
                  value={filterText}
                  name="text"
                  onChange={handleChange}
    />
}