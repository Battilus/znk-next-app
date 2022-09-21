import React, {FC, useState, useMemo} from 'react';

interface IToggleSelectProps {
    suggestions: string[]
    setSuggestion: (selected: string) => void
}

const ToggleSelectButton: FC<IToggleSelectProps> = ({suggestions, setSuggestion}) => {

    const [selected, setSelected] = useState<number>(0);

    useMemo(() => {
        setSuggestion(suggestions[selected]);
    }, [setSuggestion, suggestions, selected])

    return (
        <div className="flex flex-row items-center justify-center space-x-1">
            {suggestions.map((item, index) =>
                <React.Fragment key={item}>
                    <button
                        className={`text-center uppercase text-sm ${index === selected ? "font-medium" : "font-normal"}`}
                        onClick={() => setSelected(index)}
                    >
                        {item}
                    </button>
                    {index !== suggestions.length - 1 ? <span className="font-medium">/</span> : null}
                </React.Fragment>)}
        </div>
    );
};

export default ToggleSelectButton;
