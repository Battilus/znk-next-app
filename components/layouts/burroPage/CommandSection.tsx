import React, {FC} from 'react';
import {TFunction} from "i18next";
import Button from "../../shared/Button/Button";
import BurroPreview from "../../shared/SliderPreview/BurroPreview";

interface IProps {
    hover: boolean,
    setHover: (v: boolean) => void,
    t: TFunction<"translation", undefined, "translation">,
}

const CommandSection: FC<IProps> = ({hover, setHover, t}) => {
    return (
        <BurroPreview
            title={t("pages.burro.command.title")}
            titleTextColor={"text-matterhorn"}
            hoverTitleTextColor={"text-white"}
            bgImage={"bg-buro_command_hover_2"}
            hover={hover}
            setHover={setHover}
            hoverClassName={"brightness-75"}
        >
            <>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="relative w-full h-full transition-colors duration-300">
                        <div
                            className={`w-6 2xl:w-1.67v h-6 2xl:h-1.67v bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute top-[20rem] 2xl:top-[39.07%] left-[14.3rem] 2xl:left-[27.94%]`}/>
                        <div
                            className={`w-6 2xl:w-1.67v h-6 2xl:h-1.67v bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute top-[30.5rem] 2xl:top-[59.58%] left-[9rem] 2xl:left-[17.58%]`}/>
                        <div
                            className={`w-6 2xl:w-1.67v h-6 2xl:h-1.67v bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute top-[17rem] 2xl:top-[33.21%] right-[16.6rem] 2xl:right-[32.43%]`}/>
                        <div
                            className={`w-6 2xl:w-1.67v h-6 2xl:h-1.67v bg-whiteSmoke rounded-full hover:bg-yellow-200 absolute bottom-[11.5rem] 2xl:bottom-[22.47%] right-[4.4rem] 2xl:right-[8.6%]`}/>
                    </div>
                </div>
                <Button.Link
                    styleType={"rounded"}
                    className="absolute bottom-5 2xl:bottom-1.39v left-5 2xl:left-1.39v font-medium"
                    href="/"
                >
                    {t("pages.burro.buttonLink.title")}
                </Button.Link>
            </>
        </BurroPreview>
    );
};

export default CommandSection;